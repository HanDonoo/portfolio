import React, { forwardRef, useState } from 'react';

interface ExperienceData {
    company: string;
    title: string;
    period: string;
    description: string[];
}

const experiences: ExperienceData[] = [
    {
        company: 'MoeGo',
        title: 'Product Owner & Senior Engineer',
        period: 'Sep 2021 – Sep 2024',
        description: [
            'MoeGo is a SaaS platform serving the pet grooming industry.',
            'I joined MoeGo when the team was just 20 people. I helped shape our architecture, dev workflow, and team culture.',
            'Later I led the Booking 2.0 initiative, including whiteboard planning, roadmap scoping, and fullstack delivery.',
            'It was a deeply rewarding experience and really honed my skills in cross-functional leadership.',
        ],
    },
    {
        company: 'Polarr',
        title: 'Senior Frontend Engineer',
        period: 'Sep 2019 – Mar 2020',
        description: [
            'Polarr is a creative tools company backed by Threshold and Pear VC.',
            'I rebuilt the core Polarr Photo Editor in React with a focus on offline-first architecture.',
            'At Polarr, I worked closely with designers and helped ship a GPU-accelerated rendering engine using WebGL.',
        ],
    },
];

const sectionStyle = {
    marginBottom: '2rem',
    padding: '0 1rem',
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
    wordBreak: 'break-word',
};

const containerStyle = {
    display: 'flex',
    flexDirection: 'row' as const,
    gap: '2rem',
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
};

const detailStyle = {
    flex: 1,
    padding: '1.5rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
};

export const Experience = forwardRef<HTMLDivElement>((_, ref) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div id="experience" ref={ref} style={sectionStyle}>
            <h2 style={{ ...titleStyle, textAlign: 'center' }}>Professional Experience</h2>
            <div style={containerStyle}>
                {/* 右边详情 */}
                <div style={detailStyle}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        {experiences[selectedIndex].company}
                    </h3>
                    <p style={{ fontSize: '1.2rem' }}>{experiences[selectedIndex].title}</p>
                    <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                        {experiences[selectedIndex].period}
                    </p>
                    {experiences[selectedIndex].description.map((line, idx) => (
                        // @ts-expect-error
                        <p key={idx} style={paragraphStyle}>
                            {line}
                        </p>
                    ))}
                </div>
                {/* 左边公司列表 */}
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
                            <div style={{ fontWeight: 'bold' }}>{exp.company}</div>
                            <div>{exp.title}</div>
                            <div style={{ fontSize: '0.9rem', color: '#666' }}>{exp.period}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
});
