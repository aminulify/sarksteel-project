import Image from "next/image";
import imgStyle from "../public/logo/heading-style.png";
import img1 from "../public/imgs/1.png";
import { FaArrowRight } from "react-icons/fa6";


const AboutUs = () => {
    return (
        <div className="mt-10 max-w-[1150px] mx-auto">

            {/* blur color  */}
            <div className="absolute md:w-[200px] md:h-[200px] w-[150px] h-[150px] blur-[150px] bg-[var(--mainColor)] -z-10"></div>

            {/* heading section  */}
            <div className="">
                <div className="flex justify-center md:ml-30 ml-28 -z-10">
                    <Image src={imgStyle} width={85} className="absolute"/>
                </div>
                <h1 className="mt-7 text-[35px] md:text-[40px] text-center text-[var(--secondaryColor)]">About <span className="font-bold text-[var(--mainColor)]">Us</span></h1>

                <div className="flex justify-center"><p className="mx-10 text-center text-[var(--textColor)] w-[700px] md:text-lg">SARK Steel specializes in manufacturing, supplying, and executing premium-quality steel structures tailored to diverse industrial needs.</p></div>
            </div> 

            {/* main section */}
            {/* ************  */}
            <section className="my-10 md:mx-24 mx-10 grid md:grid-cols-2 grid-cols-1 items-center">
                <div className="mb-10 md:mb-0">
                    <Image src={img1} width={430}/>
                </div>
                <div>
                    <h1 className="leading-10 text-[secondaryColor] text-[30px] md:text-[35px] font-bold">A company involved in <span className="text-[var(--mainColor)]">service, maintenance</span></h1>
                    <p className="text-[var(--textColor)] my-4 text-md md:text-lg">Led by a dedicated and visionary CEO, SARK Steel Building Company thrives on precision, trust, and excellence. He personally connects with each client, understands their needs, oversees every project, and ensures top-quality execution. His hands-on leadership guarantees customer satisfaction, making SARK a name synonymous with strength and reliability in steel construction.</p>
                    <div>

                    <p className="signature text-5xl md:text-6xl text-[var(--mainColor)]">Rajib</p>
                    <p className="font-semibold text-[var(--secondaryColor)] text-xl md:text-2xl">Monirul Islam Razib</p>
                    <p className="text-[var(--mainColor)] font-medium text-[14px] md:text-[16px]">Founder & CEO</p>
                </div>
                </div>
            
            </section>

            <div className="pb-10 flex justify-center items-center"><button className="flex items-center text-lg py-2 px-8 gap-1 hover:gap-3 duration-300 bg-[var(--mainColor)] text-white rounded-full cursor-pointer">About More <FaArrowRight/></button></div>

            {/* blur color  */}
            <div className="absolute right-0 top-[1250px] md:top-[950px] md:w-[200px] md:h-[200px] w-[150px] h-[150px] blur-[150px] bg-[var(--mainColor)] -z-10"></div>
        </div>
    );
};

export default AboutUs;