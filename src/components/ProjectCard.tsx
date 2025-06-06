import React from 'react';

// 定义组件接收的 Props 类型
interface ProjectCardProps {
    title: string;
    description: string;
    features: string[];
    imageUrl: string;
    projectUrl: string;
    borderColor: string;
    // 将外部样式作为 prop 传入
    paragraphStyle: React.CSSProperties;
}

// 这是一个为项目卡片创建的可复用新组件
// 使用 export default 默认导出
const ProjectCard: React.FC<ProjectCardProps> = ({
                                                     title,
                                                     description,
                                                     features,
                                                     imageUrl,
                                                     projectUrl,
                                                     borderColor,
                                                     paragraphStyle // 接收样式 prop
                                                 }) => {
    // 卡片的基础样式
    const cardStyle: React.CSSProperties = {
        backgroundColor: '#fff',
        border: `2px solid ${borderColor}`,
        borderRadius: '20px',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        boxShadow: '0 8px 16px rgba(0,0,0,0.05)',
        flex: '1 1 45%',
        minWidth: '320px',
        maxWidth: '480px',
    };

    // ... 其他样式变量定义保持不变 ...
    // const cardImageStyle: React.CSSProperties = { /* ... */ };
    const cardContentStyle: React.CSSProperties = { flexGrow: 1 };
    const cardListStyle: React.CSSProperties = { /* ... */ };
    const cardFooterStyle: React.CSSProperties = { /* ... */ };
    const cardLinkStyle: React.CSSProperties = { /* ... */ };
    const visitButtonStyle: React.CSSProperties = { /* ... */ };


    return (
        <div style={cardStyle}>
            <div>
                <img src={imageUrl} alt={`${title} mockup`} style={{ width: '100%', borderRadius: '12px' }} />
            </div>
            <div style={cardContentStyle}>
                <h3 style={{ fontSize: '1.5rem', marginTop: '1.5rem', marginBottom: '0.75rem' }}>{title}</h3>
                {/* 现在使用传入的 paragraphStyle prop */}
                <p style={paragraphStyle}>{description}</p>
                <ul style={cardListStyle}>
                    {features.map((feature, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem' }}>→ {feature}</li>
                    ))}
                </ul>
            </div>
            <div style={cardFooterStyle}>
                <span style={cardLinkStyle}>{projectUrl}</span>
                <a href={`https://${projectUrl}`} target="_blank" rel="noopener noreferrer" style={visitButtonStyle}>
                    Visit Website
                </a>
            </div>
        </div>
    );
};

export default ProjectCard; // <--- 修正：添加默认导出
