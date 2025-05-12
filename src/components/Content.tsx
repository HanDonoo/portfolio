import React from 'react';
import { Container, Typography, Card, CardContent, Box } from '@mui/material';

interface ContentProps {
    section: 'about' | 'portfolio' | 'contact';
}

const Content: React.FC<ContentProps> = ({ section }) => {
    const renderContent = () => {
        switch (section) {
            case 'about':
                return (
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>About Me</Typography>
                            <Typography variant="body1">Welcome to my personal website. Here's a little about myself...</Typography>
                        </CardContent>
                    </Card>
                );
            case 'portfolio':
                return (
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>My Work</Typography>
                            <Typography variant="body1">Here are some of my projects...</Typography>
                        </CardContent>
                    </Card>
                );
            case 'contact':
                return (
                    <Card>
                        <CardContent>
                            <Typography variant="h4" gutterBottom>Contact</Typography>
                            <Typography variant="body1">Feel free to reach out...</Typography>
                        </CardContent>
                    </Card>
                );
            default:
                return null;
        }
    };

    return (
        <Container sx={{ py: 5 }}>
            <Box display="flex" justifyContent="center">
                {renderContent()}
            </Box>
        </Container>
    );
};

export default Content;
