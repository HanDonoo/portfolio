import React from 'react';

const skillsSectionStyle = {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    gap: '1rem',
    marginTop: '2rem',
};

const skillBoxStyle = (backgroundColor: string) => ({
    backgroundColor,
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    padding: '1.5rem',
    width: '250px',
    color: '#000',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '0.5rem',
});

const chipStyle = {
    backgroundColor: '#fff',
    borderRadius: '9999px',
    padding: '0.4rem 0.8rem',
    fontWeight: 500,
    fontSize: '0.9rem',
    display: 'inline-block',
    margin: '0.2rem',
    boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
};

const SkillSection = () => {
    const skillGroups = [
        {
            title: '👨‍💻 Frontend Engineering',
            color: '#a78bfa',
            items: ['React.js', 'React Native', 'Next.js', 'TypeScript', 'Redux', 'MobX'],
        },
        {
            title: '🛠️ API & Backend Integration',
            color: '#fb923c',
            items: ['Node.js', 'REST APIs', 'GraphQL', 'Firebase', 'Headless CMS'],
        },
        {
            title: '🎯 Product & Team Leadership',
            color: '#34d399',
            items: ['Roadmap Planning', 'Agile Execution', 'Stakeholder Collaboration', 'Sprint Management'],
        },
        {
            title: '⚙️ Build & Optimization',
            color: '#f9a8d4',
            items: ['Webpack', 'Vite', 'Vercel', 'GitHub Actions', 'Jest', 'Vitest'],
        },
    ];

    return (
        <div style={skillsSectionStyle}>
            {skillGroups.map((group) => (
                <div key={group.title} style={skillBoxStyle(group.color)}>
                    <strong style={{ fontSize: '1.1rem' }}>{group.title}</strong>
                    <div style={{ display: 'flex', flexWrap: 'wrap' as const }}>
                        {group.items.map((item) => (
                            <span key={item} style={chipStyle}>{item}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SkillSection;
