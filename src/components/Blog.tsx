import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css'; // 你可以换成喜欢的主题，例如 'atom-one-dark.css'

interface BlogProps {
    filePath: string; // 例如 '/blogs/perceived-performance.md'
}

const Blog: React.FC<BlogProps> = ({ filePath }) => {
    const [content, setContent] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setLoading(true);
        fetch(filePath)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to load blog: ${res.statusText}`);
                }
                return res.text();
            })
            .then(setContent)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [filePath]);

    if (loading) return <div className="p-8 text-center text-gray-600">Loading blog...</div>;
    if (error) return <div className="p-8 text-center text-red-500">Error: {error}</div>;

    return (
        <article className="prose prose-lg lg:prose-xl mx-auto p-6">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
            >
                {content}
            </ReactMarkdown>
        </article>
    );
};

export default Blog;
