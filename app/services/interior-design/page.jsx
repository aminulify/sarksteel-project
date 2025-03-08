 import Image from "next/image";
 import img1 from "../../../public/imgs/9.png";
 import serviceImg from "../../../public/service-img/img1.png";
 import { BsArrowRightCircle } from "react-icons/bs";

const InteriorDesign = () => {
    
    return (
        <main>
            <div>
                <Image src={img1} alt="image"/>
                <h2 className="md:text-[40px] font-semibold text-[28px] text-[var(--mainColor)] mt-5">Interior Design</h2>
                <p className="md:text-[18px] text-sm">Harness innovative design principles to create functional, aesthetically pleasing spaces that elevate the user experience. Employ a blend of creativity and strategic planning to ensure every element contributes to both beauty and efficiency.<br/><br/>

                
                Deliver tailored interior solutions that reflect the evolving trends in modern living and working environments. At the end of the day, expert interior design fosters harmonious spaces that inspire and adapt to the dynamic needs of their inhabitants.</p>
            </div>

            <div>
                <Image src={serviceImg} className="mt-8 mb-5 w-full"  alt="image"/>
                
                <section className="md:text-[18px] text-sm mb-5">
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Those who overlook the importance of thoughtful design.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Face spaces that lack harmony and function.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Yet, those who embrace creativity with purpose</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Craft environments that inspire and endure.</li>
                </section>
            </div>
        </main>
    );
};

export default InteriorDesign;