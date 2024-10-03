import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import blogsData from '../static/blogs.json'; // Ensure this path is correct

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Load blogs from JSON file
        setBlogs(blogsData);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-5">
            <div className="container mx-auto flex flex-col items-center">
                <h2 className="text-4xl font-bold text-gray-800 text-center">Our Blogs</h2>
                <p className="md:w-1/2 mt-4 text-lg text-gray-600 text-center mb-10">
                    Discover the latest tips, trends, and updates in the world of professional cleaning with our experts at Cleanatrix.
                </p>
                <div className="px-5 md:px-10 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="flex flex-col gap-3 bg-[#EAF3FD] p-5 rounded-lg justify-between overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                        >
                            <Link to={`/blog/${blog.id}`}>
                                <img
                                    src={blog.img} // Corrected from 'image' to 'img' to match JSON structure
                                    alt={blog.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300 mb-4">
                                        {blog.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4">
                                        {blog.intro ? blog.intro.slice(0, 100) : "No description available"}...
                                    </p>
                                    <button className="text-blue-500 hover:underline">Read More</button>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;