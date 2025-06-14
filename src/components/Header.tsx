import React, { useState } from 'react';

interface HeaderProps {
    onNavigate: (section: 'about' | 'experience' | 'projects' | 'portfolio' | 'contact') => void;
    current?: string;
}

const navItems = [
    { label: 'About', value: 'about' },
    { label: 'Experience', value: 'experience' },
    { label: 'Projects', value: 'projects' },
    { label: 'Blog', value: 'portfolio' },
    { label: 'Let’s Chat! 👋', value: 'contact' },
];

const Header: React.FC<HeaderProps> = ({ current, onNavigate }) => {
    const [showCalendly, setShowCalendly] = useState(false);

    const handleClick = (value: string) => {
        if (value === 'contact') {
            setShowCalendly(true);
        } else {
            onNavigate(value as any);
        }
    };

    return (
        <>
            <header
                style={{
                    ...styles.appBar,
                    backgroundColor: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'saturate(180%) blur(10px)',
                    transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
                }}
            >
                <div style={styles.toolbar}>
                    <h1 style={styles.title}>Kevin</h1>
                    <nav>
                        {navItems.map(item => {
                            const isActive = current === item.value;
                            const isContact = item.value === 'contact';

                            return (
                                <button
                                    key={item.value}
                                    onClick={() => handleClick(item.value)}
                                    style={{
                                        ...styles.button,
                                        ...(isActive ? styles.activeButton : {}),
                                        ...(isContact ? styles.contactButton : {}),
                                    }}
                                >
                                    {item.label}
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </header>

            {showCalendly && (
                <div style={modalStyles.fullscreen} onClick={() => setShowCalendly(false)}>
                    <div onClick={e => e.stopPropagation()} style={modalStyles.iframeWrapper}>
                        <button
                            style={modalStyles.closeAbsolute}
                            onClick={() => setShowCalendly(false)}
                            aria-label="Close Calendly"
                        >
                            ✖
                        </button>
                        <iframe
                            src="https://calendly.com/lhanddong/30min"
                            width="100%"
                            height="100%"
                            style={{ border: 'none' }}
                            allow="camera; microphone; fullscreen; autoplay"
                            title="Calendly Scheduling"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

const styles: Record<string, React.CSSProperties> = {
    appBar: {
        position: 'fixed',
        top: 0,
        width: '100%',
        color: '#222222',
        background: 'linear-gradient(to bottom, white 50%, transparent 50%)',
        boxShadow: 'none',
        zIndex: 1000,
        height: 64,
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '100%',
        margin: '0 auto',
        padding: '0 20px',
        height: 64,
    },
    title: {
        fontWeight: '700',
        fontSize: '1.6rem',
        margin: 0,
        color: '#1a1a1a',
    },
    button: {
        backgroundColor: '#e0e7ff',
        border: '1.5px solid #a5b4fc',
        color: '#4338ca',
        fontSize: '1rem',
        cursor: 'pointer',
        marginLeft: 14,
        padding: '10px 18px',
        borderRadius: 12,
        fontFamily: 'inherit',
        transition: 'all 0.25s ease',
        boxShadow: '0 2px 6px rgba(67, 56, 202, 0.25)',
    },
    activeButton: {
        backgroundColor: '#4338ca',
        color: '#ffffff',
        fontWeight: 700,
        border: '1.5px solid #312e81',
        boxShadow: '0 4px 12px rgba(67, 56, 202, 0.6)',
    },
    contactButton: {
        backgroundColor: '#3b82f6',  // 这里是蓝色背景
        color: '#fff',
        border: '1.5px solid #2563eb',
        boxShadow: '0 2px 6px rgba(37, 99, 235, 0.5)',
        fontWeight: 700,
    },
};

const modalStyles: Record<string, React.CSSProperties> = {
    fullscreen: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iframeWrapper: {
        position: 'relative',
        width: '90vw',
        height: '90vh',
        maxWidth: '1000px',
        maxHeight: '700px',
        backgroundColor: 'white',
        borderRadius: 8,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        overflow: 'hidden',
    },
    closeAbsolute: {
        position: 'absolute',
        top: 12,
        right: 12,
        background: 'rgba(255,255,255,0.9)',
        border: 'none',
        borderRadius: '50%',
        width: 32,
        height: 32,
        fontSize: 20,
        cursor: 'pointer',
        zIndex: 2100,
        lineHeight: '32px',
        textAlign: 'center',
        padding: 0,
    },
};

export default Header;
