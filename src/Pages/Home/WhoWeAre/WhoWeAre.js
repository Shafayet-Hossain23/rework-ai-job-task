import React from 'react';

const WhoWeAre = () => {
    return (
        <div className='lg:mt-[100px] mt-14 lg:mx-[180px] mx-5'>
            <div className='text-center lg:mb-20 mb-10'>
                <h1 className='text-[33px] font-[300] leading-[125%]'>Who We Are</h1>
            </div>
            <div className='lg:flex '>
                <div className='lg:w-1/2'>
                    <p>We are on a mission to create trust, uphold integrity, drive growth & value across the digital ecosystem. Our team’s expertise in AI, ML and data sciences allows us to save you digitally across all touchpoints. We are the essential tool in a digital marketer’s handbag. We empower our customers with a holistic view of their respective journeys’ in the digital ecosystem by providing them with accurate real-time data that helps them understand their returns on their digital investments.</p>
                    <div className='text-center mt-5 lg:mb-0 mb-14'>
                        <button className="border border-[#F48850] text-[#F48850] px-5 py-[4px] rounded-lg shadow-md">About Us</button>
                    </div>
                </div>
                <div className='grid grid-cols-2 lg:w-1/2 lg:pl-24 pl-5 lg:gap-x-[60px] lg:gap-y-0 gap-y-7'>
                    <div className=''>
                        <div>
                            <img className='w-[60px] h-[60px] lg:ml-4 ml-4' src="https://static.wixstatic.com/media/3669ad_87985d46a81f4bc9ae645e88a80ab3c0~mv2.png/v1/fill/w_90,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AI_ML.png" alt="" />
                            <p className=''>Power of AI/ML</p>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img className='w-[60px] h-[60px] lg:ml-7 ml-7' src="https://static.wixstatic.com/media/3669ad_a5e91c14200745799a8a149ddae8fad8~mv2.png/v1/fill/w_90,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%202_2x.png" alt="" />
                            <p className=''>Future Ready Tech </p>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img className='w-[60px] h-[60px] lg:ml-8 ml-8' src="https://static.wixstatic.com/media/3669ad_f36365ae4e8743788ae8e5c3f75b9002~mv2.png/v1/fill/w_90,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/timer.png" alt="" />
                            <p className=''>Real-Time Tracking  </p>
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <img className='w-[60px] h-[60px] lg:ml-9 ml-9' src="https://static.wixstatic.com/media/3669ad_c89710847fe748aa8c066a8b6be4ce9f~mv2.png/v1/fill/w_90,h_69,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Asset%203_2x.png" alt="" />
                            <p className=''>Seamless Integration </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;