 import Image from "next/image";
 import img1 from "../../../public/imgs/7.png";
 import serviceImg from "../../../public/service-img/img4.png";
 import { BsArrowRightCircle } from "react-icons/bs";

const Fabrication = () => {
    
    return (
        <main>
            <div>
                <Image src={img1} alt="image"/>
                <h2 className="md:text-[40px] font-semibold text-[28px] text-[var(--mainColor)] mt-5">Fabrication</h2>
                <p className="md:text-[18px] text-sm">Utilize state-of-the-art manufacturing techniques to produce high-precision steel components, ensuring superior strength and durability. Advanced fabrication processes enhance structural integrity while optimizing cost efficiency and installation speed.<br/><br/>

                Deliver cutting-edge, high-performance steel fabrication solutions tailored to modern construction demands. At the end of the day, precision engineering and expert craftsmanship pave the way for resilient, long-lasting steel structures.</p>
            </div>

            <div>
                <Image src={serviceImg} className="mt-8 mb-5 w-full"  alt="image"/>
                
                <section className="md:text-[18px] text-sm mb-5">
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Those who neglect the science of fabrication.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Face weaknesses that limit durability.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Yet, those who embrace precision and expertise.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Create structures that stand the test of time.</li>
                </section>
            </div>
        </main>
    );
};

export default Fabrication;