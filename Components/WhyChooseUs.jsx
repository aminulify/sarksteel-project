'use client'

import Image from 'next/image';
import imgStyle from '../public/logo/style-vector2.png';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './whyChooseStyle.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import img1 from "../public/images/3.jpg";
import img2 from "../public/images/11.jpg";
import img3 from "../public/images/10.jpg";
import img4 from "../public/images/4.jpg";
import img5 from "../public/images/9.jpg";
import img6 from "../public/images/1.jpg";
import img7 from "../public/images/5.jpg";
import img8 from "../public/images/2.jpg";
import img9 from "../public/images/7.jpg";

const WhyChooseUs = () => {
    return (
        <div className="md:max-w-[1250px] md:mx-auto mb-20">

            <div className='md:max-w-[1050px] md:mx-auto mx-10'>
                {/* heading section  */}
            <div className="">
                <div className="flex justify-center -z-10">
                    <Image title="image" src={imgStyle} width={300} className="absolute md:mt-[58px] mt-[48px] md:w-[300px] w-[250px]" alt='image'/>
                </div>
                <h1 className="mt-7 text-[30px] md:text-[40px] text-center text-[var(--secondaryColor)]">Why customer love to</h1>
                <h1 className="-mt-2 text-[35px] md:text-[40px] text-center font-bold text-[var(--mainColor)]">Choose Us</h1>
            </div>

             <main className='mt-16'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={25}

                    breakpoints={{
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 50,
                        },
                      }}
                
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='whyChooseUsSection text-left p-5 rounded-md border-[1.5px] border-[var(--mainColor)]'>
                        <Image src={img1} alt='image'/>
                        <h2 className='text-lg font-semibold text-[var(--mainColor)]'>Expert Engineering</h2>
                        <p className='text-[14px]'>Qualified engineers use the latest software and BNBC codes for precision design.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='whyChooseUsSection text-left p-5 rounded-md border-[1.5px] border-[var(--mainColor)]'>
                        <Image src={img2} alt='image'/>
                        <h2 className='text-lg font-semibold text-[var(--mainColor)]'>Consultant Verification</h2>
                        <p className='text-[15px]'>Senior consultants ensure accuracy and excellence in planning and design.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='whyChooseUsSection text-left p-5 rounded-md border-[1.5px] border-[var(--mainColor)]'>
                        <Image src={img3} alt='image'/>
                        <h2 className='text-lg font-semibold text-[var(--mainColor)]'>Standard Materials</h2>
                        <p className='text-[15px]'>We use high-quality materials that meet global standards for durability.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='whyChooseUsSection text-left p-5 rounded-md border-[1.5px] border-[var(--mainColor)]'>
                        <Image src={img4} alt='image'/>
                        <h2 className='text-lg font-semibold text-[var(--mainColor)]'>Transparency & Trust</h2>
                        <p className='text-[15px]'>Honest communication and ethical practices build strong client relationships.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='whyChooseUsSection text-left p-5 rounded-md border-[1.5px] border-[var(--mainColor)]'>
                        <Image src={img5} alt='image'/>
                        <h2 className='text-lg font-semibold text-[var(--mainColor)]'>Advanced Fabrication</h2>
                        <p className='text-[15px]'>Skilled technicians use cutting-edge machinery for precision steel fabrication.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='whyChooseUsSection text-left p-5 rounded-md border-[1.5px] border-[var(--mainColor)]'>
                        <Image src={img6} alt='image'/>
                        <h2 className='text-lg font-semibold text-[var(--mainColor)]'>Professional Team</h2>
                        <p className='text-[15px]'>Our experienced team delivers top-tier service and quality solutions.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='whyChooseUsSection text-left p-5 rounded-md border-[1.5px] border-[var(--mainColor)]'>
                        <Image src={img7} alt='image'/>
                        <h2 className='text-lg font-semibold text-[var(--mainColor)]'>Competitive Pricing</h2>
                        <p className='text-[15px]'>Cost-effective solutions without compromising quality and reliability.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='whyChooseUsSection text-left p-5 rounded-md border-[1.5px] border-[var(--mainColor)]'>
                        <Image src={img8} alt='image'/>
                        <h2 className='text-lg font-semibold text-[var(--mainColor)]'>After-Sales Support</h2>
                        <p className='text-[15px]'>Reliable service to ensure a smooth and hassle-free project completion.</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='whyChooseUsSection text-left p-5 rounded-md border-[1.5px] border-[var(--mainColor)]'>
                        <Image src={img9} alt='image'/>
                        <h2 className='text-lg font-semibold text-[var(--mainColor)]'>On-Site Support</h2>
                        <p className='text-[15px]'>Dedicated assistance for builders to ensure successful project execution.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
             </main>
            </div>
            
            {/* blur color  */}
            <div className="absolute md:w-[300px] md:h-[300px] w-[150px] h-[150px] blur-[200px] bg-[var(--mainColor)] -z-10 opacity-60 md:top-[1800px]"></div>
            </div>
    );
};

export default WhyChooseUs;