import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { RiMenu2Line } from "react-icons/ri";
import { Modal } from '@mui/material';

const Header = () => {

    const navLinks = [
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
        }
    ]

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <header className='bg-green-900 lg:flex justify-between items-center xl:mx-24 px-20 py-10 hidden top-0 sticky z-40'>

                <nav className='flex gap-5 text-xl text-white'>
                    {navLinks.map((data, index) => {
                        return (
                            <NavLink className={({ isActive }) => isActive ? 'font-medium duration-300 ' : 'font-medium duration-300 opacity-70 hover:opacity-100'} to={data.link} key={index}>
                                {data.name}
                            </NavLink>
                        )
                    })}
                </nav>

                <Link to='/cost-calculator' className='bg-white text-green-900 font-medium text-xl py-2 px-6 rounded-md'>
                    Calculate Cost
                </Link>

            </header>
            <header className='bg-green-800 flex justify-between items-center lg:mx-24 px-5 py-5 lg:hidden top-0 sticky z-40'>
                <RiMenu2Line onClick={handleOpen} size={30} className='text-white' />
            </header>

            <Modal
                open={open}
                onClose={handleClose}
                className='flex justify-center items-center'
            >
                <div className='bg-white p-10 rounded-xl'>
                    <nav className='flex flex-col gap-5 text-xl text-[#004AAD]'>

                        {navLinks.map((data, index) => {
                            return (
                                <NavLink onClick={handleClose} className={({ isActive }) => isActive ? 'font-medium' : ''} to={data.link} key={index}>
                                    {data.name}
                                </NavLink>
                            )
                        })}

                        <Link to='/cost-calculator' className='text-white bg-green-900 font-medium text-xl py-2 px-6 rounded-md'>
                            Calculate Cost
                        </Link>
                    </nav>
                </div>
            </Modal>

        </>
    )
}

export default Header