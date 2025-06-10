import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import { About } from '../components/Content';
import { Experience } from '../components/Experience';

const HomePage: React.FC = () => {
    // 为每个部分创建 ref
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    // 使用 useLocation hook 来获取当前的 URL 信息
    const location = useLocation();

    // 创建一个 ref 对象的映射，方便通过字符串 key 调用
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
        about: aboutRef,
        experience: experienceRef,
        projects: projectsRef,
    };

    // 这个函数负责在当前页面的平滑滚动
    const handleNavigate = (section: 'about' | 'experience' | 'projects') => {
        refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // 使用 useEffect 来处理页面加载或 URL 变化时的滚动
    useEffect(() => {
        // 从 URL 中提取锚点 (e.g., #about -> about)
        const hash = location.hash.replace('#', '');
        // 如果锚点存在并且我们有对应的 ref
        if (hash && refs[hash]) {
            // 延迟执行滚动，确保目标组件已经完全渲染
            const timer = setTimeout(() => {
                refs[hash].current?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
            // 清除定时器以避免内存泄漏
            return () => clearTimeout(timer);
        }
    }, [location]); // 依赖项是 location，每当 URL 变化时此 effect 都会重新运行

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header onNavigate={handleNavigate} />

            <div style={{ paddingTop: '120px', paddingLeft: '1rem', paddingRight: '1rem', flex: 1 }}>
                {/* 将 ref 附加到包裹 div 上 */}
                <div ref={aboutRef}><About /></div>
                <div ref={experienceRef}><Experience /></div>
                <div ref={projectsRef}><Projects /></div>
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;
