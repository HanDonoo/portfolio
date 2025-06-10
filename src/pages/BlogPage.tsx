import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogList from '../components/BlogList'; // 确保路径正确

const BlogPage: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            {/* 不再需要传递 onNavigate prop */}
            <Header />
            <div style={{ paddingTop: '120px', padding: '2rem', flex: 1 }}>
                <BlogList />
            </div>
            <Footer />
        </div>
    );
};

export default BlogPage;
