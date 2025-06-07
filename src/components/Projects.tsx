import React, { forwardRef } from 'react';
import ProjectCard from './ProjectCard';

const sectionStyle = {
    marginBottom: '2rem',
    padding: '0 1rem',
    paddingBottom: '5rem', // ⬅️ 增加距底部的空间
};

const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center' as const,
};

const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
    wordBreak: 'break-word',
};

const projectsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '2rem',                     // ✅ 保持 gap 不变
    justifyContent: 'space-between',
    maxWidth: '1400px',             // ✅ 可调宽一些以容纳更大的卡片
    margin: '0 auto',
};

const projectsData = [
    {
        title: "Matricle ERP Workflow Engine",
        description: "An extensible ERP workflow engine that automates production and order tracking for local New Zealand businesses.",
        features: [
            "Designed and implemented a custom rule-based workflow engine reducing manual operations by 60%.",
            "Enabled dynamic business process orchestration with clean, testable architecture.",
            "Improved system throughput and operational efficiency with real-time event handling.",
        ],
        imageUrl: "/person_project/images/matricle1.png",
        projectUrl: "matricle.com",
        borderColor: "#93c5fd",
    },
    {
        title: "Matricle CRM and Project Management Module",
        description: "An integrated CRM and project module to centralize task visibility, improve team performance, and automate customer operations.",
        features: [
            "Built project tracking dashboard with real-time visibility and task assignments.",
            "Developed centralized customer relationship logic for lead tracking and workflow automation.",
            "Delivered 25% faster order processing and 30% fewer project delays through system improvements.",
        ],
        imageUrl: "/person_project/images/matricle2.png",
        projectUrl: "matricle.com/solutions/manufacturing",
        borderColor: "#60a5fa",
    },
    {
        title: "Cainiao Station Onboarding Platform",
        description: "A logistics onboarding platform within Alibaba’s Cainiao division, used for managing thousands of pickup stations across China.",
        features: [
            "Integrated with Alipay to streamline deposit and verification processes, reducing station activation time by 40%.",
            "Scalable architecture to support nationwide station expansion across new markets.",
            "Improved automation and system flexibility via centralized configuration logic.",
        ],
        imageUrl: "/person_project/images/alibaba3.png",
        projectUrl: "cainiao.com",
        borderColor: "#fcd34d",
    },
    {
        title: "Cainiao CRM & City Battle Map",
        description: "A mission-critical CRM and real-time field management platform for partner acquisition and performance visualization.",
        features: [
            "Designed a CRM system handling over 10 million leads from Taobao and WeChat.",
            "Built a real-time City Battle Map for 2,000+ field agents to track tasks and KPIs.",
            "Reduced infrastructure costs by 30% via performance tuning and architecture optimization.",
        ],
        imageUrl: "/person_project/images/alibaba1.png",
        projectUrl: "yz.cainiao.com",
        borderColor: "#fbbf24",
    },
    {
        title: "WeDoctor Electronic Prescription System",
        description: "A full-stack e-prescription backend enabling real-time issuance and validation of medication orders within China's healthcare network.",
        features: [
            "Enabled doctors to issue digital prescriptions synced with pharmacies and hospital systems.",
            "Improved prescription-to-fulfillment time by 40% and boosted conversion rate by 50%.",
            "Integrated with third-party APIs and Elasticsearch to expand reach and enhance search accuracy.",
        ],
        imageUrl: "/person_project/images/wedoctor1.jpg",
        projectUrl: "wy.guahao.com",
        borderColor: "#6ee7b7",
    },
    {
        title: "WeDoctor Medication Order & HIS Integration",
        description: "A scalable order system for online pharmacies and hospital systems to streamline medication fulfillment workflows.",
        features: [
            "Built modular order system supporting high concurrency and real-time syncing with HIS systems.",
            "Implemented circuit breaker pattern (Hystrix) to maintain system resilience under load spikes.",
            "Achieved 5x scalability while maintaining zero critical downtime during peak events.",
        ],
        imageUrl: "/person_project/images/wedoctor2.png",
        projectUrl: "wedoctor.com",
        borderColor: "#34d399",
    },
];

const Projects = forwardRef<HTMLDivElement>((_, ref) => (
    <div id="projects" ref={ref} style={sectionStyle}>
        <h2 style={titleStyle}>Recent Projects</h2>
        <div style={projectsContainerStyle}>
            {projectsData.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.title}
                    description={project.description}
                    features={project.features}
                    imageUrl={project.imageUrl}
                    projectUrl={project.projectUrl}
                    borderColor={project.borderColor}
                    // @ts-expect-error 传入样式控制段落样式
                    paragraphStyle={paragraphStyle}
                />
            ))}
        </div>
    </div>
));

export default Projects;
