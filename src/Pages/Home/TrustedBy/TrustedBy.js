import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TrustedBy = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className='lg:mt-[134px] mt-14  mb-24'>
            <div className='bg-[#F48850] lg:px-[140px] px-10 lg:py-8 py-5'>
                <div className='text-center pb-5'>
                    <h1 className='text-[22px] text-white font-semibold'>Trusted By</h1>
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
                    removeArrowOnDeviceType={["tablet", "mobile"]}

                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className=''>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_7ff71b7b169b41ebbde0e14a2f9fc325~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_7ff71b7b169b41ebbde0e14a2f9fc325~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_e562408f2b1049d8a08dbe45693667ca~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_e562408f2b1049d8a08dbe45693667ca~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_9a8d5e30ae824ba18a66a6ac86659637~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_9a8d5e30ae824ba18a66a6ac86659637~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_c178575718f543a2a480933e50230cd8~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_c178575718f543a2a480933e50230cd8~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_c51573633f9f45b6b6505411e7693b98~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_c51573633f9f45b6b6505411e7693b98~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_f7804b68f15944d5a28d71f8bb2aef1c~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_f7804b68f15944d5a28d71f8bb2aef1c~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_3542cb7885ac49c791219fb5be7f5fd3~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_3542cb7885ac49c791219fb5be7f5fd3~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_7414704a4b2746e99b7a164632f802ae~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_7414704a4b2746e99b7a164632f802ae~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_978bec43a56e4e78aaa1e05cf2c8c60e~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_978bec43a56e4e78aaa1e05cf2c8c60e~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_1c9ebd703fd843a08e49af3087d7b88d~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_1c9ebd703fd843a08e49af3087d7b88d~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_90d24d2d88154fc7b627099031522056~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_90d24d2d88154fc7b627099031522056~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_844d96d599af44ecb0b01d403b1ca7a9~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_844d96d599af44ecb0b01d403b1ca7a9~mv2.png" alt="" />
                    </div>
                    <div>
                        <img className='lg:w-[126px] lg:h-[127px] w-[90px] h-[88px]' src="https://static.wixstatic.com/media/3669ad_5ebb72f781f8431d94c07c3dd0b782b2~mv2.png/v1/fill/w_191,h_191,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/3669ad_5ebb72f781f8431d94c07c3dd0b782b2~mv2.png" alt="" />
                    </div>
                </Carousel>

            </div>
        </div>
    );
};

export default TrustedBy;