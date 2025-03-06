import Image from "next/image";
import imgStyle from "../public/logo/heading-style.png";
import icon1 from "../public/icons/1.png";
import icon2 from "../public/icons/2.png";
import icon3 from "../public/icons/3.png";
import icon4 from "../public/icons/4.png";
import icon5 from "../public/icons/5.png";
import icon6 from "../public/icons/6.png";

const OurServices = () => {
    return (
        <div className="max-w-[1250px] mx-auto">

            { /* blur color  */  }
            <div className="absolute md:w-[200px] md:h-[200px] w-[150px] h-[150px] blur-[250px] bg-[var(--mainColor)] -z-10 mt-26 opacity-80"></div>

            <header className="mb-10">
                <div className="flex justify-center md:ml-30 ml-28 -z-10">
                    <Image title="image" src={imgStyle} alt="heading decoration image" width={85} className="absolute"/>
                </div>
                <h1 className="mt-7 text-[30px] md:text-[40px] text-center text-[var(--secondaryColor)]">Our <span className="font-bold text-[var(--mainColor)]">Services</span></h1>
                
                <div className="flex justify-center"><p className="mx-10 text-center text-[var(--textColor)] w-[700px] md:text-lg text-sm">Delivering high-quality steel solutions with precision, reliability, and innovation to meet diverse industrial and commercial needs.</p></div>
            </header>

            <main className="max-w-[1050px] md:mx-auto mx-10 grid md:grid-cols-3 grid-cols-1 gap-5 services">
                <div className="p-5 border-[1.5px] rounded-[12px] backdrop-blur-2xl bg-[#ffffff99] border-[var(--mainColor)] py-8">
                    <Image title="image" src={icon1} width={70} alt="services icon" />
                    <h1 className="font-semibold text-xl pt-2 text-[var(--mainColor)]">Consultancy</h1>
                    <p className="text-[var(--textColor)]">Expert guidance for structural excellence and cost-efficient construction solutions.</p>
                </div>
                <div className="p-5 border-[1.5px] rounded-[12px] backdrop-blur-2xl bg-[#ffffff99] border-[var(--mainColor)] py-8">
                    <Image title="image" src={icon2} width={70} alt="services icon" />
                    <h1 className="font-semibold text-xl pt-2 text-[var(--mainColor)]">Steel Building Supply</h1>
                    <p className="text-[var(--textColor)]">High-quality materials for durable and reliable steel structures.</p>
                </div>
                <div className="p-5 border-[1.5px] rounded-[12px] backdrop-blur-2xl bg-[#ffffff99] border-[var(--mainColor)] py-8">
                    <Image title="image" src={icon3} width={70} alt="services icon" />
                    <h1 className="font-semibold text-xl pt-2 text-[var(--mainColor)]">Fabrication</h1>
                    <p className="text-[var(--textColor)]">Precision-engineered steel components ensuring strength and longevity.</p>
                </div>
                <div className="p-5 border-[1.5px] rounded-[12px] backdrop-blur-2xl bg-[#ffffff99] border-[var(--mainColor)] py-8">
                    <Image title="image" src={icon4} width={72} alt="services icon" />
                    <h1 className="font-semibold text-xl pt-2 text-[var(--mainColor)]">Erection</h1>
                    <p className="text-[var(--textColor)]">Safe and efficient installation of steel and RCC structures.</p>
                </div>
                <div className="p-5 border-[1.5px] rounded-[12px] backdrop-blur-2xl bg-[#ffffff99] border-[var(--mainColor)] py-8">
                    <Image title="image" src={icon5} width={95} alt="services icon" />
                    <h1 className="font-semibold text-xl pt-2 text-[var(--mainColor)]">Rcc Work</h1>
                    <p className="text-[var(--textColor)]">Reinforced concrete solutions for strong, stable, and lasting foundations.</p>
                </div>
                <div className="p-5 border-[1.5px] rounded-[12px] backdrop-blur-2xl bg-[#ffffff99] border-[var(--mainColor)] py-8">
                    <Image title="image" src={icon6} width={70} alt="services icon" />
                    <h1 className="font-semibold text-xl pt-2 text-[var(--mainColor)]">Interior Design</h1>
                    <p className="text-[var(--textColor)]">Creative & functional space planning for aesthetic and practical environments.</p>
                </div>
            </main>

            { /* blur color  */  }
            <div className="absolute md:w-[200px] md:h-[200px] w-[150px] h-[150px] blur-[250px] bg-[var(--mainColor)] -z-10 right-0 -mt-24 opacity-80"></div>
        </div>
    );
};

export default OurServices;