import React from 'react';
import BgImg from '../assets/about.webp';
import TeamImg from '../assets/team.jpg';

const About = () => {

    const faqs = [
        {
            question: "What areas do you serve?",
            answer: "We proudly serve Belle Glade and surrounding areas."
        },
        {
            question: "Do you provide cleaning supplies?",
            answer: "Yes, we bring all necessary eco-friendly cleaning supplies. However, if you have any specific product requests, we are happy to accommodate."
        },
        {
            question: "Are your cleaners insured?",
            answer: "Yes, all of our team members are fully insured for your peace of mind."
        },
        {
            question: "Can I schedule recurring cleaning services?",
            answer: "Absolutely! We offer flexible scheduling for daily, weekly, or monthly services based on your needs."
        },
        {
            question: "What is your cancellation policy?",
            answer: "We require 24-hour notice for cancellations or rescheduling."
        }
    ];

    return (
        <>
            {/* Hero Section */}
            <section className='flex h-[30vh] md:h-[50vh] relative justify-center items-center lg:mx-24'>
                <img className='h-full w-full object-cover brightness-50' src={BgImg} alt="About ONJ Cleaning Services" />
                <div className='flex flex-col w-full text-white absolute items-center font-bold'>
                    <div className='text-xl lg:text-4xl'>About Our Company</div>
                    <div className='text-xl lg:text-2xl'>Committed to Excellence in Cleaning</div>
                </div>
            </section>

            {/* About Us Section */}
            <section className='px-5 lg:px-24 py-10 lg:py-20 h-max flex flex-col justify-around items-center bg-[#fffdf97a] gap-10'>
                <p className='w-1/2 first-letter:text-3xl'>
                    <strong>ONJ Cleaning Services</strong> was founded with a passion for providing quality and reliable cleaning
                    solutions to homes and businesses in Belle Glade, Florida. With years of experience, we take
                    pride in delivering exceptional cleaning services tailored to meet our clients' unique needs. We
                    believe that a clean environment enhances productivity, comfort, and well-being.
                    Our team consists of trained and trusted professionals who use industry-best practices and
                    eco-friendly products. Whether it's your home, office, or a newly constructed building, we ensure
                    a thorough, efficient cleaning every time.
                </p>
            </section>

            {/* Mission & Vision Section */}
            <section className='px-5 lg:px-24 py-10 lg:py-20 h-max flex flex-col justify-around bg-[#ffeecf7a] gap-10'>
                <div className='text-green-900 text-center text-3xl xl:text-5xl font-bold mx-auto'>
                    "Our Mission and Vision"
                </div>

                <div className='text-center'>
                    <p className='text-xl md:text-2xl font-semibold'>Our Mission</p>
                    <p className='text-lg'>
                        To provide high-quality, dependable cleaning services that leave our clients' spaces spotless
                        while using environmentally safe cleaning methods.
                    </p>
                </div>

                <div className='text-center'>
                    <p className='text-xl md:text-2xl font-semibold'>Our Vision</p>
                    <p className='text-lg'>
                        To be Belle Glade’s top cleaning service provider, known for professionalism, quality, and
                        customer satisfaction.
                    </p>
                </div>
            </section>

            {/* Why We Stand Out Section */}
            <section className='px-5 lg:px-24 py-10 lg:py-20 h-max flex flex-col justify-around bg-[#ffeecf7a] gap-10'>
                <div className='text-green-900 text-center text-3xl xl:text-5xl font-bold mx-auto'>
                    "Why We Stand Out"
                </div>

                <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                    <div className='bg-white rounded-lg p-10 flex flex-col justify-center text-center items-center gap-2'>
                        <span className='text-green-900 text-6xl'>💼</span> {/* Placeholder Icon */}
                        <h4 className='font-bold text-2xl'>Licensed and Insured</h4>
                        <p className='font-thin text-sm'>
                            Our professional team is fully licensed and insured, giving you peace of mind while we clean your space.
                        </p>
                    </div>

                    <div className='bg-white rounded-lg p-10 flex flex-col justify-center text-center items-center gap-2'>
                        <span className='text-green-900 text-6xl'>🌱</span> {/* Placeholder Icon */}
                        <h4 className='font-bold text-2xl'>Eco-Friendly Products</h4>
                        <p className='font-thin text-sm'>
                            We prioritize your safety and the environment by using eco-friendly and safe cleaning products.
                        </p>
                    </div>

                    <div className='bg-white rounded-lg p-10 flex flex-col justify-center text-center items-center gap-2'>
                        <span className='text-green-900 text-6xl'>👍</span> {/* Placeholder Icon */}
                        <h4 className='font-bold text-2xl'>Satisfaction Guaranteed</h4>
                        <p className='font-thin text-sm'>
                            Our services come with a 100% satisfaction guarantee, ensuring every corner shines.
                        </p>
                    </div>

                    <div className='bg-white rounded-lg p-10 flex flex-col justify-center text-center items-center gap-2'>
                        <span className='text-green-900 text-6xl'>💰</span> {/* Placeholder Icon */}
                        <h4 className='font-bold text-2xl'>Custom Cleaning Plans</h4>
                        <p className='font-thin text-sm'>
                            We offer flexible and tailored cleaning plans based on your unique requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className='px-5 py-10 bg-green-900 text-white text-center'>
                <div className='text-3xl lg:text-5xl font-bold mb-5'>Ready for a Sparkling Clean?</div>
                <p className='text-lg lg:text-xl mb-5'>
                    Contact us today to schedule your cleaning service and experience the ONJ Cleaning difference.
                </p>
                <button className='bg-white text-green-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300'>
                    Call Us Now: (XXX) XXX-XXXX
                </button>
            </section>

            <section className="bg-gray-100 py-10">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                                <h2 className="text-xl font-semibold">{faq.question}</h2>
                                <p className="mt-2 text-gray-700">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-10 text-center">
                        <p className="text-lg">Don’t see your question? Contact us at <span className="font-semibold">(XXX) XXX-XXXX</span> for more information or to get started today.</p>
                    </div>
                </div>
            </section>

            <section className='px-5 py-10 bg-green-900 text-white text-center flex flex-col items-center'>

                <div className='text-3xl lg:text-5xl font-bold mb-5'>The Team</div>

                <p className='text-lg lg:text-xl mb-5'>
                    Meet the dedicated professionals behind ONJ Cleaning Services.
                </p>

                <div className='bg-white rounded-xl p-10 flex gap-5 mt-5 text-black text-left w-[30%]'>
                    <img src={TeamImg} alt="" className='w-36 rounded-full' />
                    <div className='flex flex-col gap-1'>
                        <h4 className='font-bold text-2xl'>John Doe</h4>
                        <p className='text-sm'>Founder & CEO</p>
                        <p className='text-base mt-1'>John is a passionate entrepreneur with a vision to provide top-notch cleaning services to the community.</p>
                    </div>
                </div>

            </section>

        </>
    );
}

export default About;
