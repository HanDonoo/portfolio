import React, { forwardRef, useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';
import useMediaQuery from './useMediaQuery';

interface ExperienceData {
    company: string;
    title: string;
    period: string;
    description: string[];
    logo?: string; // 添加 logo 字段
}

const experiences: ExperienceData[] = [
    {
        company: 'Matricle (NZ)',
        logo: '/logo/favicon.ico',
        title: 'Full Stack Software Engineer (Part-Time)',
        period: 'Apr 2024 – Present',
        description: [
            'Matricle is a CRM/ERP software vendor in Auckland, serving clients across logistics and manufacturing.',
            'I built core modules using ASP.NET Core and Vue.js, covering order, project, and workflow management.',
            'Designed a custom workflow engine that automated 60% of manual processes.',
            'Improved delivery timelines by 30% and reduced defects through 150+ unit tests with NUnit & Moq.',
        ],
    },
    {
        company: 'Alibaba (CH)',
        logo: '/logo/img_2.png',
        title: 'Senior Development Engineer',
        period: 'Dec 2020 – Nov 2023',
        description: [
            'Led backend design for logistics onboarding, CRM, and city-level agent task systems supporting millions of users.',
            'Integrated Cainiao’s platforms with Alipay, WeChat, and Taobao, enabling real-time data exchange.',
            'Reduced onboarding time by 40%, improved lead conversion by 25%, and optimized infra cost by 30%.',
            'Mentored junior engineers and led cross-functional collaboration across logistics and operations.',
        ],
    },
    {
        company: 'WeDoctor (CH)',
        logo: '/logo/img_5.png',
        title: 'Development Engineer',
        period: 'Jan 2018 – Dec 2020',
        description: [
            'Worked on electronic prescription and pharmacy order systems in a regulated healthcare environment.',
            'Integrated with multiple HIS systems for real-time prescription syncing and medication ordering.',
            'Enabled 5x traffic scalability while maintaining low latency using Hystrix and optimized architecture.',
            'Improved prescription-to-fulfillment time by 40% and boosted order conversion by 50%.',
        ],
    },
];

const sectionStyle = {
    marginBottom: '2rem',
    padding: '0 1rem',
    paddingTop: '4rem',
};

const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
};

const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
    wordBreak: 'break-word' as const,
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'row' as const,
    gap: '2rem',
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '0 2rem',
};

const listStyle = {
    width: '30%',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
};

const itemStyle = {
    padding: '1rem',
    borderRadius: '8px',
    transition: 'background 0.2s ease-in-out',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
};

const logoStyle = {
    width: '32px',
    height: '32px',
    objectFit: 'contain' as const,
};

const detailStyle = {
    flex: 1,
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

// ==== 移动端相关样式 ====

const containerStyleMobile = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '0 0.5rem',  // 减小左右边距，给标题更多空间
};

const itemStyleMobile = {
    padding: '1rem',
    borderRadius: '0',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
};

const detailStyleMobile = {
    marginTop: '0.5rem',
    padding: '1rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

const listItemContentStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flex: 1,
};

const companyInfoStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    lineHeight: 1.2,
};

const arrowContainerStyle = {
    fontSize: '1.3rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '8px',
};

export const Experience = forwardRef<HTMLDivElement>((_, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(1); // 默认选中 Alibaba (CH)，索引 1
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const isMobile = useMediaQuery('(max-width:768px)');

    // 移动端点击箭头展开/收起详情
    const toggleExpand = (index: number) => {
        setExpandedIndex((prev) => (prev === index ? null : index));
        setSelectedIndex(index);
    };

    if (isMobile) {
        return (
            <div id="experience" ref={ref} style={sectionStyle}>
                <h2
                    style={{
                        ...titleStyle,
                        textAlign: 'center',
                        marginLeft: 0,
                        marginRight: 0,
                        whiteSpace: 'nowrap', // 防止换行
                    }}
                >
                    Professional Experience
                </h2>
                <div style={containerStyleMobile}>
                    {experiences.map((exp, i) => (
                        <div key={i}>
                            <div
                                style={itemStyleMobile}
                                onClick={() => setSelectedIndex(i)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        setSelectedIndex(i);
                                    }
                                }}
                            >
                                <div style={listItemContentStyle} onClick={() => setSelectedIndex(i)}>
                                    {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} style={logoStyle} />}
                                    <div style={companyInfoStyle}>
                                        <div style={{ fontWeight: 'bold' }}>{exp.company}</div>
                                        <div style={{ fontSize: '0.9rem', color: '#666' }}>{exp.period}</div>
                                        <div>{exp.title}</div>
                                    </div>
                                </div>
                                <div
                                    style={arrowContainerStyle}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleExpand(i);
                                    }}
                                    aria-label={expandedIndex === i ? 'Collapse details' : 'Expand details'}
                                >
                                    {expandedIndex === i ? <SlArrowUp /> : <SlArrowDown />}
                                </div>
                            </div>
                            {expandedIndex === i && (
                                <div style={detailStyleMobile}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{exp.company}</h3>
                                    <p style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{exp.title}</p>
                                    <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{exp.period}</p>
                                    {exp.description.map((line, idx) => (
                                        <p key={idx} style={paragraphStyle}>
                                            {line}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    // PC端布局：左侧详情，右侧公司列表
    return (
        <div id="experience" ref={ref} style={sectionStyle}>
            <h2 style={{ ...titleStyle, textAlign: 'center' }}>Professional Experience</h2>
            <div style={containerStyle}>
                {/* 左侧详情 */}
                <div style={detailStyle}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{experiences[selectedIndex].company}</h3>
                    <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>{experiences[selectedIndex].period}</p>
                    <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{experiences[selectedIndex].title}</p>
                    {experiences[selectedIndex].description.map((line, idx) => (
                        <p key={idx} style={paragraphStyle}>
                            {line}
                        </p>
                    ))}
                </div>

                {/* 右侧公司列表 */}
                <div style={listStyle}>
                    {experiences.map((exp, i) => (
                        <div
                            key={i}
                            style={{
                                ...itemStyle,
                                backgroundColor: selectedIndex === i ? '#fff7f2' : 'transparent',
                            }}
                            onClick={() => setSelectedIndex(i)}
                        >
                            {exp.logo && <img src={exp.logo} alt={`${exp.company} logo`} style={logoStyle} />}
                            <div>
                                <div style={{ fontWeight: 'bold' }}>{exp.company}</div>
                                <div>{exp.title}</div>
                                <div style={{ fontSize: '0.9rem', color: '#666' }}>{exp.period}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});
