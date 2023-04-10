import React from 'react';

const NumbersSpeak = () => {
    return (
        <div className='lg:mt-[134px] mt-14 lg:mx-[100px] mx-5 '>
            <div className='text-center'>
                <h1 className='text-[33px] font-[300] leading-[125%]'>Numbers speak <br /> about us!</h1>
            </div>
            <div className='lg:mt-[70px] mt-14 lg:flex '>
                <div>
                    <img className='lg:w-[580px] lg:h-[281px]' src="https://img.freepik.com/free-vector/dashboard-concept-illustration_114360-4351.jpg?w=900&t=st=1681103504~exp=1681104104~hmac=ca502070b287e7d3d11d0620d22abd5fb59ad22ffc4dabf2960177b562ea3baa" alt="" />
                </div>
                <div>
                    <div className='grid grid-cols-3 lg:mt-8 mt-5 lg:gap-x-24 gap-x-5 lg:gap-y-10 gap-y-5  lg:ml-[101px] lg:mx-0 mx-2'>
                        <div className='text-center'>
                            <p className='font-medium'>1500+</p>

                            <hr className='mt-2 border-t-2 border-[#FFC727]' />
                            <p className='mt-1'>
                                eCommerce Websites Tracked
                            </p>
                        </div>
                        <div className='text-center'>
                            <p className='font-medium'>100 K+</p>

                            <hr className='mt-2 border-t-2 border-[#FFC727]' />
                            <p className='mt-1'>
                                Infringement Instances Identified
                            </p>
                        </div>
                        <div className='text-center'>
                            <p className='font-medium'>100 K+</p>

                            <hr className='mt-2 border-t-2 border-[#FFC727]' />
                            <p className='mt-1'>
                                Brands Analyzed
                            </p>
                        </div>
                        <div className='text-center'>
                            <p className='font-medium'>1 B+</p>

                            <hr className='mt-2 border-t-2 border-[#FFC727]' />
                            <p className='mt-1'>
                                Video Frames Analyzed
                            </p>
                        </div>
                        <div className='text-center'>
                            <p className='font-medium'>3.5 B+</p>

                            <hr className='mt-2 border-t-2 border-[#FFC727]' />
                            <p className='mt-1'>
                                Unique Device Coverage
                            </p>
                        </div>
                        <div className='text-center'>
                            <p className='font-medium'>$400 M+</p>

                            <hr className='mt-2 border-t-2 border-[#FFC727]' />
                            <p className='mt-1'>
                                Saved for clients
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </div >
    );
};

export default NumbersSpeak;