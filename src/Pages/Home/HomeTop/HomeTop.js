import React from 'react';

const HomeTop = () => {
    return (
        <div className="lg:mt-[75px] lg:mx-[191px] mx-5">
            <div className='lg:flex justify-between'>
                <div className=''>
                    <img className='h-[352px] w-[353px]' src="https://img.freepik.com/free-vector/superhero-concept-illustration_114360-5651.jpg?w=740&t=st=1681099921~exp=1681100521~hmac=aaab73df0ff5de9fc811ceb7c985889db578258b3251b06b8cf37e478f8ab6e6" alt="" />
                </div>
                <div className=' lg:mt-[50px]  lg:block flex justify-center '>
                    <div>
                        <h1 className='text-[33px] font-[300] leading-[125%]'>We are the <br /> Superhero of the <br />
                            Digital Ad World</h1>
                        <p className='lg:mt-[23px] mt-3'>
                            We create innovative marketing solutions for <br /> cost conscious marketers who does not <br /> compromise on the results!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeTop;