 import Image from "next/image";
 import img1 from "../../../public/imgs/10.png";
 import serviceImg from "../../../public/service-img/img3.png";
 import { BsArrowRightCircle } from "react-icons/bs";

const Erection = () => {
    
    return (
        <main>
            <div>
                <Image src={img1} alt="image"/>
                <h2 className="md:text-[40px] font-semibold text-[28px] text-[var(--mainColor)] mt-5">Erection</h2>
                <p className="md:text-[18px] text-sm">Implement cutting-edge erection techniques to seamlessly assemble high-strength steel and reinforced concrete structures. Leverage advanced engineering methods to ensure precise installation and maximum stability, enhancing overall structural integrity.<br/><br/>

                Deliver high-performance, safe, and efficient erection solutions for both steel and RCC components. At the end of the day, evolving construction methods streamline assembly processes, ensuring the creation of robust, long-lasting structures that meet modern engineering standards.</p>
            </div>

            <div>
                <Image src={serviceImg} className="mt-8 mb-5 w-full"  alt="image"/>
                
                <section className="md:text-[18px] text-sm mb-5">
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Those who overlook the intricacies of precise erection.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Face structural instability that jeopardizes safety.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Yet, those who embrace calculated installation methods.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Build foundations that withstand the test of time.</li>
                </section>
            </div>
        </main>
    );
};

export default Erection;