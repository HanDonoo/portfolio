import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                textAlign: 'center',
                bgcolor: '#1976d2',
                color: 'white'
            }}
        >
            <Typography variant="body2">
                © 2025 My Personal Website
            </Typography>
        </Box>
    );
};

export default Footer;
