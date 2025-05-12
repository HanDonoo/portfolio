import React from 'react';
import { Box, Typography, Link } from '@mui/material';

interface ContentProps {
    section: 'about' | 'portfolio' | 'contact';
}

const Content: React.FC<ContentProps> = ({ section }) => {
    return (
        <Box p={4}>
            {section === 'about' && (
                <Box>
                    <Typography variant="h6" gutterBottom>
                        Hi, I'm Kevin.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Please check out my resume below:
                    </Typography>
                    <Box
                        component="iframe"
                        src="/person_project/CV-Kevin.pdf"
                        width="100%"
                        height="600px"
                        sx={{ border: '1px solid #ccc' }}
                    />
                </Box>
            )}
            {section === 'portfolio' && (
                <Typography variant="body1">
                    Here is some of my work...
                </Typography>
            )}
            {section === 'contact' && (
                <Typography variant="body1">
                    Contact me on{' '}
                    <Link
                        href="https://www.linkedin.com/in/dongdong-han-1059882b6"
                        target="_blank"
                        rel="noopener"
                    >
                        LinkedIn
                    </Link>
                </Typography>
            )}
        </Box>
    );
};

export default Content;
