import Image from "next/image";
import phone from "../public/icons/phone-call.png";
import address from "../public/icons/map.png";
import website from "../public/icons/earth.png";
import logoWhite from "../public/logo/logo-w.png";
import Link from "next/link";
import fb from "../public/icons/social1.png";
import instra from "../public/icons/social2.png";
import whatsapp from "../public/icons/social3.png";

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

            <div className="w-full bg-[var(--textColor)] pb-10">
                <section className="md:max-w-[1050px] md:mx-auto mx-10 text-white">
                    <div className="md:pt-28 pt-10 flex flex-col md:flex-row  justify-between">
                        <div className="md:w-[300px]">
                            <Image src={logoWhite} alt="logo white color" width={100} />
                            <p className="mt-4 text-sm">Reliable, durable, and innovative steel solutions ensuring long-term partnerships, quality, and industry-leading expertise.</p>
                        </div>
                        <div>
                            <h2 className="font-semibold text-xl md:mt-0 mt-5">Navbar</h2>
                            <div className="flex flex-col pt-1">
                                <Link className="underline" href={'about-us'}>About Us</Link>
                                <Link className="underline" href={'services'}>Services</Link>
                                <Link className="underline" href={'contact-us'}>Contact Us</Link>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-semibold text-xl md:mt-0 mt-5">Services</h2>
                            <div className="flex flex-col pt-1">
                                <Link href={'service-consultancy'}>Consultancy</Link>
                                <Link href={'service-steel-building-supply'}>Steel Building</Link>
                                <Link href={'service-rcc-work'}>Rcc Work</Link>
                                <Link href={'service-interior-design'}>Interior Design</Link>
                            </div>
                        </div>
                        <div>
                        <h2 className="font-semibold text-xl md:mt-0 mt-5">Follow Our</h2>
                        <div className="flex gap-2 pt-3">
                            <Link href={'/'}><Image src={fb} width={30} alt="social image"/></Link>
                            <Link href={'/'}><Image src={instra} width={30} alt="social image"/></Link>
                            <Link href={'/'}><Image src={whatsapp} width={30} alt="social image"/></Link>
                        </div>
                        </div>
                    </div>
                </section>

            </div>
            <p className="py-1 md:text-sm text-[14px] bg-[var(--mainColor)] text-white text-center">&copy; Copyright 2025 All Rights Reserved - Sarkbd.com</p>
        </section>
    );
};

export default Footer;