import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='headerImg flex items-center justify-center text-center'>
            <div className="grid place-items-center mt-4">
            <h1 className="text-[28px] md:text-[42px] font-black text-white mx-10">SARK STEEL & CONSTRUCTION</h1>
            <p className="md:w-[500px] mx-12 text-center text-white md:text-xl">Your Trust and support can help us to build a Successful and Reliable Company</p>
            <Link href={'/services/consultancy'} className="flex gap-1 items-center text-white py-2 px-8 mt-6 border-2 border-white rounded-full duration-300 hover:gap-3 md:text-lg hover:backdrop-blur-xs cursor-pointer">Read More <FaArrowRight/></Link>
            </div>
        </div>
    );
};

export default Header;