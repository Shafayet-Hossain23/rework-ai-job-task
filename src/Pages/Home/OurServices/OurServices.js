import React from 'react';

const OurServices = () => {
    return (
        <div className='lg:mt-[60px] mt-14 lg:mx-[111px] mx-5 '>
            <div className='text-center'>
                <h1 className='text-[33px] font-[300] leading-[125%]'>Our Services</h1>
            </div>
            <div className='lg:mt-[75px] mt-10 lg:grid grid-cols-2 lg:gap-10'>
                <div className='lg:flex justify-between border rounded-2xl lg:py-10 py-5 lg:px-5 px-7 lg:mb-0 mb-5'>
                    <div className=''>
                        <img className='lg:w-[330px] lg:h-[131px]' src="https://img.freepik.com/free-vector/people-buying-online_24908-55874.jpg?w=740&t=st=1681101322~exp=1681101922~hmac=2eb396bd55d93f8a5276cb4a3fcad3bb2709f00d48d73a0ec86e8257ee529b80" alt="" />
                    </div>
                    <div className=' lg:ml-5'>
                        <h1 className='text-[20px]'>eCommerce Competitive Analtics</h1>
                        <p>
                            Map your brand to the eCommerce landscape to enhance market share with real-time market intelligence.
                        </p>
                        <p className='cursor-pointer text-[#D25412]'>Read More...</p>
                    </div>
                </div>
                <div className='lg:flex justify-between border rounded-2xl lg:py-10 py-5 lg:px-5 px-7 lg:mb-0 mb-5'>
                    <div className=''>
                        <img className='lg:w-[460px] lg:h-[131px]' src="https://img.freepik.com/free-vector/data-privacy-abstract-concept-illustration_335657-3828.jpg?w=740&t=st=1681102742~exp=1681103342~hmac=3dd6b3f75f770e4cd97e1f4bdc458f4098f8ea5cb8656aefa88e3deb285cf051" alt="" />
                    </div>
                    <div className=' lg:ml-5'>
                        <h1 className='text-[20px]'>Brand Hygiene Protection</h1>
                        <p>
                            Get the full visibility and control of your marketing campaigns with advanced algorithms that safeguard brands from safety and infringement issues.
                        </p>
                        <p className='cursor-pointer text-[#D25412]'>Read More...</p>
                    </div>
                </div>
                <div className='lg:flex justify-between border rounded-2xl lg:py-10 py-5 lg:px-5 px-7 lg:mb-0 mb-5'>
                    <div className=''>
                        <img className='lg:w-[460px] lg:h-[131px]' src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration-enter-application-mobile-screen-user-login-form-website-page-interface-ui-new-profile-registration-email-account_335657-936.jpg?w=740&t=st=1681102894~exp=1681103494~hmac=ad5aba442ef6bfa014c1c9b9dd48cb3802a0d22c015795baa8cf7d1145d3a1ae" alt="" />
                    </div>
                    <div className=' lg:ml-5'>
                        <h1 className='text-[20px]'>Mobile Identity Solution</h1>
                        <p>
                            Seamless identity verification to eliminate risk and fraud at a single go with minimal user inpuat and reducing friction in identity validation
                        </p>
                        <p className='cursor-pointer text-[#D25412]'>Read More...</p>
                    </div>
                </div>
                <div className='lg:flex justify-between border rounded-2xl lg:py-10 py-5 lg:px-5 px-7 lg:mb-0 mb-5'>
                    <div className=''>
                        <img className='lg:w-[460px] lg:h-[131px]' src="https://img.freepik.com/free-vector/creative-idea-flat-icon-innovative-internet-project-advertising-business-online-promotion-man-with-loudspeaker-cartoon-character_335657-380.jpg?w=740&t=st=1681103012~exp=1681103612~hmac=d0ccfc3920ab2041752210d000d148e48b8ab7edc1c22e90777849b359385bbb" alt="" />
                    </div>
                    <div className=' lg:ml-5'>
                        <h1 className='text-[20px]'>Ad Traffic Validation</h1>
                        <p>
                            mFilterIt’s ad fraud detection solution provides deterministic ad-fraud detection & prevention for both App & Web campaigns and help advertisers save money with better ROI.
                        </p>
                        <p className='cursor-pointer text-[#D25412]'>Read More...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurServices;