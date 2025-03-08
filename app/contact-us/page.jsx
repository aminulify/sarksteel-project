import Image from "next/image";
import icon1 from "../../public/icons/contact-icon/phone-call.png";
import icon2 from "../../public/icons/contact-icon/website.png";
import icon3 from "../../public/icons/contact-icon/map.png";
import { BsSend } from "react-icons/bs";

export const metadata = {
    title: "SarkSteel । Contact Us"
}
const ContactUs = () => {
    return (
        <section>
            <div className='contact-heading-img flex items-center justify-center text-center' title="contact us image">
            <div className="grid place-items-center md:mt-8 mt-18">
            <h1 className="text-[32px] md:text-[42px] font-black text-white mx-10">Contact Us</h1>
            <p className="md:w-[500px] mx-12 text-center text-white md:text-xl">We have strong and experienced team member. We are ready to build your dream.</p>
            </div>
            </div>   

            <main className="md:max-w-[1250px] mx-auto">
                {/* blur color  */}
                <div className="absolute md:w-[300px] md:h-[300px] w-[200px] h-[200px] blur-[200px] bg-[var(--mainColor)] -z-10 opacity-60 -mt-20"></div>

                <div className="md:grid md:grid-cols-3 md:max-w-[1050px] md:mx-auto mx-10 pt-16 md:gap-18">
                    <aside className="col-span-1">
                        <p className="p-1 rounded-full text-[var(--mainColor)] border-[1.5px] w-[120px] flex justify-center text-sm font-semibold">Contact Us</p>
                        <h2 className="text-[32px] md:text-[40px] font-bold mt-1 text-[var(--textColor)]">Get In <span className="text-[var(--mainColor)]">Touch</span></h2>
                        <p className="text-[var(--secondaryColor)]">We’re here to assist you! Please reach out with any questions, feedback, or project inquiries.</p>

                        <div className="md:mt-10 mt-5 flex items-center gap-3">
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
                    </aside>

                    <aside className="col-span-2 px-8 pt-6 pb-8 rounded-xl md:rounded-3xl border-[1.5px] border-[var(--mainColor)] backdrop-blur-3xl md:mb-0 mb-16 md:mt-0 mt-10">
                        <h2 className="text-2xl font-semibold text-[var(--mainColor)] mb-3">Send Message</h2>

                        <label className="text-lg text-[var(--mainColor)]">Name</label>
                        <input type="text" className="py-2 w-full border-[1.5px] border-[var(--mainColor)] px-2 rounded-md" placeholder="Enter your name" />

                        <div className="my-3 md:flex gap-5 items-center">
                            <div className="mb-3 md:mb-0">
                                <label className="text-lg text-[var(--mainColor)]">Email</label>
                                <input type="email" className="py-2 w-full border-[1.5px] border-[var(--mainColor)] px-2 rounded-md" placeholder="example@gmail.com"/>
                            </div>
                            <div>
                                <label className="text-lg text-[var(--mainColor)] md:mt-0">Contact</label>
                                <input type="text" className="py-2 w-full border-[1.5px] border-[var(--mainColor)] px-2 rounded-md" placeholder="+880 XXXX- XXX-XXX"/>
                            </div>
                        </div>

                        <div>
                            <label className="text-lg text-[var(--mainColor)]">Message</label>
                            <textarea name="message" rows={5} className="w-full border-[1.5px] border-[var(--mainColor)] px-2 rounded-md py-1" placeholder="Message write here..."></textarea>
                        </div>

                        <button className="py-3 px-6 text-white bg-[var(--mainColor)] mt-6 rounded-md flex items-center gap-1 hover:gap-2 duration-300 cursor-pointer hover:bg-[var(--secondaryColor)]">Send Message <BsSend className="text-lg"/></button>
                    </aside>
                </div>

                    {/* blur color  */}
                    <div className="absolute md:w-[300px] md:h-[300px] w-[200px] h-[200px] blur-[200px] bg-[var(--mainColor)] -z-10 opacity-60 right-0 -mt-20"></div>
            </main>  
        </section>
    );
};

export default ContactUs;