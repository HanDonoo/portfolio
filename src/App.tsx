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
            bgcolor="#f5f5f5"
        >
            <Header current={section} onNavigate={setSection} />
            <Box flex="1">
                <Content section={section} />
            </Box>
            <Footer />
        </Box>
    );
};

export default App;
