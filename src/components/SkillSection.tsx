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
    width: '400px',
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
            title: '👨‍💻 Backend & Cloud Development',
            color: '#93c5fd',
            items: [
                'Java', 'C#', 'Node.js', 'Python', '.NET Core', 'Spring Boot',
                'Microservices', 'Redis', 'SQL', 'MongoDB',
                'REST APIs', 'Kafka', 'RabbitMQ',
                'Docker', 'Kubernetes', 'AWS', 'Azure'
            ],
        },
        {
            title: '🧑‍🎨 Frontend & UI Integration',
            color: '#a78bfa',
            items: [
                'React.js', 'Vue.js', 'Next.js', 'TypeScript', 'Redux',
                'Material UI', 'Tailwind CSS', 'HTML/CSS'
            ],
        },
        {
            title: '⚙️ DevOps & CI/CD',
            color: '#facc15',
            items: [
                'Jenkins', 'GitHub Actions', 'Docker Compose',
                'Helm', 'Terraform', 'Prometheus', 'Grafana'
            ],
        },
        {
            title: '🧠 System Architecture & Product Thinking',
            color: '#34d399',
            items: [
                'Scalable Architecture', 'System Design',
                'DDD', 'Agile/Scrum', 'Swagger', 'Postman'
            ],
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
