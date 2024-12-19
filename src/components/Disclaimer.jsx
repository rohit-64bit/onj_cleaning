import React from 'react'
import BBB from '../assets/bbb.png'
import TrustPilot from '../assets/trustpilot.svg'
import MapQuest from '../assets/mapquest.svg'
import UCC from '../assets/ucc.svg'
import { Link } from 'react-router-dom'

const Disclaimer = () => {
    return (
        <div className='text-[10px] flex flex-col gap-1'>

            <p className='inline-block'>
                By using this site, you agree to our
                <Link to='/privacy' className='text-blue-500 underline underline-offset-1 mx-1'>
                    Privacy Policy
                </Link>
                &
                <Link to='/terms' className='text-blue-500 underline underline-offset-1 mx-1'>
                    Terms of Service
                </Link>
                your data is safe with us.
            </p>

            <p className='flex'>
                
                <p>
                    Trusted by
                </p>

                <div className="flex gap-2 ml-1">
                    <img src={BBB} alt="" className='w-7 object-cover' />
                    <img src={TrustPilot} alt="" className='w-12' />
                    <img src={MapQuest} alt="" className='w-6' />
                    <img src={UCC} alt="" className='w-32' />
                </div>

            </p>

        </div>
    )
}

export default Disclaimer