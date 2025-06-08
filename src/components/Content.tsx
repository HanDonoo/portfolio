import React, { forwardRef } from 'react';
import SkillSection from './SkillSection';

const sectionStyle = {
    marginBottom: '2rem',
    padding: '0 1rem',
};

const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
    wordBreak: 'break-word',
};

const containerStyle = {
    display: 'flex',
    flexWrap: 'nowrap' as const,      // 保证左右不换行，等高
    alignItems: 'stretch',   // 子元素等高拉伸
    minHeight: '400px',
    maxWidth: '1600px',
    margin: '0 auto',
    padding: '0 2rem',
};

const imageWrapperStyle = {
    flex: '1 1 33%',
    maxWidth: '33%',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',           // 让左右两边等高
    marginBottom: 0,          // 去掉默认底部间距
};

const imageStyle = {
    maxHeight: '400px',
    height: '100%',
    width: 'auto',
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0,0,0,0.2)',
    objectFit: 'cover' as const,
};

const textWrapperStyle = {
    flex: '1 1 66%',
    maxWidth: '66%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    height: '100%',          // 让左右两边等高
    paddingLeft: '1.5rem',
};

const iconStyle = {
    height: '1em',
    width: '1em',
    marginRight: '0.4em',
    verticalAlign: 'middle',
    flexShrink: 0,
};

export const About = forwardRef<HTMLDivElement>((_, ref) => (
    <div id="about" ref={ref} style={sectionStyle}>
        <div style={containerStyle}>
            {/* 左侧照片 + 联系方式 */}
            <div style={imageWrapperStyle}>
                <img
                    src="/images/photo.jpg"
                    alt="Kevin Han"
                    style={imageStyle}
                />
                <div
                    style={{
                        marginTop: '0.5rem',
                        fontSize: '1rem',
                        display: 'flex',
                        gap: '1.5rem',
                        justifyContent: 'center',
                    }}
                >
                    <a
                        href="www.linkedin.com/in/kevin-han-1059882b6"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#3b82f6',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: '600',
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={iconStyle}
                        >
                            <path d="M4.98 3.5C4.98 4.88071 3.88071 6 2.5 6C1.11929 6 0 4.88071 0 3.5C0 2.11929 1.11929 1 2.5 1C3.88071 1 4.98 2.11929 4.98 3.5ZM0 8H5V24H0V8ZM8 8H13.5V10.72H13.57C14.12 9.46 15.77 8.1 18.12 8.1C22.5 8.1 24 10.74 24 15.11V24H18V16.26C18 14.2 17.52 12.82 15.25 12.82C13 12.82 12.5 14.28 12.5 16.13V24H7.5V8H8Z" />
                        </svg>
                        LinkedIn
                    </a>
                    <a
                        href="mailto:lhanddong@gmail.com"
                        style={{
                            color: '#3b82f6',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            fontWeight: '600',
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            style={iconStyle}
                        >
                            <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
                        </svg>
                        lhanddong@gmail.com
                    </a>
                </div>
            </div>

            {/* 右侧文字 */}
            <div style={textWrapperStyle}>
                {[
                    `Hi 🙋🏻‍♂️, I’m Kevin, a software engineer passionate about building scalable systems that solve real-world problems — from logistics and healthcare to enterprise automation.`,
                    `Over the past several years, I’ve led the development of mission-critical backend services and full-stack platforms at companies like Alibaba, WeDoctor, and local New Zealand tech firms.`,
                    `My expertise spans microservices, cloud infrastructure (AWS, Azure), and clean architecture using Java, .NET, and Node.js — all underpinned by a strong focus on performance, resilience, and quality.`,
                    `Now based in Auckland 🇳🇿, I’m continuing my journey as a builder, problem-solver, and team player — always looking to craft impactful software that serves both users and business goals.`,
                ].map((text, i) => (
                    // @ts-expect-error
                    <p key={i} style={paragraphStyle}>
                        {text}
                    </p>
                ))}
            </div>
        </div>

        <SkillSection />
    </div>
));
