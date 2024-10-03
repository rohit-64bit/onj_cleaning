import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogsData from '../static/blogs.json';

const BlogPost = () => {
    const { blogId } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const foundBlog = blogsData.find((b) => b.id === parseInt(blogId)); // Fixed path to match the id directly
        setBlog(foundBlog);
    }, [blogId]);

    if (blog === null) return <div>Loading...</div>;
    if (!blog) return <div>Blog post not found!</div>; // Handle not found case

    return (
        <section className="px-5 md:px-10 lg:px-24 py-10 bg-white flex flex-col items-center">
            <div className="w-full lg:w-3/4">
                <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-96 object-cover rounded-lg shadow-lg object-bottom"
                />
            </div>
            <div className="mt-8 w-full lg:w-3/4">
                <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
            </div>
            <div className="mt-4 w-full lg:w-3/4">
                <p className="text-lg text-gray-600">{blog.intro}</p>
            </div>
            <div className="mt-12 w-full lg:w-3/4">
                {blog.points.map((point, index) => (
                    <div key={index} className="mt-6">
                        <h2 className="text-2xl font-bold text-gray-800">{point.title}</h2>
                        <p className="mt-2 text-gray-600">{point.content}</p>
                    </div>
                ))}
            </div>
            <div className="mt-12 w-full lg:w-3/4">
                <h2 className="text-2xl font-bold text-gray-800">Conclusion</h2>
                <p className="mt-4 text-lg text-gray-600">{blog.conclusion}</p>
            </div>
        </section>
    );
};

export default BlogPost;