import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import './styles/globals.css';
import App from './App.tsx';

// 创建 MUI 主题
const theme = createTheme({
    palette: {
        mode: 'light', // 可以选择 'light' 或 'dark' 模式
    },
});

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* 这将应用 MUI 的全局样式 */}
            <App />
        </ThemeProvider>
    </StrictMode>
);
