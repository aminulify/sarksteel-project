'use client'
import Image from "next/image";
import imgStyle from "../public/logo/heading-style.png";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { MdFormatQuote } from "react-icons/md";


const BestWishers = () => {
    return (
        <div>
            <div className="BgBestWishers">
            {/* <div> */}
            <section className="mt-10 md:max-w-[1050px] md:mx-auto">
            
                            {/* heading section  */}
                        <div className="pt-4">
                            <div className="flex justify-center md:ml-30 ml-28 -z-10">
                                <Image title="image" src={imgStyle} alt="heading style" width={85} className="absolute"/>
                            </div>
                            <h1 className="mt-7 text-[35px] md:text-[40px] text-center text-white">Best <span className="font-bold text-[var(--mainColor)]">Wishers</span></h1>
            
                            <div className="flex justify-center"><p className="mx-10 text-center text-white md:w-[700px] md:text-xl">Honoring the Support of Our Leaders & Experts.</p></div>
                        </div> 

                        <main className="my-5">
                            <Swiper
                                spaceBetween={30}
                                centeredSlides={true}
                                autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                                }}
                                loop={true}
                                pagination={{
                                clickable: true,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <div className="flex flex-col justify-center text-center md:max-w-[1050px] md:mx-auto text-white mx-10">
                                        <h2 className="text-xl font-semibold">Md. Saiful Islam</h2>
                                        <p className="text-sm mb-1 ">Head of Operations</p>
                                        <p className="flex md:w-[650px] mx-10  md:mx-auto text-sm md:text-[18px] mt-2"><MdFormatQuote className="rotate-180 text-2xl" /> May SARK Steel continue to shape the future of steel construction with innovation, reliability, and excellence.<MdFormatQuote className="text-2xl" /></p>
                                    </div>
                                    
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="flex flex-col justify-center text-center md:max-w-[1050px] md:mx-auto text-white mx-10">
                                        <h2 className="text-xl font-semibold">Engr. Mahmudul Islam</h2>
                                        <p className="text-sm mb-1 ">Managing Director</p>
                                        <p className="flex md:w-[650px] mx-10  md:mx-auto text-sm md:text-[18px] mt-2"><MdFormatQuote className="rotate-180 text-2xl" /> May SARK Steel keep growing with innovation, precision, and unwavering commitment to customer satisfaction. <MdFormatQuote className="text-2xl" /></p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="flex flex-col justify-center text-center md:max-w-[1050px] md:mx-auto text-white mx-10">
                                        <h2 className="text-xl font-semibold">Md. Faisal Rahman</h2>
                                        <p className="text-sm mb-1 ">Senior Steel Building Manager</p>
                                        <p className="flex md:w-[650px] mx-10  md:mx-auto text-sm md:text-[18px] mt-2"><MdFormatQuote className="rotate-180 text-2xl" /> Best wishes to SARK Steel for setting new benchmarks in the steel construction industry with quality and integrity. <MdFormatQuote className="text-2xl" /></p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="flex flex-col justify-center text-center md:max-w-[1050px] md:mx-auto text-white mx-10">
                                        <h2 className="text-xl font-semibold">Engr. Tanvir Ahmed</h2>
                                        <p className="text-sm mb-1 ">Project Director</p>
                                        <p className="flex md:w-[650px] mx-10  md:mx-auto text-sm md:text-[18px] mt-2"><MdFormatQuote className="rotate-180 text-2xl" /> May SARK Steel continue to shape the future of steel construction with innovation, reliability, and excellence.<MdFormatQuote className="text-2xl" /></p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="flex flex-col justify-center text-center md:max-w-[1050px] md:mx-auto mx-10 text-white">
                                        <h2 className="text-xl font-semibold">Md. Rakib Hasan</h2>
                                        <p className="text-sm mb-1 ">CEO</p>
                                        <p className="flex md:w-[650px] mx-10  md:mx-auto text-sm md:text-[18px] mt-2"><MdFormatQuote className="rotate-180 text-2xl" /> Wishing SARK Steel continued success in delivering top-quality steel structures that redefine excellence in the industry.<MdFormatQuote className="text-2xl" /></p>
                                    </div>
                                </SwiperSlide>
                                
                        </Swiper>
                        </main>
            </section>            
        </div>

        {/* blur color  */}
        <div className="absolute -mt-[230px] md:w-[300px] md:h-[300px] w-[250px] h-[250px] blur-[250px] bg-[var(--mainColor)] -z-10 opacity-80 right-0"></div>
        </div>
    );
};

export default BestWishers;