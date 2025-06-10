import React from 'react';
import BlogCard from './BlogCard';

const blogs = [
    {
        title: 'Why Your Component Library Feels Heavy, and How to Make It Feel Instant',
        date: 'April 2025',
        summary: 'Practical techniques to improve perceived performance in modern UI systems',
        content: 'My component library didn’t lag.\nRender times were acceptable.\nAnd here’s how I achieved that with lazy-loading and bundling optimizations.',
    },
    {
        title: 'Designing a Scalable White-Label Mobile App System with React Native',
        date: 'March 2025',
        summary: 'A deep dive into architecture and deployment strategies behind multi-brand apps',
        content: 'When building mobile apps that serve multiple brands, it’s tempting to think of white-labeling as a surface-level problem. But building a scalable, maintainable white-label system is far from trivial.',
    },
];

const BlogList = () => {
    return (
        <div style={{
            // 上下边距组
            paddingTop: '80px',
            paddingBottom: '40px',

            // 左右边距组
            paddingLeft: '30px',
            paddingRight: '30px',
        }}>
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
