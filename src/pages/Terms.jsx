import React from 'react'

const Terms = () => {
    return (
        <section className='px-5 lg:px-24 py-10 lg:py-20 h-max text-green-900'>
            <div className='text-center'>
                <h2 className='text-3xl lg:text-5xl font-bold mb-5'>Terms of Service</h2>
                <p className='text-lg lg:text-xl mb-10'>Your Agreement with ONJ Cleaning Services</p>
            </div>

            {/* Terms and Conditions Content */}
            <div className=''>
                <h3 className='font-bold text-2xl mb-4'>1. Service Agreement</h3>
                <p className='text-gray-700 mb-6'>
                    ONJ Cleaning Services agrees to provide the cleaning services as outlined at the time of
                    booking. All services will be performed in a professional manner by trained personnel.
                </p>

                <h3 className='font-bold text-2xl mb-4'>2. Payments</h3>
                <p className='text-gray-700 mb-6'>
                    Payment is due upon completion of services unless otherwise agreed upon. We accept
                    major credit cards, checks, and online payments.
                </p>

                <h3 className='font-bold text-2xl mb-4'>3. Cancellations</h3>
                <p className='text-gray-700 mb-6'>
                    Clients may cancel or reschedule appointments with at least 24 hours’ notice. Failure to
                    do so may result in a cancellation fee.
                </p>

                <h3 className='font-bold text-2xl mb-4'>4. Liability</h3>
                <p className='text-gray-700 mb-6'>
                    ONJ Cleaning Services is insured; however, we are not responsible for damage due to
                    improper handling of your personal items unless caused by our negligence.
                </p>

                <h3 className='font-bold text-2xl mb-4'>5. Governing Law</h3>
                <p className='text-gray-700'>
                    These terms are governed by the laws of Florida and the applicable federal laws.
                </p>
            </div>

            {/* Call to Action Section */}
            <div className='text-center mt-10'>
                <p className='text-lg lg:text-xl font-bold'>
                    For further details or service inquiries, call us at (561) 451 7984.
                </p>
            </div>
        </section>
    );
}

export default Terms