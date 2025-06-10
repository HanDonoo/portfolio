import React, { useState } from 'react';

interface BlogCardProps {
    title: string;
    date: string;
    summary: string;
    content: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, summary, content }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div style={styles.card}>
            <h2 style={styles.title}>{title}</h2>
            <p style={styles.date}>{date}</p>
            <p style={styles.summary}>{summary}</p>
            {expanded && <p style={styles.content}>{content}</p>}
            <button onClick={() => setExpanded(!expanded)} style={styles.button}>
                {expanded ? 'Show Less' : 'Show More'}
            </button>
        </div>
    );
};

const styles: Record<string, React.CSSProperties> = {
    card: {
        border: '2px solid #000',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '32px',
        backgroundColor: '#fff',
        boxShadow: '2px 2px 10px rgba(0,0,0,0.05)',
    },
    title: {
        fontSize: '1.4rem',
        fontWeight: 700,
        marginBottom: '6px',
    },
    date: {
        color: '#666',
        fontSize: '0.9rem',
        marginBottom: '12px',
    },
    summary: {
        fontSize: '1rem',
        marginBottom: '12px',
        color: '#333',
    },
    content: {
        fontSize: '0.95rem',
        marginBottom: '12px',
        color: '#444',
    },
    button: {
        color: '#2563eb',
        background: 'none',
        border: '1px solid #2563eb',
        padding: '6px 12px',
        borderRadius: '8px',
        cursor: 'pointer',
    },
};

export default BlogCard;
