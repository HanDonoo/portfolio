import React from 'react';
import BlogCard from './BlogCard';
import useMediaQuery from './useMediaQuery';

const blogs = [
    {
        title: 'A Real-World Retrospective: How We Achieved Zero-Downtime MySQL Sharding for a Table with 30 Million+ Rows',
        date: 'January 2024',
        summary: `
### Our core business table exceeded **30 million** rows, revealing a major performance bottleneck. How do you perform "open-heart surgery" on a live system without disrupting the business?
This article provides a complete retrospective of our entire process, from technology selection to a **zero-downtime** launch.
    `,
        content: `
## 1. The Root of the Problem: Why Was Sharding Necessary?

When a single MySQL table grows to tens or hundreds of millions of rows, a series of predictable performance bottlenecks emerge:

* **Drastic Decline in Query Performance:** Even with proper indexing, the depth of the B+ tree increases, raising the I/O cost for queries and slowing down QPS response times.
* **High Index Maintenance Costs:** Every \`INSERT\` or \`UPDATE\` can trigger index page splits and rebalancing. The larger the dataset, the higher the cost.
* **Operational Risks:** With oversized tables, DDL operations (like adding a new column) can lock the table for extended periods, making them extremely high-risk. The risk of a single point of failure is also magnified.

To address these issues, database sharding is the industry-recognized solution. It horizontally partitions data across multiple databases and tables, distributing the load and enabling horizontal scalability.

---

## 2. Technology Selection: Choosing the Right "Scalpel"

The first step was selecting our tooling. There are many mainstream database sharding middleware solutions available, and we primarily evaluated the following:

* **ShardingSphere (including Sharding-JDBC and Sharding-Proxy):** As a top-level Apache project, its ecosystem is incredibly mature. \`Sharding-JDBC\` is integrated as a \`.jar\` library, which is relatively non-intrusive to the application, supports a rich set of sharding strategies, and has low performance overhead, making it ideal for a Java-based stack. \`Sharding-Proxy\` acts as a standalone database proxy, which is code-agnostic but adds an extra network hop.
* **MyCAT:** A powerful database proxy that masquerades as a MySQL server, making it transparent to the application layer. It's feature-rich but architecturally heavy, requiring a separate proxy cluster to be deployed and maintained.
* **TDDL (Taobao Distributed Data Layer):** An internal solution from Alibaba. It's extremely powerful but is often deeply integrated with Alibaba's internal technology stack, making it difficult for external teams to adopt.
* **Vitess:** Originally from YouTube and now a CNCF graduated project. It's a database clustering system that offers capabilities beyond native MySQL. Its architecture is advanced, but it would have introduced more complexity than we needed at the time.

**Our Final Decision:** Given our Java/Spring Boot technology stack and our desire for a smooth, controllable migration, we ultimately chose **Sharding-JDBC**. Its lightweight and flexible nature, combined with an active community, allowed us to manage the sharding logic as part of our application layer.

---

## 3. The Implementation Plan: Slicing the Elephant

With our tool selected, we developed a meticulous, multi-phase implementation plan to ensure a flawless execution.

#### Phase 1: Blueprinting - Determining Shard Count and Sharding Key

* **Capacity Planning:** We forecast our data growth over the next 3-5 years based on business trends. This informed our decision on the number of databases and tables. For example, we planned for 8 databases, each with 16 tables, for a total of 128 sharded tables. This provided ample room for future growth.
* **Defining the Sharding Key:** This is the heart of database sharding. The choice of a sharding key directly determines how evenly data is distributed. We selected the most central and frequently queried ID in our business logic (e.g., \`user_id\` or \`order_id\`) as our sharding key. All queries based on this key could be precisely routed to a single database and table, delivering the highest performance.

#### Phase 2: Parallel Tracks - Code Refactoring and Historical Data Migration

This was a critical, two-pronged phase:

1.  **Code Development:** We began refactoring our existing application code, introducing the \`Sharding-JDBC\` dependency and re-architecting our data access layer (DAO/Repository). This ensured all data read/write logic was compatible with the new sharding rules. It was a detailed process that required ensuring every SQL statement could be correctly parsed and routed by Sharding-JDBC.
2.  **Historical Data Migration:** After executing the DDL scripts to create the new sharded tables, we had to migrate over 30 million historical records. We used offline scripts for this process, calculating the correct destination for each record based on its original ID and then inserting it into the new sharded structure. This was a time-consuming ETL process that we ran during off-peak hours.

#### Phase 3: Building an "Anti-Corruption Layer" for Complex Queries

A classic challenge arises after sharding: what do you do with queries that don't use the sharding key (e.g., searching for orders by a customer's nickname) or require complex pagination and analytics? Traversing every sharded table (a "broadcast route") would be a performance disaster.

To solve this, we introduced an **Anti-Corruption Layer**:

* **Introduce Elasticsearch:** We synchronized all data requiring complex queries from MySQL to Elasticsearch in near real-time by capturing \`binlog\` events.
* **Query Segregation:** All backend list-based queries, fuzzy searches, and other non-primary-key lookups were refactored. Instead of hitting the MySQL database directly, they were routed to Elasticsearch. This satisfied complex query requirements while shielding the sharded database from performance-killing operations.

---

## 4. The Seamless Launch: The Art of a Zero-Downtime Cutover

This was the most thrilling and technically demanding part of the project, where engineering discipline was paramount. Our core objectives were: **zero business impact and zero data loss.**

#### Stage 1: Dual-Writing and Data Reconciliation
* Before the refactored code went live, we enabled a **dual-writing mode**. All write operations (\`INSERT\`, \`UPDATE\`, \`DELETE\`) were sent to *both* the old database and the new sharded database simultaneously. However, at this stage, all read operations continued to pull data exclusively from the **old database**.
* The purpose was to validate the stability and correctness of the new write path. Concurrently, we ran **offline data reconciliation jobs** to periodically compare the data between the old and new systems, ensuring they were perfectly consistent.

#### Stage 2: Canary Release and Real-Time Monitoring
* After a period of stable dual-writing and successful data reconciliation, we began a **grayscale rollout (or canary release) for reads**.
* We implemented a **feature flag** that allowed us to incrementally shift read traffic to the new sharded database by percentage (e.g., 1%, 5%, 20%, and so on).
* Throughout this process, we closely monitored the performance metrics of the new database (QPS, latency, CPU, memory) and our application error logs. If any issues arose, we could instantly flip the switch off, routing 100% of read traffic back to the old database for an immediate rollback.

#### Stage 3: Full Cutover and Decommissioning
* After several rounds of incrementally increasing read traffic, once 100% of reads and writes were running smoothly on the new sharded database for a sustained period, the core migration was declared a success.
* Finally, after confirming everything was stable, we disabled the dual-writing mode and decommissioned the old database, officially completing the technical upgrade.

---

## Conclusion and Takeaways

This successful zero-downtime sharding project not only resolved our immediate performance bottlenecks but also paved the way for years of future business growth. Reflecting on the process, I have a few key takeaways:

1.  **Sharding is a system-level engineering project, not just a code change.** It requires meticulous planning, cross-functional collaboration, and a deep understanding of the business.
2.  **A smooth transition plan is the key to success.** Strategies like dual-writing, data reconciliation, and canary releases are the lifelines that guarantee online stability.
3.  **Design for the exceptions.** Proactively address "edge cases" like non-sharded queries by building an anti-corruption layer with tools like Elasticsearch. This will save you from major technical debt down the road.
4.  **Hypothesize boldly, but verify cautiously.** Be ambitious in your forecasts for business growth, but ensure every implementation step has a clear verification process and a rollback plan.
    `
    }
];

const BlogList = () => {
    // 判断是否为PC端（宽度大于等于 768px）
    const isPC = useMediaQuery('(min-width: 768px)');

    // 根据设备类型设置不同的边距
    const containerStyle = isPC
        ? {
            paddingTop: '80px',
            paddingBottom: '40px',
            paddingLeft: '400px',
            paddingRight: '400px',
        }
        : {
            paddingTop: '60px',
            paddingBottom: '20px',
            paddingLeft: '4px',
            paddingRight: '4px',
        };

    return (
        <div style={containerStyle}>
            {blogs.map((blog, index) => (
                <BlogCard
                    key={index}
                    title={blog.title}
                    date={blog.date}
                    summary={blog.summary}
                    content={blog.content}
                />
            ))}
        </div>
    );
};

export default BlogList;
