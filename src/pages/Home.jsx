import React from 'react'
import HeroImg from '../assets/hero.png'

import { LuBadgeCheck } from "react-icons/lu";
import { MdCleaningServices, MdOutlineCleaningServices } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { FaPiggyBank } from "react-icons/fa6";

import { FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";

import Serv1 from '../assets/serv1.jpeg'
import Serv2 from '../assets/serv2.webp'
import Serv3 from '../assets/serv3.jpg'

import ContImg from '../assets/contact.webp'
import { Link } from 'react-router-dom';
import Testimonial from '../components/Testimonial';

const Home = () => {

    const servicesData = [
        {
            icon: LuBadgeCheck,
            title: 'Licensed and insured',
            details: 'All our professionals are highly qualified and are all licensed'
        },
        {
            icon: MdCleaningServices,
            title: 'Eco-friendly',
            details: 'Eco-friendly and safe cleaning products'
        },
        {
            icon: AiOutlineLike,
            title: '100% Satisfaction',
            details: 'We guarantee 100% satisfaction with our customised cleaning services'
        }
    ]

    const listItem = [
        "Kitchen", "Carpet", "Bathrooms", "Seasonal", "Bedrooms & Living Rooms", "Move in/out", "Windows", "Post construction", "Extra Services", "Express"
    ]

    const subServiceData = [
        {
            img: Serv1,
            title: 'Office Cleaning',
            description: 'We provide the best office cleaning services for your office'
        },
        {
            img: Serv2,
            title: 'Upholstery Cleaning',
            description: 'We provide the best upholstery cleaning services for your house'
        },
        {
            img: Serv3,
            title: 'House Cleaning',
            description: 'We provide the best house cleaning services for your house'
        }
    ]

    return (
        <>

            <section className='px-5 lg:px-20 bg-[#ffeecf7a] flex flex-col md:flex-row h-screen md:h-[70vh] justify-center items-center overflow-hidden'>

                <div className='flex flex-col gap-5 justify-center'>

                    {/* <div className='bg-[#2E85CC] text-sm py-5 px-8 font-bold rounded-md text-white w-max'>
                        30% OFF FOR NEW CLIENT
                    </div> */}

                    <div className='flex flex-col gap-5'>

                        <p className='font-normal text-2xl'>Top-Notch Cleaning Services in Belle Glade, FL</p>

                        <p className='text-5xl font-bold text-black gap-3'>
                            Welcome to <span className='text-green-900'>ONJ </span>Cleaning Services
                        </p>

                        <p className='font-normal text-sm'>Eco-friendly Cleaning Products | 100% Satisfaction Guaranteed | Affordable Pricing</p>
                        <Link to='/services' className='font-medium bg-green-900 text-white w-max px-3 lg:px-10 py-3 rounded-md'>Book a Cleaning Today</Link>

                    </div>

                </div>

                <img src={HeroImg} alt="" className='hidden md:block w-[50%] -mb-[15.5rem] lg:-mb-[3.5rem]' />

            </section>

            <section className='px-5 lg:px-24 py-10 lg:py-20 h-max flex flex-col justify-around bg-[#EAF3FD] gap-10'>

                <div className='text-green-900 text-center text-3xl xl:text-5xl font-bold mx-auto'>
                    "Why We Stand Out"
                </div>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10'>

                    {
                        servicesData.map((data, index) => {
                            return (
                                <div key={index} className='bg-white rounded-lg p-10 flex flex-col justify-center text-center items-center gap-2'>
                                    <data.icon className='text-green-900' size={50} />
                                    <h4 className='font-bold text-2xl'>{data.title}</h4>
                                    <p className='font-regular text-l'>{data.details}</p>
                                </div>
                            )
                        })
                    }

                </div>

            </section>

            <section className='xl:mx-24 flex flex-col'>

                <div className='bg-hero h-[30vh] md:h-[60vh] md:rounded-b-2xl'>
                    <div className='h-full bg-black opacity-50 rounded-b-2xl'>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-center md:w-[80%] mx-auto md:-mt-72 z-10'>

                    <div className='bg-[#323232] text-white text-l p-10 md:rounded-l-xl flex flex-col gap-6'>

                        <div className='flex gap-5 items-center'>
                            <FaHome size={80} />
                            <h4 className='text-3xl font-bold'>Residential Cleaning Service</h4>
                        </div>
                        <div className=''>
                           By choosing ONJ Cleaning, you can eliminate the hassle of cleaning your home from your list of chores.
                        </div>
                        <div className='list-disc'>
                            {listItem.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })}
                        </div>
                    </div>
                    <div className='bg-[#00603E] text-white text-l p-10 md:rounded-r-xl flex flex-col gap-6'>
                        <div className='flex gap-5 items-center'>
                            <BsBuildingsFill size={80} />
                            <h4 className='text-3xl font-bold'>Commercial Cleaning Service</h4>
                        </div>
                        <div>
                           By choosing ONJ Cleaning, you can eliminate the hassle of cleaning your home from your list of chores.
                        </div>
                        <div className='list-disc'>
                            {listItem.map((item, index) => {
                                return (
                                    <li key={index}>{item}</li>
                                )
                            })}
                        </div>


                    </div>
                </div>
                <Link className='mt-6 mb-6 bg-green-900 font-medium text-white py-3 rounded-lg w-max px-10 mx-auto' to='/services'>
                    View All Services
                </Link>
            </section>
            <Testimonial />
        </>
    )
}

export default Home