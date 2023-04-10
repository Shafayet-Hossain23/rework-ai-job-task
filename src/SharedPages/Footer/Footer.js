import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='lg:mt-[145px] mt-24 lg:mb-[50px] lg:px-[20px]  lg:border-y-2 border-[#DDDDDD] shadow-md'>
            <footer className="footer p-10 bg-white text-base-content">
                <div>
                    <span className="footer-title">Our Solutions

                    </span>
                    <a className="link link-hover">Ad Traffic Validation</a>
                    <a className="link link-hover">Brand Hygiene Protection</a>
                    <a className="link link-hover">eCommerce Competitive Analytics</a>
                    <a className="link link-hover">Mobile Identity Solution</a>
                </div>
                <div>
                    <span className="footer-title">Quick Links</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">CSR</a>
                    <a className="link link-hover">Terms & Conditions </a>
                    <a className="link link-hover">Privacy Policy</a>
                </div>
                <div>
                    <span className="footer-title">Resources</span>
                    <a className="link link-hover">Blogs</a>
                    <a className="link link-hover">Case Studies</a>
                    <a className="link link-hover">Reports</a>
                    <a className="link link-hover">Newsroom & Media</a>
                    <a className="link link-hover">PSU Solutions</a>
                </div>
                <div>
                    <div className='flex gap-4 lg:ml-20 ml-8 mb-3'>
                        <div>
                            {/* <FaTwitter size={30} color="blue" /> */}
                            <img className='w-8 h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Logo_of_Twitter%2C_Inc..svg/512px-Logo_of_Twitter%2C_Inc..svg.png?20220821125553" alt="" />
                        </div>
                        <div>
                            {/* <FaTwitter size={30} color="blue" /> */}
                            <img className='w-8 h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" />
                        </div>
                        <div>

                            <img className='w-8 h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/2048px-Facebook_icon_2013.svg.png" alt="" />
                        </div>
                        <div>

                            <img className='w-8 h-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/640px-YouTube_full-color_icon_%282017%29.svg.png" alt="" />
                        </div>
                        <div>

                            <img className='w-8 h-8' src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                        </div>
                    </div>
                    <div className='border-2 rounded-lg text-center lg:px-24 px-14 py-5'>
                        <h1 className='font-semibold'>Sign Up For Our Newsletter *</h1>
                        <input name='email' type="email" className="my-5 lg:w-56 w-full px-3 py-2 bg-white border border-slate-300  text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500" required placeholder='Email' />
                        <div className='text-center mt-3'>
                            <button className="border-2 border-[#F48850] text-[#F48850] px-7 py-[7px] rounded-lg shadow-md">Subscribe</button>
                        </div>
                    </div>
                </div>


            </footer>

            <div className='px-10 pb-10 lg:mt-[-70px]'>
                <img className='h-[51px] w-[178px] ' src="https://static.wixstatic.com/media/3669ad_5b73f2980beb46fa97757b154beaa424~mv2.png/v1/fill/w_267,h_77,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/mFilterIt%20PNG.png" alt="" />
                <p>©2023 mFilterIt. All rights reserved</p>
            </div>

        </div>
    );
};

export default Footer;