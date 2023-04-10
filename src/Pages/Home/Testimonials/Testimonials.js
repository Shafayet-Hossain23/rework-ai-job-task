import React from 'react';

const Testimonials = () => {
    return (
        <div className='lg:mt-[60px] mt-14 lg:mx-[111px] mx-5'>
            <div className='flex justify-center mb-[76px]'>
                <div>
                    <h1 className='text-[33px] font-[300] leading-[125%]'>Testimonials</h1>
                </div>
                <p className='mx-[28px]' style={{ borderLeft: "2px solid orange" }}>

                </p>
                <div>
                    <p className='text-[20px] font-[300]'> What recruiters have to <br /> say about <span className='text-[#E46D2F]'>
                        mFilterIt</span> </p>
                </div>
            </div>
            <div className='lg:grid grid-cols-2 lg:gap-12'>
                <div className='border rounded-lg bg-white shadow-md p-11'>
                    <div className='flex'>
                        <div>
                            <img className='w-14 h-14' src="https://static.wixstatic.com/media/3669ad_8d47f81253d9429fac98e261a8f2fadd~mv2.png/v1/fill/w_162,h_162,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/stazplay.png" alt="" />
                        </div>
                        <div className='ml-4 mt-1'>
                            <h1 className='font-medium'>Hamad Malik</h1>
                            <p>CMO</p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        We started working with mFilterlt and almost instantly saw value is subscribing to the service as it helped us challenge and optimize traffic sources, weed out under performing partners and scale with confidence leading to marketing budget optimization.
                    </div>
                </div>
                <div className='border rounded-lg bg-white shadow-md p-11 lg:mt-0 mt-4 '>
                    <div className='flex'>
                        <div>
                            <img className='w-14 h-14' src="https://static.wixstatic.com/media/3669ad_9f91c8d431ab4530bac9359ec5ca440d~mv2.png/v1/fill/w_162,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/careem.png" alt="" />
                        </div>
                        <div className='ml-4 mt-1'>
                            <h1 className='font-medium'>Haris Khan </h1>
                            <p>Head Acquisition</p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        Ad-fraud is a challenge with every ad network - Careem works closely with partners to control the fraud and improve the traffic quality using mFilterIt fraud detection tool. The tool categorically identifies the type of fraud and helps understand real value additional by ad-network.
                    </div>
                </div>
                <div className='border rounded-lg bg-white shadow-md p-11 lg:mt-0 mt-4'>
                    <div className='flex'>
                        <div>
                            <img className='w-14 h-14' src="https://static.wixstatic.com/media/3669ad_3d684a9227d54f0292b2fe7b4e68d95a~mv2.png/v1/fill/w_162,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/vilrginn.png" alt="" />
                        </div>
                        <div className='ml-4 mt-1'>
                            <h1 className='font-medium'>Ganesh Sonawane</h1>
                            <p>Sr. Digital Manager</p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        mFilterit have been a fantastic partner in not only helping us identify fraud sources but also optimize and identify where we can scale our investments. The team at mFilterlt have consistently delivered performance and have extended the support with respect to managing our partners.
                    </div>
                </div>
                <div className='border rounded-lg bg-white shadow-md p-11 lg:mt-0 mt-4'>
                    <div className='flex'>
                        <div>
                            <img className='w-14 h-14' src="https://static.wixstatic.com/media/3669ad_3542cb7885ac49c791219fb5be7f5fd3~mv2.png/v1/fill/w_162,h_164,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/pidilite.png" alt="" />
                        </div>
                        <div className='ml-4 mt-1'>
                            <h1 className='font-medium'>Parth Desai </h1>
                            <p>Sr. Manager</p>
                        </div>
                    </div>
                    <div className='mt-8'>
                        With the support of mFilterlt, we were able to improve the efficiency of our performance marketing spends and optimize our call centre bandwidth basis the quality of the lead. The detailed transactional reporting provided by mFilterlt helped us deliver outstanding business results.
                    </div>
                </div>
            </div>
            <div className='text-center lg:mt-20 mt-14'>
                <button className="border border-[#F48850] text-[#F48850] px-5 py-[4px] rounded-lg shadow-md">View More</button>
            </div>
        </div>
    );
};

export default Testimonials;