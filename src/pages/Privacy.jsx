import React from 'react'

const Privacy = () => {
    return (
        <section className='px-5 lg:px-24 py-10 lg:py-20 h-max bg-[#f9f9f9] text-green-900'>

            <div className='text-center'>
                <h2 className='text-3xl lg:text-5xl font-bold mb-5'>Privacy Policy</h2>
                <p className='text-lg lg:text-xl mb-10'>Protecting Your Privacy with ONJ Cleaning Services</p>
            </div>

            {/* Privacy Policy Content */}
            <div className='bg-white rounded-lg p-8 shadow-lg'>
                <h3 className='font-bold text-2xl mb-4'>1. Information We Collect</h3>
                <p className='text-gray-700 mb-6'>
                    ONJ Cleaning Services ("we," "our," "us") values the privacy of our clients. This Privacy Policy explains how we collect, use, and protect your information.
                </p>
                <p className='text-gray-700 mb-6'>
                    We collect personal information (name, address, phone number, email) when you contact us or book a service. We also collect payment information for billing purposes.
                </p>

                <h3 className='font-bold text-2xl mb-4'>2. How We Use Your Information</h3>
                <p className='text-gray-700 mb-6'>
                    Your information is used for the following purposes:
                    <ul className='list-disc pl-5 mt-3'>
                        <li>To provide and manage services.</li>
                        <li>To communicate with you regarding appointments or inquiries.</li>
                        <li>To process payments securely.</li>
                    </ul>
                </p>

                <h3 className='font-bold text-2xl mb-4'>3. Data Protection</h3>
                <p className='text-gray-700 mb-6'>
                    We use industry-standard security measures to protect your data from unauthorized access. We do not sell or share your personal information with third parties except for service delivery or legal obligations.
                </p>

                <h3 className='font-bold text-2xl mb-4'>4. Your Rights</h3>
                <p className='text-gray-700 mb-6'>
                    You have the right to access, update, or request the deletion of your personal information.
                </p>

                <h3 className='font-bold text-2xl mb-4'>5. Payment Information</h3>
                <p className='text-gray-700 mb-6'>
                    Your payment information is collected solely for billing purposes and is processed securely. We do not store payment details longer than necessary to process your payments.
                </p>

                <h3 className='font-bold text-2xl mb-4'>6. Data Retention</h3>
                <p className='text-gray-700 mb-6'>
                    We retain your personal information for as long as necessary to provide you with our services and to comply with legal obligations.
                </p>

                <h3 className='font-bold text-2xl mb-4'>7. Third-Party Services</h3>
                <p className='text-gray-700 mb-6'>
                    We may share your personal information with trusted third-party service providers who assist us in providing our services. These third parties are bound by confidentiality agreements and are only allowed to use your information for the purposes of providing services on our behalf.
                </p>

                <h3 className='font-bold text-2xl mb-4'>8. Changes to the Privacy Policy</h3>
                <p className='text-gray-700 mb-6'>
                    We reserve the right to update this Privacy Policy at any time. We will notify you of any significant changes by posting a notice on our website or sending an email.
                </p>

                <h3 className='font-bold text-2xl mb-4'>9. Contact Us</h3>
                <p className='text-gray-700'>
                    If you have any questions or concerns regarding our Privacy Policy, please contact us at:
                    <br />
                    <strong>Phone:</strong> (XXX) XXX-XXXX
                    <br />
                    <strong>Email:</strong> info@onjcleaning.com
                </p>
            </div>

            {/* Call to Action Section */}
            <div className='text-center mt-10'>
                <p className='text-lg lg:text-xl font-bold'>
                    For any questions or concerns about your privacy, feel free to reach out at (XXX) XXX-XXXX.
                </p>
            </div>
        </section>
    );
}

export default Privacy