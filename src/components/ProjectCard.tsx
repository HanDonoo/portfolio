import React from 'react';

// 定义组件接收的 Props 类型
interface ProjectCardProps {
    title: string;
    description: string;
    features: string[];
    imageUrl: string;
    projectUrl: string;
    borderColor: string;
    paragraphStyle: React.CSSProperties;
}

// 可复用项目卡片组件
const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     title,
                                                     description,
                                                     features,
                                                     imageUrl,
                                                     projectUrl,
                                                     borderColor,
                                                     paragraphStyle
                                                 }) => {
    const cardStyle: React.CSSProperties = {
        backgroundColor: '#fff',
        border: `2px solid ${borderColor}`,
        borderRadius: '20px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
        width: 'calc(50% - 1rem)',
        minWidth: '520px',
        maxWidth: '720px',
    };

    const cardContentStyle: React.CSSProperties = {
        flexGrow: 1,
    };

    const cardListStyle: React.CSSProperties = {
        paddingLeft: '1.2rem',
        marginTop: '1rem',
        marginBottom: 0,
    };

    const cardFooterStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '1.5rem',
    };

    const cardLinkStyle: React.CSSProperties = {
        color: '#6b7280', // 灰色
        fontSize: '0.875rem',
        wordBreak: 'break-word',
        maxWidth: '60%',
    };

    const visitButtonStyle: React.CSSProperties = {
        padding: '0.5rem 1rem',
        backgroundColor: '#3b82f6',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
    };

    return (
        <div style={cardStyle}>
            <div>
                <img src={imageUrl} alt={`${title} mockup`} style={{ width: '100%', borderRadius: '12px' }} />
            </div>
            <div style={cardContentStyle}>
                <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>{title}</h3>
                <p style={paragraphStyle}>{description}</p>
                <ul style={cardListStyle}>
                    {features.map((feature, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem' }}>→ {feature}</li>
                    ))}
                </ul>
            </div>
            <div style={cardFooterStyle}>
                <span style={cardLinkStyle}>{projectUrl}</span>
                <a
                    href={`https://${projectUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={visitButtonStyle}
                >
                    Visit Website
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
