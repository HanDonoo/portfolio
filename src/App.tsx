import React, { useState } from 'react';
import { Box } from '@mui/material';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [section, setSection] = useState<'about' | 'portfolio' | 'contact'>('about');

    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
            bgcolor="#ffffff" // 背景改为白色
        >
            <Header current={section} onNavigate={setSection} />
            <Box flex="1" bgcolor="#ffffff"> {/* 内容区域也设置为白色 */}
                <Content section={section} />
            </Box>
            <Footer />
        </Box>
    );
};

export default App;
