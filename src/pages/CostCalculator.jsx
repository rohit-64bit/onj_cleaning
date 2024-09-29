import React, { useState } from 'react'

const CostCalculator = () => {

    const [formData, setFormData] = useState({
        area: null,
        rooms: null,
        bathrooms: null,
        furnitures: null,
        windows: null,
        floors: null,
        carpets: null,
    })

    const onChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleCalculateCost = (e) => {
        e.preventDefault()
        console.log('Calculating cost...')
    }

    return (
        <section className='xl:mx-24 px-5 lg:px-20 py-20 flex flex-col h-max justify-center items-center overflow-hidden'>
            <form method='POST' className='flex flex-col gap-4 md:w-1/2'>

                <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Cost Calculator</h1>
                <p>
                    Calculate the cost of cleaning your house with our cost calculator. Enter the details below to get an estimate.
                </p>

                {
                    Object.keys(formData).map((key, index) => {
                        return (
                            <div key={index} className='flex flex-col gap-1'>

                                <label className='first-letter:uppercase font-medium' htmlFor={key}>{key}</label>
                                <input className='outline outline-2 outline-slate-300 focus:border-none focus:outline-green-900 py-2 px-5 rounded-lg duration-300' type="number" id={key} name={key} value={formData[key]} onChange={onChange}
                                placeholder={`Enter the number of ${key}`}
                                />

                            </div>
                        )
                    })
                }

                <button className='bg-[#6B6869] text-lg text-white font-medium py-2 px-10 w-max rounded-lg' onClick={handleCalculateCost}>
                    Calculate Cost
                </button>

            </form>
        </section>
    )
}

export default CostCalculator