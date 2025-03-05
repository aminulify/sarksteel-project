import Image from "next/image";
import phone from "../public/icons/phone-call.png";
import address from "../public/icons/map.png";
import website from "../public/icons/earth.png";

const Footer = () => {
    return (
        <section className="md:mt-36 mt-0 relative">
            <header className="md:flex hidden w-[650px] mx-auto">

                <div className="absolute -top-16 rounded-2xl bg-[var(--mainColor)] py-5 px-10 text-white flex gap-5">

                    <div className="w-58 flex-1">
                        <Image src={address} width={35} alt="icon" />
                        <h2 className="text-xl font-semibold">Address</h2>
                        <p className="text-sm">House 53, Road 9, DIT Project, Merul Badda, Dhaka North, Dhaka.</p>
                    </div>
                   
                    <div className="">
                        <Image src={phone} width={35} alt="icon" />
                        <h2 className="text-xl font-semibold">Phone</h2>
                        <p className="text-sm">01712500921</p>
                    </div>
                    
                    <div className="">
                        <Image src={website} width={35} alt="icon" />
                        <h2 className="text-xl font-semibold">Website</h2>
                        <div>
                            <p className="text-sm">steelsark@gmail.com</p>
                            <p className="text-sm">www.sarkbd.com</p>
                        </div>
                    </div>
                </div>

            </header>

            <div className="w-full bg-[var(--textColor)] h-[200px]">
                <section className="md:max-w-[1050px] md:mx-auto mx-10">

                </section>
            </div>
        </section>
    );
};

export default Footer;