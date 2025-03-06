import Image from "next/image";
import img1 from "../../public/imgs/2.png";
import img2 from "../../public/imgs/3.png";
import img3 from "../../public/imgs/5.png";
import icon1 from "../../public/icons/mission.png";
import icon2 from "../../public/icons/vision.png";
import imgStyle from "../../public/logo/heading-style.png";
import aboutImg from "../../public/imgs/6.png";
import BestWishers from "@/Components/BestWishers";

export const metadata = {
    title: "Sarkbd । About"
}

const AboutUs = () => {
    return (
        <section>
            <div className='about-heading-img flex items-center justify-center text-center' title="about us background image">
                <div className="grid place-items-center mt-8">
                <h1 className="text-[32px] md:text-[42px] font-black text-white mx-10">About Us</h1>
                <p className="md:w-[500px] mx-12 text-center text-white md:text-xl">We have strong and experienced team member. We are ready to build your dream.</p>
                </div>
            </div>  

            {/* blur color  */}
            <div className="absolute md:w-[300px] md:h-[300px] w-[150px] h-[150px] blur-[200px] bg-[var(--mainColor)] -z-10 opacity-60"></div>

            <main className="md:max-w-[1050px] md:mx-auto mx-10 my-20">
                <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10 mb-10">
                    <aside>
                        <Image src={img1} alt="image"/>
                    </aside>
                    <aside>
                        <Image src={icon1} width={60} alt="Image" className="mb-1" />
                        <h2 className="text-[var(--textColor)] text-3xl">Our <span className="text-[var(--mainColor)] font-bold">Vision</span></h2>
                        <p className="text-[var(--textColor)]">Earning the trust of every customer by working honestly and transparently. We want to establish a company that everyone can blindly trust.</p>
                    </aside>
                </div>

                <div className="md:grid flex flex-col-reverse md:grid-cols-2 items-center md:gap-20 gap-10">
                    <aside>
                        <Image src={icon2} width={60} alt="Image" className="mb-1" />
                        <h2 className="text-[var(--textColor)] text-3xl">Our <span className="text-[var(--mainColor)] font-bold">Mission</span></h2>
                        <p className="text-[var(--textColor)] text-justify">We deliver premium steel structures with top-quality manufacturing, supply, and execution. Our mission is to drive growth and profit through customer satisfaction, as it fuels our existence, creativity, and future. Profit enables us to attract the best talent and services, ensuring excellence at SARK.</p>
                    </aside>

                    <aside>
                        <Image src={img2} alt="image"/>
                    </aside>
                    
                </div>

                {/* our strength  */}
                {/* our strength  */}
                {/* our strength  */}

                <div className="mt-20">
                    <div className="flex justify-center md:ml-30 ml-18 -z-10">
                        <Image title="image" alt="style image" src={imgStyle} width={85} className="absolute"/>
                    </div>
                    <h1 className="mt-7 text-[30px] md:text-[40px] text-center text-[var(--secondaryColor)]">Our <span className="font-bold text-[var(--mainColor)]">Strength</span></h1>
    
                    <div className="flex justify-center"><p className=" text-center text-[var(--textColor)] md:w-[700px] w-full md:text-lg text-sm">SARK Steel specializes in manufacturing, supplying, and executing premium-quality steel structures tailored to diverse industrial needs.</p></div>
                </div> 

                <section className="my-10 grid md:grid-cols-2 grid-cols-1 items-center">
                    <div className="mb-10 md:mb-0">
                        <Image title="image" alt="image" src={aboutImg} width={430}/>
                    </div>
                    <div>
                        <h1 className="md:leading-10 leading-9 text-[secondaryColor] text-[28px] md:text-[35px] font-bold">A company involved in <span className="text-[var(--mainColor)]">service, maintenance</span></h1>
                        <p className="text-[var(--textColor)] my-4 text-md md:text-lg text-justify">Led by a dedicated and visionary CEO, SARK Steel Building Company thrives on precision, trust, and excellence. He personally connects with each client, understands their needs, oversees every project, and ensures top-quality execution. His hands-on leadership guarantees customer satisfaction, making SARK a name synonymous with strength and reliability in steel construction.</p>
                        <div>
    
                        <p className="signature text-5xl md:text-6xl text-[var(--mainColor)]">Rajib</p>
                        <p className="font-semibold text-[var(--secondaryColor)] text-xl md:text-2xl">Monirul Islam Razib</p>
                        <p className="text-[var(--mainColor)] font-medium text-[14px] md:text-[16px]">Founder & CEO</p>
                    </div>
                    </div>
                
                </section>


            </main>  

            <BestWishers />

            {/* blur color  */}
            <div className="absolute md:w-[300px] md:h-[300px] w-[150px] h-[150px] blur-[200px] bg-[var(--mainColor)] -z-10 opacity-60 right-0 top-[900px]"></div>
            {/* blur color  */}
            <div className="absolute md:w-[300px] md:h-[300px] w-[150px] h-[150px] blur-[200px] bg-[var(--mainColor)] -z-10 opacity-60 top-[1350px]"></div>
            {/* blur color  */}
            <div className="absolute md:w-[300px] md:h-[300px] w-[150px] h-[150px] blur-[200px] bg-[var(--mainColor)] -z-10 opacity-60 top-[1850px] right-0"></div>
        </section>
    );
};

export default AboutUs;