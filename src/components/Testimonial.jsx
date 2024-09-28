import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Testimonial = () => {

    const testimonials = [
        {
            name: "John Doe",
            rating: 5,
            message: "ONJ Cleaning Services did an incredible job! My house has never been cleaner, and the team was so professional."
        },
        {
            name: "Jane Smith",
            rating: 3.9,
            message: "Highly recommend! They were efficient, eco-friendly, and left my office sparkling clean. Will definitely use their services again."
        },
        {
            name: "Michael Johnson",
            rating: 4,
            message: "Very satisfied with the service! I booked them for a post-construction cleanup and they exceeded my expectations."
        }
    ];

    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        return (
            <div className="flex">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                ))}
                {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
                {[...Array(5 - Math.ceil(rating))].map((_, i) => (
                    <FaStar key={i} className="text-gray-300" />
                ))}
            </div>
        );
    };

    return (
        <section className='px-5 lg:px-24 py-10 lg:py-20 h-max bg-[#f9f9f9]'>
            <div className='text-center'>
                <h2 className='text-3xl lg:text-5xl font-bold mb-5'>Customer Testimonials</h2>
                <p className='text-lg lg:text-xl mb-10'>Hear what our clients have to say about our top-notch cleaning services.</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='bg-white shadow-lg rounded-lg p-8'>
                        <div className='mb-4 text-center'>
                            <h3 className='font-bold text-2xl'>{testimonial.name}</h3>
                            <div className='flex justify-center'>
                                {renderStars(testimonial.rating)}
                            </div>
                        </div>
                        <p className='text-sm text-gray-600 text-center'>
                            "{testimonial.message}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Testimonial;