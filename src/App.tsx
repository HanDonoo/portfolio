import React, { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {
    About,
    Projects,
    Portfolio,
    Contact,
} from './components/Content';
import {Experience} from './components/Experience';

const App: React.FC = () => {
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const handleNavigate = (section: string) => {
        const refs: Record<string, React.RefObject<HTMLDivElement>> = {
            about: aboutRef,
            experience: experienceRef,
            projects: projectsRef,
            portfolio: portfolioRef,
            contact: contactRef,
        };

        refs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header onNavigate={handleNavigate} />

            <div style={{ paddingTop: '80px', paddingLeft: '1rem', paddingRight: '1rem', flex: 1 }}>
                <About ref={aboutRef} />
                <Experience ref={experienceRef} />
                <Projects ref={projectsRef} />
                <Portfolio ref={portfolioRef} />
                <Contact ref={contactRef} />
            </div>

            <Footer />
        </div>
    );
};

export default App;
