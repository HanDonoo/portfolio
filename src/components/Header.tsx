import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

interface HeaderProps {
    current: 'about' | 'portfolio' | 'contact';
    onNavigate: (section: 'about' | 'portfolio' | 'contact') => void;
}

const Header: React.FC<HeaderProps> = ({ current, onNavigate }) => {
    return (
        <AppBar position="static" sx={{ bgcolor: '#ffffff', color: '#000000' }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Kevin
                </Typography>
                <Box>
                    <Button
                        color={current === 'about' ? 'secondary' : 'inherit'}
                        onClick={() => onNavigate('about')}
                    >
                        About
                    </Button>
                    <Button
                        color={current === 'portfolio' ? 'secondary' : 'inherit'}
                        onClick={() => onNavigate('portfolio')}
                    >
                        Portfolio
                    </Button>
                    <Button
                        color={current === 'contact' ? 'secondary' : 'inherit'}
                        onClick={() => onNavigate('contact')}
                    >
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
