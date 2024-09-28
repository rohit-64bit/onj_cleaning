import React from 'react'
import Servimg from '../assets/about.webp'

import Airbnb from '../assets/Serv1.jpeg'
import Resident from '../assets/serv2.webp'
import Comm from '../assets/serv3.jpg'

import { FaHome } from "react-icons/fa";
import { BsBuildingsFill } from "react-icons/bs";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PZIArG5MT11KApvXJgAFIKzv4iLzN2ca8IGOPmcwUQ8je8kiuUmqWEJKlWYP3D8CYUHfPKvr1uNswIav8LyAATs00f6EMku9m');

const ServiceCard = ({ data }) => {

    const handleCheckout = async () => {
        const stripe = await stripePromise;

        // Redirect to Checkout with the sessionId from Stripe
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price: data.priceID,
                    quantity: 1,
                },
            ],
            mode: "payment",
            successUrl: window.location.origin + "/success",
            cancelUrl: window.location.origin + "/cancel",
        });

        if (error) {
            console.error("Stripe Checkout Error:", error);
        }
    };

    return (
        <div className='flex flex-col gap-3 bg-[#ffeecf7a] p-5 rounded-lg justify-between item-center shadow-lg'>
            <div className='flex flex-col gap-3'>
                <img src={data.img} alt="" className='w-full h-42 object-cover rounded-lg' />
                <h4 className='font-bold text-xl text-center'>{data.title}</h4>
                <p className='text-sm w-[100%] text-center'>{data.description}</p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <h4 className='font-semibold text-center text-xl'>Price- {data.price} USD</h4>
                <button onClick={handleCheckout} className=' lg:mx-10 bg-green-900 font-medium text-white py-2 rounded-lg hover:bg-[#323232] transition duration-300 ease-in-out'>
                    Book Now
                </button>
            </div>
        </div>
    )
}

const Services = () => {

    const ServiceCards = [
        {
            id: 1,
            img: Airbnb,
            title: 'Airbnb Cleaning Services',
            description: 'We know quick turnovers are important for rental properties. Our team ensures your space is guest-ready with detailed cleaning and replenishing essentials. Services include: Bathroom and kitchen cleaning, linen replacement, trash removal, restocking, etc',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            img: Resident,
            title: 'Residential Cleaning Services',
            description: 'Our home cleaning service is designed to keep your living spaces clean and welcoming.We offer one-time deep cleans or recurring services, depending on your needs.Includes: Dusting, mopping, vacuuming, kitchen and bathroom cleaning, and more.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            img: Comm,
            title: 'Commercial Cleaning',
            description: 'Make a great impression on clients and keep your workspace productive with our professional commercial cleaning services. We offer flexible scheduling to ensure minimal disruption. Services include: Floor cleaning, trash removal, restroom sanitation, dusting, and more.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        },
        {
            img: Airbnb,
            title: 'Post-Construction Cleaning',
            description: 'After your construction or renovation project is completed, rely on us to clean up the debris and dust. We ensure the space is ready for occupancy. Services include: Debris removal, dusting, window cleaning, floor care, etc.',
            priceID: "price_1Q3GwrG5MT11KApvbEfCM46J",
            price: 200
        }
    ]

    const listItem = [
        "Kitchen", "Carpet", "Bathrooms", "Seasonal", "Bedrooms & Living Rooms", "Move in/out", "Windows", "Post construction", "Extra Services", "Express"
    ]

    return (
        <>
            <section className='flex h-[30vh] md:h-[50vh] relative justify-center items-center lg:mx-24'>
                <img className='h-full w-full object-cover brightness-50' src={Servimg} alt="About ONJ Cleaning Services" />
                <div className='flex flex-col w-full text-white absolute items-center font-bold'>
                    <div className='text-xl lg:text-4xl'>Our Services</div>
                    <div className='text-xl lg:text-2xl'>Tailored Cleaning Services</div>
                </div>
            </section>

            <section className='px-5 md:px-24 py-10 h-max flex flex-col justify-around'>

                <div className='py-10 flex flex-col items-center'>
                    <p className='text-3xl text-center font-bold text-green-900'>
                        Professional Cleaning Services Tailored to Your Needs
                    </p>
                    <p className='text-xl font-light w-[80%] py-5 text-center text-black-700'>
                        At Cleanatrix, LLC, we offer a wide range of cleaning services to ensure your home, office, or Airbnb property is pristine. Our services include:
                    </p>
                </div>


                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 '>
                    {
                        ServiceCards.map((data, index) => {
                            return (
                                <ServiceCard data={data} key={index} />
                            );
                        })
                    }
                </div>

            </section>

            <section className='xl:mx-24 flex flex-col mb-20'>

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
                            When you work with ONJ cleaning you can cross a major choir off your list,cleaning your home.
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
                            When you work with ONJ cleaning you can cross a major choir off your list,cleaning your home.
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
            </section>

        </>
    )
}

export default Services