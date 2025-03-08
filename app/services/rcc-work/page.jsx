 import Image from "next/image";
 import img1 from "../../../public/imgs/8.png";
 import serviceImg from "../../../public/service-img/img2.png";
 import { BsArrowRightCircle } from "react-icons/bs";
 
 export const metadata = {
    title: "Sarkbd । Services"
  };

const Erection = () => {
    
    return (
        <main>
            <div>
                <Image src={img1} alt="image"/>
                <h2 className="md:text-[40px] font-semibold text-[28px] text-[var(--mainColor)] mt-5">RCC Work</h2>
                <p className="md:text-[18px] text-sm">Utilize advanced construction techniques to deliver high-strength reinforced concrete structures, ensuring durability and long-lasting performance. Through precise design and execution, enhance structural integrity while optimizing cost-efficiency.<br/><br/>

                
                Provide innovative RCC solutions that meet the evolving demands of modern construction. At the end of the day, cutting-edge methods in reinforced concrete are setting new standards for resilient, sustainable, and cost-effective building practices.</p>
            </div>

            <div>
                <Image src={serviceImg} className="mt-8 mb-5 w-full"  alt="image"/>
                
                <section className="md:text-[18px] text-sm mb-5">
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Those who overlook the power of reinforced concrete.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Face foundations that fail to endure.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Yet, those who embrace precision in RCC design.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Build structures that stand firm through time.</li>
                </section>
            </div>
        </main>
    );
};

export default Erection;