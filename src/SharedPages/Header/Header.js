import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='lg:mx-[100px] lg:my-[24px]  my-5 mx-14'>
            {/* <div onClick={() => setOpen(!open)} className='lg:hidden xl:hidden lg:mx-0 mx-5 py-5'>
                {
                    open ? <RxCross1 /> :
                        <FaBars />
                }
            </div> */}
            <div className='lg:flex justify-between'>
                <div className='lg:block flex justify-between'>
                    <div>
                        <img className='h-[51px] w-[178px] ' src="https://static.wixstatic.com/media/3669ad_5b73f2980beb46fa97757b154beaa424~mv2.png/v1/fill/w_267,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mFilterIt%20PNG.png" alt="" />
                    </div>
                    <div onClick={() => setOpen(!open)} className='lg:hidden xl:hidden lg:mx-0  mt-3'>
                        {
                            open ? <RxCross1 className='cursor-pointer' size={25} /> :
                                <FaBars className='cursor-pointer' size={25} />
                        }
                    </div>
                </div>
                <div>
                    <ul className={`lg:flex lg:mt-2 lg:static absolute ${open ? 'top-[0px] left-0 w-[55%] h-full text-white bg-black pt-20 pl-14 transition duration-300 ease-in-out ' : 'top-[-400px]'}`}>
                        <li>
                            <Link to="#">Our Solutions</Link>
                        </li>
                        <li className='lg:ml-[40px] lg:mt-0 mt-5'>
                            <Link to="#">Resources</Link>
                        </li>
                        <li className='lg:ml-[40px] lg:mt-0 mt-5'>
                            <Link to="#">About Us</Link>
                        </li>
                        <li className='lg:ml-[40px] lg:mt-0 mt-5'>
                            <Link to="#">Careers</Link>
                        </li>
                        <li className='lg:ml-[32px] lg:mt-0 mt-7'>
                            <button className="border border-[#F48850] text-[#F48850] px-5 py-[4px] rounded-lg shadow-md">Contact Us</button>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;