import Image from "next/image";
import imgStyle from "../public/logo/heading-style.png";
import logo1 from "../public/logo/logo2.png";
import logo2 from "../public/logo/logo3.png";
import logo3 from "../public/logo/logo4.png";

const ExperienceWith = () => {
    return (
        <div className="py-8 md:mx-auto overflow-hidden">
            { /* blur color  */  }
            <div className="absolute md:w-[200px] md:h-[200px] w-[150px] h-[150px] blur-[150px] bg-[var(--mainColor)] -z-10 opacity-30"></div>

            <div className="flex justify-center md:ml-54 ml-48 -z-10">
                <Image src={imgStyle} alt="Stylist Heading Image" width={100} className="absolute"/>
            </div>
            <h1 className="mt-8 text-[35px] md:text-[40px] text-center text-[var(--secondaryColor)]">Experience <span className="font-bold text-[var(--mainColor)]">With</span></h1>

            {/* logo infinite loading  */}
            <div className="logos md:my-4 my-2">
            <div className="flex items-center max-w-[1150px] gap-10 my-10 logo-slide mx-18">
                <Image src={logo3} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image src={logo1} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image src={logo2} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image src={logo3} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image src={logo1} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image src={logo2} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image src={logo3} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image src={logo1} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image src={logo2} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image src={logo3} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image src={logo1} className="mix-blend-multiply" width={150} alt="logo image" />
                <Image src={logo2} className="mix-blend-multiply" width={150} alt="logo image" />
                
            </div>
            </div>
        </div>
    );
};

export default ExperienceWith;