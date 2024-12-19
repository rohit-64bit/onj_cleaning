import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Disclaimer from '../components/Disclaimer';

const CostCalculator = () => {
    const [formData, setFormData] = useState({
        area: '',
        cleaningType: 'StandardClean',
        addOns: [],
    });

    const [estimatedCost, setEstimatedCost] = useState(0);

    // Pricing data from the PDF document
    const cleaningPrices = {
        '500 SQFT': {
            DeepClean: 186, StandardClean: 138, Monthly: 108, Biweekly: 98, Weekly: 98, MoveInOutClean: 196, PostConstructionClean: 242,
        },
        '750 SQFT': {
            DeepClean: 208, StandardClean: 148, Monthly: 128, Biweekly: 114, Weekly: 98, MoveInOutClean: 238, PostConstructionClean: 262,
        },
        '1000 SQFT': {
            DeepClean: 268, StandardClean: 158, Monthly: 148, Biweekly: 138, Weekly: 128, MoveInOutClean: 328, PostConstructionClean: 378,
        },
        '1250 SQFT': {
            DeepClean: 318, StandardClean: 188, Monthly: 158, Biweekly: 138, Weekly: 126, MoveInOutClean: 366, PostConstructionClean: 406,
        },
        '1500 SQFT': {
            DeepClean: 338, StandardClean: 218, Monthly: 184, Biweekly: 158, Weekly: 148, MoveInOutClean: 388, PostConstructionClean: 476,
        },
        '1750 SQFT': {
            DeepClean: 386, StandardClean: 228, Monthly: 198, Biweekly: 176, Weekly: 164, MoveInOutClean: 478, PostConstructionClean: 522,
        },
        '2000 SQFT': {
            DeepClean: 436, StandardClean: 246, Monthly: 218, Biweekly: 186, Weekly: 172, MoveInOutClean: 496, PostConstructionClean: 532,
        },
        '2250 SQFT': {
            DeepClean: 438, StandardClean: 256, Monthly: 226, Biweekly: 186, Weekly: 168, MoveInOutClean: 536, PostConstructionClean: 562,
        },
        '2500 SQFT': {
            DeepClean: 448, StandardClean: 278, Monthly: 238, Biweekly: 192, Weekly: 176, MoveInOutClean: 556, PostConstructionClean: 576,
        },
        '2750 SQFT': {
            DeepClean: 466, StandardClean: 288, Monthly: 246, Biweekly: 218, Weekly: 188, MoveInOutClean: 576, PostConstructionClean: 596,
        },
        '3000 SQFT': {
            DeepClean: 488, StandardClean: 306, Monthly: 258, Biweekly: 238, Weekly: 208, MoveInOutClean: 606, PostConstructionClean: 636,
        },
        '3250 SQFT': {
            DeepClean: 526, StandardClean: 328, Monthly: 278, Biweekly: 248, Weekly: 218, MoveInOutClean: 626, PostConstructionClean: 664,
        },
        '3500 SQFT': {
            DeepClean: 566, StandardClean: 338, Monthly: 288, Biweekly: 272, Weekly: 238, MoveInOutClean: 638, PostConstructionClean: 672,
        },
        '3750 SQFT': {
            DeepClean: 586, StandardClean: 358, Monthly: 298, Biweekly: 272, Weekly: 256, MoveInOutClean: 676, PostConstructionClean: 698,
        },
        '4000 SQFT': {
            DeepClean: 648, StandardClean: 396, Monthly: 352, Biweekly: 328, Weekly: 288, MoveInOutClean: 736, PostConstructionClean: 768,
        },
        '4250 SQFT': {
            DeepClean: 668, StandardClean: 418, Monthly: 368, Biweekly: 348, Weekly: 316, MoveInOutClean: 766, PostConstructionClean: 799,
        },
        '4500 SQFT': {
            DeepClean: 688, StandardClean: 438, Monthly: 378, Biweekly: 358, Weekly: 326, MoveInOutClean: 788, PostConstructionClean: 828,
        },
        '4750 SQFT': {
            DeepClean: 718, StandardClean: 468, Monthly: 398, Biweekly: 368, Weekly: 338, MoveInOutClean: 818, PostConstructionClean: 858,
        },
        '5000 SQFT': {
            DeepClean: 748, StandardClean: 488, Monthly: 438, Biweekly: 418, Weekly: 398, MoveInOutClean: 848, PostConstructionClean: 888,
        },
        '5250 SQFT': {
            DeepClean: 778, StandardClean: 518, Monthly: 488, Biweekly: 448, Weekly: 418, MoveInOutClean: 888, PostConstructionClean: 946,
        },
        '5500 SQFT': {
            DeepClean: 846, StandardClean: 556, Monthly: 498, Biweekly: 458, Weekly: 428, MoveInOutClean: 926, PostConstructionClean: 1048,
        },
        '5750 SQFT': {
            DeepClean: 876, StandardClean: 578, Monthly: 518, Biweekly: 478, Weekly: 448, MoveInOutClean: 956, PostConstructionClean: 1078,
        },
        '6000 SQFT': {
            DeepClean: 906, StandardClean: 608, Monthly: 538, Biweekly: 498, Weekly: 468, MoveInOutClean: 986, PostConstructionClean: 1128,
        },
    };

    // Add-On prices
    const addOnPrices = {
        WindowAndDoorTracks: 18,
        WipeDownOutdoorFurniture: 12,
        CleanOutdoorGrill: 38,
        OutsideWindowsWashed: 18,
        Laundry: 16,
        WashDishes: 22,
        DustAndVacuumHVACVents: 28,
        SmokeDamageRemediation: 340,
        WashingWalls: 288,
        CleanInsideCupboardsAndDrawersBathroom: 38,
        CleanInsideCupboardsAndDrawersKitchen: 48,
        OutletsAndSwitchPlatesCleaned: 10,
        CleanInsideRefrigerator: 48,
        DeepInteriorCleanOfOven: 38,
        DeepInteriorCleanOfDishwasher: 38,
        PetsInitialDeepClean: 28,
        BanisterRailingCleaned: 18,
        SanitizeAndDisinfectDoggyDoor: 22,
        HandVacuumDogBed: 12,
        HandVacuumCatPost: 16,
        CleanAndSanitizeKittyLitterBox: 18,
    };

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddOnChange = (e) => {
        const { value } = e.target;
        setFormData((prevData) => {
            const addOns = prevData.addOns.includes(value)
                ? prevData.addOns.filter((addOn) => addOn !== value)
                : [...prevData.addOns, value];
            return { ...prevData, addOns };
        });
        console.log(formData.addOns);
    };

    // Function to find the nearest area key
    const findNearestArea = (inputArea) => {
        const areaKeys = Object.keys(cleaningPrices).map((key) => parseInt(key));
        const nearest = areaKeys.reduce((prev, curr) =>
            Math.abs(curr - inputArea) < Math.abs(prev - inputArea) ? curr : prev
        );
        return `${nearest} SQFT`;
    };

    const handleCalculateCost = (e) => {
        e.preventDefault();

        const inputArea = parseInt(formData.area);
        if (isNaN(inputArea)) {
            setEstimatedCost(0);
            return; // Exit if the input area is not a number
        }

        const area = findNearestArea(inputArea);
        const cleaningCost = cleaningPrices[area]?.[formData.cleaningType] || 0;

        // Calculate the total add-on cost
        const addOnCost = formData.addOns.reduce((total, addOn) => total + (addOnPrices[addOn] || 0), 0);

        // Set the estimated cost
        setEstimatedCost(cleaningCost + addOnCost);
    };

    const [userData, setUserData] = useState({
        'entry.1105730559': '',
        'entry.813457789': '',
        'entry.428431347': '',
        'entry.2021215954': '',
        'entry.248176296': estimatedCost,  // Estimated cost value
        'entry.780975800': formData.cleaningType,  // Cleaning type
        'entry.1532385441': formData.addOns.join(', '),  // Add-ons as a comma-separated string
    });

    const userDataChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log(
            encodeURIComponent(formData.addOns.join(', '))
        )

        // Base Google Form URL (replace with your actual Google Form URL)
        const googleFormBaseURL = `https://docs.google.com/forms/d/e/1FAIpQLSf81_V77AFAl50QRemrKQUn89bGjV9Wzoec0SShrUGmDXTEMA/viewform?usp=pp_url`;

        // Constructing the prefilled URL with the user input data
        const prefilledURL = `${googleFormBaseURL}&entry.1105730559=${encodeURIComponent(userData['entry.1105730559'])}&entry.813457789=${encodeURIComponent(userData['entry.813457789'])}&entry.428431347=${encodeURIComponent(userData['entry.428431347'])}&entry.2021215954=${encodeURIComponent(userData['entry.2021215954'])}&entry.248176296=${encodeURIComponent(estimatedCost)}&entry.780975800=${encodeURIComponent(formData.cleaningType)}&entry.1532385441=${encodeURIComponent(formData.addOns.join(', '))}`;

        // Redirect the user to the prefilled Google Form URL
        window.open(prefilledURL, "_blank");
    };

    // https://docs.google.com/forms/d/e/1FAIpQLSf81_V77AFAl50QRemrKQUn89bGjV9Wzoec0SShrUGmDXTEMA/viewform?usp=pp_url&entry.1105730559=Name&entry.2021215954=email&entry.813457789=contact&entry.428431347=address&entry.248176296=estimated&entry.780975800=services&entry.1532385441=addon

    return (
        <section className='xl:mx-24 px-5 lg:px-20 py-20 flex flex-col h-max justify-center items-center overflow-hidden'>

            <form method='POST' className='flex flex-col gap-4 md:w-1/2'>
                <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Cost Calculator</h1>
                <p>
                    Calculate the cost of cleaning your house with our cost calculator. Enter the details below to get an estimate.
                </p>

                <div className='flex flex-col gap-1'>
                    <label className='first-letter:uppercase font-medium' htmlFor='area'>Area (in SQFT)</label>
                    <input
                        className='outline outline-2 outline-slate-300 focus:border-none focus:outline-blue-900 py-2 px-5 rounded-lg duration-300'
                        type="number"
                        id='area'
                        name='area'
                        value={formData.area}
                        onChange={onChange}
                        placeholder="Enter the area in SQFT"
                        required
                    />
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='first-letter:uppercase font-medium' htmlFor='cleaningType'>Cleaning Type</label>
                    <select
                        className='outline outline-2 outline-slate-300 focus:border-none focus:outline-blue-900 py-2 px-5 rounded-lg duration-300'
                        id='cleaningType'
                        name='cleaningType'
                        value={formData.cleaningType}
                        onChange={onChange}
                        required
                    >
                        <option value="StandardClean">Standard Clean</option>
                        <option value="DeepClean">Deep Clean</option>
                        <option value="Monthly">Monthly</option>
                        <option value="Biweekly">Biweekly</option>
                        <option value="Weekly">Weekly</option>
                        <option value="MoveInOutClean">Move In/Out Clean</option>
                        <option value="PostConstructionClean">Post-Construction Clean</option>
                    </select>
                </div>

                <div className='flex flex-col gap-1'>
                    <label className='first-letter:uppercase font-medium'>Add-Ons</label>
                    {Object.keys(addOnPrices).map((addOn, index) => (
                        <div key={index}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={addOn}
                                    checked={formData.addOns.includes(addOn)}
                                    onChange={handleAddOnChange}
                                    className='mr-2'
                                />
                                {addOn.replace(/([A-Z])/g, ' $1').trim()} (${addOnPrices[addOn]})
                            </label>
                        </div>
                    ))}
                </div>

                <Disclaimer />

                <button className='bg-[#6B6869] text-lg text-white font-medium py-2 px-10 w-max rounded-lg' onClick={handleCalculateCost}>
                    Calculate Cost
                </button>

            </form>

            {
                estimatedCost > 0 &&
                <>
                    <div className='flex flex-col gap-4 md:w-1/2 mt-10'>
                        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">Estimated Cost is ${estimatedCost}</h1>
                    </div>
                    <form method='POST' onSubmit={handleFormSubmit} className='flex flex-col gap-4 md:w-1/2 mt-10'>
                        <h1 className="text-3xl lg:text-4xl font-bold text-center mb-8">
                            Enter Your Details to Get a Quote
                        </h1>

                        <p>Your details will be submitted to our team and we will get back to you with a quote.</p>

                        <input
                            type='text'
                            name='entry.1105730559'
                            value={userData['entry.1105730559']}
                            onChange={userDataChange}
                            placeholder='Name'
                            className='outline outline-2 outline-slate-300 focus:border-none focus:outline-blue-900 py-2 px-5 rounded-lg duration-300'
                        />

                        <input
                            type='text'
                            name='entry.813457789'
                            value={userData['entry.813457789']}
                            onChange={userDataChange}
                            placeholder='Contact No'
                            className='outline outline-2 outline-slate-300 focus:border-none focus:outline-blue-900 py-2 px-5 rounded-lg duration-300'
                        />

                        <input
                            type='email'
                            name='entry.2021215954'
                            value={userData['entry.2021215954']}
                            onChange={userDataChange}
                            placeholder='Email'
                            className='outline outline-2 outline-slate-300 focus:border-none focus:outline-blue-900 py-2 px-5 rounded-lg duration-300'
                        />

                        <input
                            type='text'
                            name='entry.428431347'
                            value={userData['entry.428431347']}
                            onChange={userDataChange}
                            placeholder='Address'
                            className='outline outline-2 outline-slate-300 focus:border-none focus:outline-blue-900 py-2 px-5 rounded-lg duration-300'
                        />

                        <button type='submit' className='bg-[#6B6869] text-lg text-white font-medium py-2 px-10 w-max rounded-lg'>
                            Submit
                        </button>
                    </form>
                </>
            }



        </section>
    );
};

export default CostCalculator;