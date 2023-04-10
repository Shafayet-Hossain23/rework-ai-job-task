import React from 'react';
import './Insightful.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const Insightful = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className='lg:mt-[100px] mt-14 lg:mx-[80px] mx-5 '>

            <div className='text-center lg:mb-20 mb-10'>
                <h1 className='text-[33px] font-[300] leading-[125%]'>Insightful Reads - <span className='text-[#F48850]'>mFilterIt</span> </h1>
            </div>
            <Carousel
                swipeable={false}
                draggable={true}
                // showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}

                autoPlaySpeed={3000}
                keyBoardControl={true}
                // customTransition="all .5"
                transitionDuration={1500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}

                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                <div className=" hero lg:w-[270px] w-full lg:h-[345px] h-[380px]" style={{ backgroundImage: `url("https://static.wixstatic.com/media/3669ad_29a1da422e334471a24e8e76a9b1e14f~mv2.png/v1/fill/w_554,h_416,fp_0.50_0.50,q_95,enc_auto/3669ad_29a1da422e334471a24e8e76a9b1e14f~mv2.png")` }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">

                            <p className="mt-56">Know The Unknown Cause Behind Your Abnormally High Installs
                            </p>

                        </div>
                    </div>
                </div>


                <div className=" hero lg:w-[270px] w-full lg:h-[345px] h-[380px]" style={{ backgroundImage: `url("https://static.wixstatic.com/media/3669ad_004589a09e1248a18746d1b69448de05~mv2.png/v1/fill/w_554,h_416,fp_0.50_0.50,q_95,enc_auto/3669ad_004589a09e1248a18746d1b69448de05~mv2.png")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">

                            <p className="mt-56">Reseller Fraud Is Costing You More Than Just Your Ad Budget - Know Why?

                            </p>

                        </div>
                    </div>

                </div>

                <div className=" hero lg:w-[270px] w-full lg:h-[345px] h-[380px]" style={{ backgroundImage: `url("https://static.wixstatic.com/media/3669ad_a6fcbb3c588e406aab9598d8027b4f5e~mv2.png/v1/fill/w_554,h_416,fp_0.50_0.50,q_95,enc_auto/3669ad_a6fcbb3c588e406aab9598d8027b4f5e~mv2.png")` }}>
                    <div className="hero-overlay bg-opacity-70"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">

                            <p className="mt-56">Why Creative Compliance Must Be a Necessity Not A Choice For Your Brand?



                            </p>

                        </div>

                    </div>
                </div>

                <div className=" hero lg:w-[270px] w-full lg:h-[345px] h-[380px]" style={{ backgroundImage: `url("https://static.wixstatic.com/media/3669ad_a347c215508849b896195473c1fced1f~mv2.png/v1/fill/w_554,h_416,fp_0.50_0.50,q_95,enc_auto/3669ad_a347c215508849b896195473c1fced1f~mv2.png")` }}>
                    <div className="hero-overlay bg-opacity-20"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">

                            <p className="mt-56">Know How Your Brand is Under Threat Due to Incent Campaigns


                            </p>

                        </div>
                    </div>
                </div>

            </Carousel>
            {/* <div className='grid grid-cols-4 gap-10'>
                <div>
                    <div className=" hero w-[270px] h-[345px]" style={{ backgroundImage: `url("https://static.wixstatic.com/media/3669ad_29a1da422e334471a24e8e76a9b1e14f~mv2.png/v1/fill/w_554,h_416,fp_0.50_0.50,q_95,enc_auto/3669ad_29a1da422e334471a24e8e76a9b1e14f~mv2.png")` }}>
                        <div className="hero-overlay bg-opacity-40"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">

                                <p className="mt-56">Know The Unknown Cause Behind Your Abnormally High Installs
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" hero w-[270px] h-[345px]" style={{ backgroundImage: `url("https://static.wixstatic.com/media/3669ad_004589a09e1248a18746d1b69448de05~mv2.png/v1/fill/w_554,h_416,fp_0.50_0.50,q_95,enc_auto/3669ad_004589a09e1248a18746d1b69448de05~mv2.png")` }}>
                        <div className="hero-overlay bg-opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">

                                <p className="mt-56">Reseller Fraud Is Costing You More Than Just Your Ad Budget - Know Why?

                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" hero w-[270px] h-[345px]" style={{ backgroundImage: `url("https://static.wixstatic.com/media/3669ad_a6fcbb3c588e406aab9598d8027b4f5e~mv2.png/v1/fill/w_554,h_416,fp_0.50_0.50,q_95,enc_auto/3669ad_a6fcbb3c588e406aab9598d8027b4f5e~mv2.png")` }}>
                        <div className="hero-overlay bg-opacity-80"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">

                                <p className="mt-56">Why Creative Compliance Must Be a Necessity Not A Choice For Your Brand?



                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=" hero w-[270px] h-[345px]" style={{ backgroundImage: `url("https://static.wixstatic.com/media/3669ad_a347c215508849b896195473c1fced1f~mv2.png/v1/fill/w_554,h_416,fp_0.50_0.50,q_95,enc_auto/3669ad_a347c215508849b896195473c1fced1f~mv2.png")` }}>
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="">

                                <p className="mt-56">Know How Your Brand is Under Threat Due to Incent Campaigns


                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    );
};

export default Insightful;