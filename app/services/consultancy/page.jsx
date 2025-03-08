
import Image from "next/image";
import img1 from "../../../public/imgs/6.png";
 import serviceImg from "../../../public/service-img/img6.png";
 import { BsArrowRightCircle } from "react-icons/bs";

 export const metadata = {
    title: "Sarkbd । Services"
  };

const Consultancy = () => {
    
    return (
        <main>
            <div>
                <Image src={img1} alt="image"/>
                <h2 className="md:text-[40px] font-semibold text-[28px] text-[var(--mainColor)] mt-5">Consultancy</h2>
                <p className="md:text-[18px] text-sm">Leverage industry-leading methodologies to deliver a comprehensive blueprint for structural excellence. Iterative advancements in engineering strategies cultivate collaborative insights, enhancing the overall structural integrity and cost efficiency. Organically scale a future-ready perspective on modern construction techniques through precision-driven innovation and expert consultancy.<br/><br/>

                Bring to the table strategic, high-performance solutions to ensure sustainable and resilient developments. At the end of the day, evolving trends in civil engineering are paving the way for streamlined, high-strength structures integrating both steel and reinforced concrete (RCC)</p>
            </div>

            <div>
                <Image src={serviceImg} className="mt-8 mb-5 w-full"  alt="image"/>
                
                <section className="md:text-[18px] text-sm mb-5">
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Those who overlook the art of engineering.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Face challenges that compromise stability.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Yet, those who embrace calculated design.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Discover resilience that stands the test of time.</li>
                </section>
            </div>
        </main>
    );
};

export default Consultancy;