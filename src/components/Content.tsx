import React, { forwardRef } from 'react';
import SkillSection from './SkillSection';
import {Experience} from './Experience';

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
    flexWrap: 'wrap' as const,
    alignItems: 'stretch',
    minHeight: '400px',
};

const imageWrapperStyle = {
    flex: '1 1 100%',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem',
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
    flex: '1 1 100%',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
};

export const About = forwardRef<HTMLDivElement>((_, ref) => (
    <div id="about" ref={ref} style={sectionStyle}>
        <div style={containerStyle}>
            {/* 左侧照片 */}
            <div style={{ ...imageWrapperStyle, flex: '1 1 33%' }}>
                <img
                    src="/person_project/images/photo.jpg"
                    alt="Kevin Han"
                    style={imageStyle}
                />
            </div>

            {/* 右侧文字 */}
            <div style={{ ...textWrapperStyle, flex: '1 1 66%' }}>
                {[
                    `Hi 🙋🏻‍♂️, I’m Kevin, a software engineer passionate about building scalable systems that solve real-world problems — from logistics and healthcare to enterprise automation.`,
                    `Over the past several years, I’ve led the development of mission-critical backend services and full-stack platforms at companies like Alibaba, WeDoctor, and local New Zealand tech firms.`,
                    `My expertise spans microservices, cloud infrastructure (AWS, Azure), and clean architecture using Java, .NET, and Node.js — all underpinned by a strong focus on performance, resilience, and quality.`,
                    `Now based in Auckland 🇳🇿, I’m continuing my journey as a builder, problem-solver, and team player — always looking to craft impactful software that serves both users and business goals.`,
                ].map((text, i) => (
                    <p key={i} style={paragraphStyle}>
                        {text}
                    </p>
                ))}
            </div>
        </div>

        <SkillSection />
    </div>
));

export const Projects = forwardRef<HTMLDivElement>((_, ref) => (
    <div id="projects" ref={ref} style={sectionStyle}>
        <h2 style={titleStyle}>Projects</h2>
        <p style={paragraphStyle}>Projects content goes here.</p>
    </div>
));

export const Portfolio = forwardRef<HTMLDivElement>((_, ref) => (
    <div id="portfolio" ref={ref} style={sectionStyle}>
        <h2 style={titleStyle}>Blog / Portfolio</h2>
        <p style={paragraphStyle}>Here is some of my work...</p>
    </div>
));

export const Contact = forwardRef<HTMLDivElement>((_, ref) => (
    <div id="contact" ref={ref} style={sectionStyle}>
        <h2 style={titleStyle}>Contact</h2>
        <p style={paragraphStyle}>
            Contact me on{' '}
            <a
                href="https://www.linkedin.com/in/dongdong-han-1059882b6"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>
        </p>
    </div>
));
