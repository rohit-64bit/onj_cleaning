import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

    const footerData = [
        {
            title: 'Quick Links',
            links: [
                {
                    name: 'Home',
                    link: '/'
                },
                {
                    name: 'About',
                    link: '/about'
                },
                {
                    name: 'Services',
                    link: '/services'
                },
                {
                    name: 'Contact Us',
                    link: '/contact'
                },
            ]
        },
        {
            title: 'Socials',
            links: [
                {
                    name: 'Facebook',
                    link: 'https://www.facebook.com'
                },
                {
                    name: 'Instagram',
                    link: 'https://www.instagram.com'
                },
                {
                    name: 'Twitter',
                    link: 'https://www.twitter.com'
                },
                {
                    name: 'LinkedIn',
                    link: 'https://www.linkedin.com'
                }
            ]
        },
        {
            title: 'Important Links',
            links: [
                {
                    name: 'Privacy Policy',
                    link: '/privacy'
                },
                {
                    name: 'Terms & Conditions',
                    link: '/terms'
                }
            ]
        }
    ]

    return (
        <>
            <footer className='px-20 py-24 bg-[#ffeecf7a] flex'>

                <div className='flex flex-col md:flex-row gap-10 text-black'>
                    {footerData.map((data, index) => {
                        return (
                            <div key={index} className='text-xl'>
                                <h4 className='font-medium mb-5'>{data.title}</h4>
                                <nav className='flex flex-col gap-2'>
                                    {data.links.map((link, index) => {
                                        return (
                                            <Link to={link.link} key={index} className=' hover:underline opacity-80 hover:opacity-100 duration-300 text-lg'>
                                                {link.name}
                                            </Link>
                                        )
                                    })}
                                </nav>
                            </div>
                        )
                    })}
                </div>

            </footer>
            <footer>
                <div className='bg-green-900 font-medium text-white py-5 text-center text-sm'>
                    <p>© 2024 ONJ Cleaning Services. All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer