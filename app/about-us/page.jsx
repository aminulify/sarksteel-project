import Image from "next/image";
import img1 from "../../public/imgs/2.png";
import img2 from "../../public/imgs/3.png";
import img3 from "../../public/imgs/5.png";
import icon1 from "../../public/icons/mission.png";
import icon2 from "../../public/icons/vision.png";

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
                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-20 mb-10">
                    <aside>
                        <Image src={img1} alt="image"/>
                    </aside>
                    <aside>
                        <Image src={icon1} width={60} alt="Image" className="mb-1" />
                        <h2 className="text-[var(--textColor)] text-3xl">Our <span className="text-[var(--mainColor)] font-bold">Vision</span></h2>
                        <p className="text-[var(--textColor)]">Earning the trust of every customer by working honestly and transparently. We want to establish a company that everyone can blindly trust.</p>
                    </aside>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-20">
                    <aside>
                        <Image src={icon2} width={60} alt="Image" className="mb-1" />
                        <h2 className="text-[var(--textColor)] text-3xl">Our <span className="text-[var(--mainColor)] font-bold">Mission</span></h2>
                        <p className="text-[var(--textColor)] text-justify">We deliver premium steel structures with top-quality manufacturing, supply, and execution. Our mission is to drive growth and profit through customer satisfaction, as it fuels our existence, creativity, and future. Profit enables us to attract the best talent and services, ensuring excellence at SARK.</p>
                    </aside>

                    <aside>
                        <Image src={img2} alt="image"/>
                    </aside>
                    
                </div>
            </main>  

            {/* blur color  */}
            <div className="absolute md:w-[300px] md:h-[300px] w-[150px] h-[150px] blur-[200px] bg-[var(--mainColor)] -z-10 opacity-60 right-0 top-[900px]"></div>
        </section>
    );
};

export default AboutUs;