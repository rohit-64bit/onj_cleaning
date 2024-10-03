import React from 'react';
import HeroImg from '../assets/hero.png';

import { LuBadgeCheck } from "react-icons/lu";
import { MdCleaningServices } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaPiggyBank, FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";

import Serv1 from '../assets/serv1.jpeg';
import Serv2 from '../assets/serv2.webp';
import Serv3 from '../assets/serv3.jpg';

import { Link } from 'react-router-dom';
import Testimonial from '../components/Testimonial';

const Home = () => {

    const servicesData = [
        {
            icon: LuBadgeCheck,
            title: 'Licensed and Insured',
            details: 'All our professionals are licensed and insured to ensure quality service.'
        },
        {
            icon: MdCleaningServices,
            title: 'Eco-Friendly Products',
            details: 'We use eco-friendly and safe cleaning products for a healthier home.'
        },
        {
            icon: AiOutlineLike,
            title: '100% Satisfaction Guaranteed',
            details: 'We are committed to ensuring 100% satisfaction with every service.'
        }
    ];

    const listItem = [
        "Kitchen", "Carpet", "Bathrooms", "Seasonal", "Bedrooms & Living Rooms", "Move in/out", "Windows", "Post construction", "Extra Services", "Express"
    ];

    const subServiceData = [
        {
            img: Serv1,
            title: 'Office Cleaning',
            description: 'We provide the best office cleaning services to ensure a clean and healthy work environment.'
        },
        {
            img: Serv2,
            title: 'Upholstery Cleaning',
            description: 'We offer expert upholstery cleaning to keep your furniture looking fresh and new.'
        },
        {
            img: Serv3,
            title: 'House Cleaning',
            description: 'Top-notch house cleaning services to give your home the care it deserves.'
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className='flex flex-col-reverse md:flex-row h-screen bg-[#e0f7fa]'>
                <div className='flex-1 flex flex-col justify-center px-10 lg:px-20'>
                    <h1 className='text-6xl font-bold text-[#003366]'>Welcome to ONJ Cleaning Services</h1>
                    <p className='text-xl font-light text-[#003366] mt-4'>
                        Eco-friendly Cleaning Products | 100% Satisfaction Guaranteed
                    </p>
                    <Link to='/services' className=' mt-6 bg-[#8bc34a] text-white py-3 px-6 rounded-md w-max'>
                        Book a Cleaning Today
                    </Link>
                </div>
                <div className='flex-1'>
                    <img src={HeroImg} alt="Hero" className='object-cover w-full h-full' />
                </div>
            </section>

            {/* Services Section */}
            <section className='bg-[#f4f6f8] py-16'>
                <h2 className='text-center text-3xl font-bold text-[#003366]'>Why We Stand Out</h2>
                <div className='md:px-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    {servicesData.map((data, index) => (
                        <div key={index} className='bg-white p-10 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300'>
                            <data.icon className='text-[#2e7d32]' size={50} />
                            <h4 className='mt-4 text-2xl font-bold text-[#003366]'>{data.title}</h4>
                            <p className='mt-2 text-[#2e7d32]'>{data.details}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Service Offerings (Residential and Commercial) */}
            <section className='xl:mx-24 flex flex-col'>
                <div className='bg-hero h-[30vh] md:h-[60vh] md:rounded-b-2xl'>
                    <div className='h-full bg-black opacity-40 rounded-b-2xl'></div>
                </div>

                <div className='flex flex-col md:flex-row justify-center md:w-[80%] mx-auto md:-mt-72 z-10'>
                    <div className='bg-[#2e7d32] text-white text-l p-10 md:rounded-l-xl flex flex-col gap-6'>
                        <div className='flex gap-5 items-center'>
                            <FaHome size={80} />
                            <h4 className='text-3xl font-bold'>Residential Cleaning Service</h4>
                        </div>
                        <div>
                            By choosing ONJ Cleaning, you can eliminate the hassle of cleaning your home from your list of chores.
                        </div>
                        <ul className='list-disc ml-5'>
                            {listItem.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='bg-[#8bc34a] text-white text-l p-10 md:rounded-r-xl flex flex-col gap-6'>
                        <div className='flex gap-5 items-center'>
                            <BsBuildingsFill size={80} />
                            <h4 className='text-3xl font-bold'>Commercial Cleaning Service</h4>
                        </div>
                        <div>
                            We take care of the cleaning so you can focus on running your business in a clean and safe environment.
                        </div>
                        <ul className='list-disc ml-5'>
                            {listItem.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Link className='mt-6 mb-6 bg-[#2e7d32] font-medium text-white py-3 rounded-lg w-max px-10 mx-auto' to='/services'>
                    View All Services
                </Link>
            </section>

            {/* Full-Width Testimonials Section */}
            <section className='bg-[#003366] text-white py-16'>
                <h2 className='text-center text-3xl font-bold'>What Our Clients Say</h2>
                <div className='mt-10 mx-auto max-w-5xl'>
                    <Testimonial />
                </div>
            </section>

            <section className='flex flex-col lg:flex-row gap-10 py-10 px-5 md:px-10 lg:px-20'>

                <form className='flex flex-col gap-4 w-full'>
                    <h4 className='font-bold text-2xl mb-5 text-left'>Book Now</h4>
                    <p>
                        We're here to help! Whether you need a quote, want to schedule a service, or have questions
                        about our offerings, our team is ready to assist you.
                    </p>
                    <input
                        type='text'
                        placeholder='Your Name'
                        className='border-2 border-slate-200 focus:border-green-900 outline-none duration-300 rounded-lg p-3'
                        required
                    />
                    <input
                        type='email'
                        placeholder='Your Email'
                        className='border-2 border-slate-200 focus:border-green-900 outline-none duration-300 rounded-lg p-3'
                        required
                    />
                    <input
                        type='tel'
                        placeholder='Your Contact Number'
                        className='border-2 border-slate-200 focus:border-green-900 outline-none duration-300 rounded-lg p-3'
                        required
                    />
                    <textarea
                        placeholder='Your Query'
                        className='border-2 border-slate-200 focus:border-green-900 outline-none duration-300 rounded-lg p-3 h-32'
                        required
                    ></textarea>
                    <button
                        type='submit'
                        className='bg-green-900 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-700 transition duration-300'
                    >
                        Send Message
                    </button>
                </form>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3564.8410573752394!2d-80.6725681248625!3d26.68556536981588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d951093d8d023f%3A0xebde05515b970f61!2sONJ%20Cleaning%20Services%20LLC!5e0!3m2!1sen!2sin!4v1727909290380!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='h-[50vh] lg:h-auto rounded-lg w-full'></iframe>

            </section>

        </>
    );
};

export default Home;