import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: '#111827',
                color: '#fff',
                py: 3,
                px: { xs: 2, sm: 4 },
                width: '100%',               // 改为100%避免横向滚动
                overflowX: 'hidden',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2,
                    maxWidth: '1400px',
                    mx: 'auto',
                    width: '100%',             // 确保内盒子自适应宽度
                    boxSizing: 'border-box',  // 防止padding影响宽度
                }}
            >
                <Box
                    sx={{
                        textAlign: { xs: 'center', sm: 'left' },
                        width: { xs: '100%', sm: '200px' }, // 手机时宽度100%，避免溢出
                    }}
                >
                    <Typography
                        variant="h5"
                        component="p"
                        sx={{
                            fontWeight: 'bold',
                            whiteSpace: 'normal',           // 改为normal，允许换行
                            overflowWrap: 'break-word',    // 必要时换行防止溢出
                            mb: 0.5,
                        }}
                    >
                        Kevin Han
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: 'grey.400',
                            whiteSpace: 'normal',
                            overflowWrap: 'break-word',
                        }}
                    >
                        Auckland, New Zealand
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        gap: { xs: 2, sm: 3 },
                        flexWrap: 'wrap',   // 允许链接换行，避免横向溢出
                        justifyContent: { xs: 'center', sm: 'flex-start' },
                        width: { xs: '100%', sm: 'auto' },
                    }}
                >
                    <Link href="https://www.linkedin.com/in/kevin-han-1059882b6/" color="inherit" underline="hover">
                        LinkedIn
                    </Link>
                    <Link href="https://github.com/HanDonoo" color="inherit" underline="hover">
                        GitHub
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
