import React from 'react'
import ContImg from '../assets/contact.webp'

import { FcClock } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

import BgImg from '../assets/about.webp'

const ContactUs = () => {

    const topData = [
        {
            title: 'Office Time',
            details: 'Sun - Mon 9 am - 6 pm',
            icon: FcClock
        },
        {
            title: 'Email Address',
            details: 'info@onjcleaning.com',
            icon: CiMail
        },
        {
            title: 'Location',
            details: '5000 Thayer Center STE C, Oakland, MD',
            icon: CiLocationOn
        }
    ]

    return (
        <>
            <section className='flex h-[30vh] md:h-[50vh] relative justify-center items-center lg:mx-24'>
                <img className='h-full w-full object-cover brightness-50' src={BgImg} alt="About ONJ Cleaning Services" />
                <div className='flex flex-col w-full text-white absolute items-center font-bold'>
                    <div className='text-xl lg:text-4xl'>Get In Touch With</div>
                    <div className='text-xl lg:text-2xl'>ONJ Cleaning Service</div>
                </div>
            </section>

            <section className='px-5 lg:px-24 py-10 lg:py-20 h-max bg-[#f0f0f0] text-green-900'>
                <div className='text-center'>
                    <h2 className='text-3xl lg:text-5xl font-bold mb-5'>Contact Us</h2>
                    <p className='text-lg lg:text-xl mb-10'>
                        We're here to help! Whether you need a quote, want to schedule a service, or have questions
                        about our offerings, our team is ready to assist you.
                    </p>
                </div>

                <div className='grid md:grid-cols-2 gap-10'>
                    {/* Contact Information */}
                    <div className='flex flex-col gap-5'>
                        <div>
                            <h4 className='font-bold text-xl'>Address:</h4>
                            <p>ONJ Cleaning Services</p>
                            <p>200 WEST AVENUE, Belle Glade, FL 33430</p>
                        </div>

                        <div>
                            <h4 className='font-bold text-xl'>Phone:</h4>
                            <p>(XXX) XXX-XXXX</p>
                        </div>

                        <div>
                            <h4 className='font-bold text-xl'>Email:</h4>
                            <p>info@onjcleaning.com</p>
                        </div>

                        <div>
                            <h4 className='font-bold text-xl'>Business Hours:</h4>
                            <p>Monday to Friday: 8 AM – 6 PM</p>
                            <p>Saturday: 9 AM – 3 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className='bg-white rounded-lg p-8 shadow-lg'>
                        <h4 className='font-bold text-2xl mb-5'>Get in Touch</h4>
                        <form className='flex flex-col gap-4'>
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
                                placeholder='Your Message'
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
                    </div>
                </div>

                {/* Call to Action */}
                <div className='text-center mt-10'>
                    <p className='text-lg lg:text-xl font-bold'>Reach out today! Call us at (XXX) XXX-XXXX or fill out the form above, and we’ll get back to you promptly.</p>
                </div>
            </section>

        </>
    )
}

export default ContactUs