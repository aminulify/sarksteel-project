 import Image from "next/image";
 import img1 from "../../../public/imgs/11.png";
 import serviceImg from "../../../public/service-img/img5.png";
 import { BsArrowRightCircle } from "react-icons/bs";

const SteelBuildingSupply = () => {
    
    return (
        <main>
            <div>
                <Image src={img1} alt="image"/>
                <h2 className="md:text-[40px] font-semibold text-[28px] text-[var(--mainColor)] mt-5">Steel Building Supply</h2>
                <p className="md:text-[18px] text-sm">Harness cutting-edge manufacturing techniques to deliver premium steel structures with unmatched durability and precision. Continuous advancements in fabrication and material engineering drive cost-effective solutions, ensuring superior strength and performance. Seamlessly integrate innovative design and high-quality steel components for next-generation construction.<br/><br/>

                Provide industry-leading, high-performance steel building solutions for diverse applications. At the end of the day, modern construction demands efficient, sustainable, and structurally sound frameworks, where prefabricated and custom-engineered steel buildings redefine excellence.</p>
            </div>

            <div>
                <Image src={serviceImg} className="mt-8 mb-5 w-full"  alt="image"/>
                
                <section className="md:text-[18px] text-sm mb-5">
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Those who disregard the strength of steel.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Face limitations that hinder progress.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Yet, those who trust in superior fabrication.</li>
                    <li className="list-none flex gap-2 items-center pt-2"><BsArrowRightCircle className="text-[var(--mainColor)]"/> Build structures that endure for generations.</li>
                </section>
            </div>
        </main>
    );
};

export default SteelBuildingSupply;