import React from 'react';

interface HeaderProps {
    onNavigate: (section: 'about' | 'experience' | 'projects' | 'portfolio' | 'contact') => void;
    current?: string;
}

const navItems = [
    { label: 'About', value: 'about' },
    { label: 'Experience', value: 'experience' },
    { label: 'Projects', value: 'projects' },
    { label: 'Blog', value: 'portfolio' },
    { label: 'Let’s Chat! 👋', value: 'contact' }
];

const Header: React.FC<HeaderProps> = ({ current, onNavigate }) => {
    return (
        <header style={styles.appBar}>
            <div style={styles.toolbar}>
                <h1 style={styles.title}>Kevin</h1>
                <nav>
                    {navItems.map((item) => (
                        <button
                            key={item.value}
                            // @ts-expect-error
                            onClick={() => onNavigate(item.value)}
                            style={{
                                ...styles.button,
                                ...(current === item.value ? styles.activeButton : {})
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
};

const styles: Record<string, React.CSSProperties> = {
    appBar: {
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#fff',
        color: '#000',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        zIndex: 1000,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 16px',
        height: 64,
    },
    title: {
        fontWeight: '700',
        fontSize: '1.5rem',
        margin: 0,
    },
    button: {
        background: 'none',
        border: 'none',
        color: 'inherit',
        fontSize: '1rem',
        cursor: 'pointer',
        marginLeft: 16,
        padding: '8px 12px',
        textTransform: 'none',
    },
    activeButton: {
        color: '#f50057', // 你想要的高亮颜色，比如MUI secondary色
        fontWeight: '700',
    }
};

export default Header;
