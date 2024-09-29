import React from 'react'
import { FcClock } from "react-icons/fc";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import Logo from '../assets/logo.png'
import SlideInFromBottom from '../components/SlideInFromBottom';

const PageTop = () => {

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
        <header className='flex flex-col xl:flex-row justify-between items-center py-5 px-5 xl:px-28'>

            <img src={Logo} alt="" className='aspect-square w-32 rounded-full' />

            <div className='flex flex-col md:flex-row gap-5 xl:gap-10 mt-5'>

                {
                    topData.map((data, index) => (
                        <div key={index} className='flex items-center space-x-2 text-sm'>
                            <data.icon size={50} className='xl:block hidden' />
                            <data.icon size={30} className='block xl:hidden' />
                            <div>
                                <h4>{data.title}</h4>
                                <p className='font-bold'>{data.details}</p>
                            </div>
                        </div>
                    ))
                }

            </div>

        </header>
    )
}

export default PageTop