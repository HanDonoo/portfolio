import React from 'react';
// 确保导入了 Box, Typography, 和 Link
import { Box, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                // 1. 设置背景和文字颜色
                bgcolor: '#111827', // 这是图片中的深蓝灰色
                color: '#ffffff',   // 默认文字设为白色
                py: 3,              // py 是 vertical padding (上下内边距)
                px: { xs: 2, sm: 4 }, // px 是 horizontal padding (左右内边距), 在不同屏幕尺寸下变化
            }}
        >
            {/* 2. 创建一个内部容器来实现 Flex 布局 */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between', // 两端对齐
                    alignItems: 'center',
                    // 3. 实现响应式布局
                    flexDirection: { xs: 'column', sm: 'row' }, // 在小屏幕(xs)上垂直堆叠, 在小屏幕及以上(sm)水平排列
                    gap: 2, // 设置堆叠时的间距
                    maxWidth: '1200px', // 设置最大内容宽度
                    mx: 'auto', // mx: 'auto' 使内容水平居中
                }}
            >
                {/* 4. 左侧内容 */}
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    <Typography
                        variant="h6" // 使用 h6 变体让字体稍大且加粗
                        component="p" // 将其渲染为 p 标签更符合语义
                        sx={{ fontWeight: 'bold' }}
                    >
                        Kevin Han
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: 'grey.400' }} // 使用 MUI 的主题颜色来设置灰色
                    >
                        Auckland, New Zealand
                    </Typography>
                </Box>

                {/* 5. 右侧链接 */}
                <Box sx={{ display: 'flex', gap: { xs: 2, sm: 3 } }}>
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
