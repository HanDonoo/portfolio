import React, { useState } from 'react';

// Header 组件的 Props 定义
interface HeaderProps {
    // onNavigate 用于处理页面内的滚动导航
    onNavigate: (section: 'about' | 'experience' | 'projects' | 'portfolio' | 'contact') => void;
    // current 用于高亮显示当前所在的导航项
    current?: string;
}

// 导航项数据
const navItems = [
    { label: 'About', value: 'about' },
    { label: 'Experience', value: 'experience' },
    { label: 'Projects', value: 'projects' },
    { label: 'Blog', value: 'portfolio' },
    { label: 'Let’s Chat! 👋', value: 'contact' } // 点击此项将打开弹窗
];

const Header: React.FC<HeaderProps> = ({ current, onNavigate }) => {
    // 1. 使用 useState 在 Header 组件内部管理弹窗的显示状态
    const [showCalendly, setShowCalendly] = useState(false);

    // 2. 点击事件处理
    const handleClick = (value: string) => {
        if (value === 'contact') {
            // 如果点击的是 'contact'，则显示弹窗
            setShowCalendly(true);
        } else {
            // 否则，执行页面内导航
            onNavigate(value as any);
        }
    };

    return (
        // React Fragment (<>) 用于包裹多个顶级元素
        <>
            {/* --- 页头部分 --- */}
            <header style={styles.appBar}>
                <div style={styles.toolbar}>
                    <h1 style={styles.title}>Kevin</h1>
                    <nav>
                        {navItems.map((item) => (
                            <button
                                key={item.value}
                                onClick={() => handleClick(item.value)}
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

            {/* --- 弹窗部分 --- */}
            {/* 3. 根据 showCalendly 的状态来条件性渲染弹窗 */}
            {showCalendly && (
                <div style={modalStyles.fullscreen} onClick={() => setShowCalendly(false)}>
                    {/* 阻止点击 iframe 时关闭弹窗 */}
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

// --- Header 的样式 ---
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
        fontFamily: 'inherit',
    },
    activeButton: {
        color: '#f50057',
        fontWeight: '700',
    }
};

// --- Modal 弹窗的样式 ---
const modalStyles: Record<string, React.CSSProperties> = {
    fullscreen: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // 半透明黑色遮罩层
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
