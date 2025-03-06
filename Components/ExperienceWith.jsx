import Image from "next/image";
import imgStyle from "../public/logo/heading-style.png";
import logo1 from "../public/logo/logo2.png";
import logo2 from "../public/logo/logo3.png";
import logo3 from "../public/logo/logo4.png";

const ExperienceWith = () => {
    return (
        <div className="py-8 md:mx-auto overflow-hidden">

            <div className="flex justify-center md:ml-54 ml-40 -z-10">
                <Image title="image" src={imgStyle} alt="Stylist Heading Image" width={100} className="absolute"/>
            </div>
            <h1 className="mt-8 text-[30px] md:text-[40px] text-center text-[var(--secondaryColor)]">Experience <span className="font-bold text-[var(--mainColor)]">With</span></h1>

            {/* logo infinite loading  */}
            <div className="logos md:my-4 my-2">
            <div className="flex items-center max-w-[1050px] gap-10 my-10 logo-slide mx-18">
                <Image title="image" src={logo3} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image title="image" src={logo1} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image title="image" src={logo2} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image title="image" src={logo3} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image title="image" src={logo1} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image title="image" src={logo2} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image title="image" src={logo3} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image title="image" src={logo1} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image title="image" src={logo2} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image title="image" src={logo3} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image title="image" src={logo1} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image title="image" src={logo2} className="mix-blend-multiply" width={150} alt="logo image" />
                
            </div>
            </div>
        </div>
    );
};

export default ExperienceWith;