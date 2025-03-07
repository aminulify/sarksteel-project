import Link from "next/link";
import { BsFiletypePdf } from "react-icons/bs";
import icon1 from "../../public/icons/contact-icon/phone-call.png";
import icon2 from "../../public/icons/contact-icon/website.png";
import icon3 from "../../public/icons/contact-icon/map.png";
import Image from "next/image";

// export const metadata = {
//     title: "Sarkbd । Services",
//     description: "Sarkbd company services consultancy, steel building, rcc work, interior.",
// }

export default function Services({children}){
    return(
        <header className="">
           
            <div className='service-heading-img flex items-center justify-center text-center' title="our services image">
                <div className="grid place-items-center mt-8">
                <h1 className="text-[32px] md:text-[42px] font-black text-white mx-10">Our Services</h1>
                <p className="md:w-[500px] mx-12 text-center text-white md:text-xl">We have strong and experienced team member. We are ready to build your dream.</p>
                </div>
            </div>

            <main className="my-10 md:grid md:grid-cols-3 gap-10 md:max-w-[1050px] md:mx-auto mx-10">
                    {/* left side  */}
                    <aside className="col-span-1">
                        <section className="px-8 pt-5 pb-8 bg-slate-100 rounded-lg border-[1.5px] border-slate-200 m-[1.5px]">
                            <h2 className="text-[32px] font-bold text-[var(--mainColor)] text-center">Services</h2>
                            
                            <div className="mt-5 flex flex-col gap-2">
                                <Link href={'/services/consultancy'}><p className="px-4 py-2 w-full bg-[var(--mainColor)] text-white rounded-md hover:bg-[var(--mainColor)] hover:text-white duration-300">Consultancy</p></Link>
                                <Link className=" w-full bg-white" href={'/services/steel-building-supply'}><p className="px-4 py-2 w-full bg-white rounded-md hover:bg-[var(--mainColor)] hover:text-white duration-300">Steel Building Supply</p></Link>
                                <Link className=" w-full bg-white" href={'/services/fabrication'}><p className="px-4 py-2 w-full bg-white rounded-md hover:bg-[var(--mainColor)] hover:text-white duration-300">Fabrication</p></Link>
                                <Link className=" w-full bg-white" href={'/services/erection'}><p className="px-4 py-2 w-full bg-white rounded-md hover:bg-[var(--mainColor)] hover:text-white duration-300">Erection</p></Link>
                                <Link className=" w-full bg-white" href={'/services/rcc-work'}><p className="px-4 py-2 w-full bg-white rounded-md hover:bg-[var(--mainColor)] hover:text-white duration-300">Rcc Work</p></Link>
                                <Link className=" w-full bg-white" href={'/services/interior-design'}><p className="px-4 py-2 w-full bg-white rounded-md hover:bg-[var(--mainColor)] hover:text-white duration-300">Interior Design</p></Link>
                            </div>
                        </section>

                        <Link href={'/'} className="flex items-center gap-1 text-lg py-3 w-full justify-center md:mt-10 mt-6  rounded-lg text-[var(--mainColor)] border-[1.5px] border-[var(--mainColor)] m-[1.5px] hover:border-black hover:text-black duration-300"><BsFiletypePdf className="text-2xl"/> Download Our Brochure</Link>


                        <section className="mt-5 md:block hidden">
                            
                            <h2 className="text-[32px] font-bold text-[var(--textColor)]">Get In <span className="text-[var(--mainColor)]">Touch</span></h2>
                            <p className="text-[var(--secondaryColor)]">We’re here to assist you! Please reach out with any questions, feedback, or project inquiries.</p>
    
                            <div className="mt-5 flex items-center gap-3">
                                <div>
                                    <Image title="image" src={icon1} width={40} alt="social image"/>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-[var(--mainColor)] text-2xl">Phone</h2>
                                    <p className="text-[var(--secondaryColor)]">01712-500-921</p>
                                </div>
                            </div>
    
                            <div className="flex items-center gap-3 mt-4">
                                <div>
                                    <Image title="image" src={icon2} width={40} alt="social image"/>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-[var(--mainColor)] text-2xl">Website</h2>
                                    <p className="text-[var(--secondaryColor)]">steelsark@gmail.com</p>
                                    <p className="text-[var(--secondaryColor)]">www.sarkbd.com</p>
                                </div>
                            </div>
    
                            <div className="flex items-center gap-3 mt-4">
                                <div>
                                    <Image title="image" src={icon3} width={60} alt="social image"/>
                                </div>
                                <div>
                                    <h2 className="font-semibold text-[var(--mainColor)] text-2xl">Address</h2>
                                    <p className="text-[var(--secondaryColor)]">House 53, Road 9, DIT Project,
                                    Merul Badda, Dhaka North, Dhaka.</p>
                                    
                                </div>
                            </div>
                        </section>
                    </aside>

                    {/* right side  */}
                    <aside className="col-span-2">
                        {children}
                    </aside>
                </main>
            
        </header>
    )
}