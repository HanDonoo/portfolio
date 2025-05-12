import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 2,
                textAlign: 'center',
                bgcolor: '#ffffff', // 背景白色
                color: '#000000'     // 字体黑色
            }}
        >
            <Typography variant="body2">
                © 2025 My Personal Website
            </Typography>
        </Box>
    );
};

export default Footer;
