import Image from 'next/image';
import logo from '../public/logo/logo.png';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
    return ( 
        <div className='fixed w-full z-10'>
            <header className='backdrop-blur-2xl bg-[#ffffffa4] py-3'>
            <div className="flex justify-between mx-auto items-center max-w-[1050px]">
            {/* left side  */}
                <div>
                    <Link href={"/"}><Image src={logo} height={60}/></Link>
                </div>
                {/* right side  */}
                <div>
                    <div className='uppercase list-none flex gap-3 text-[var(--secondaryColor)]'>
                        <li className='py-2 px-4 cursor-pointer'><Link href={"/"}>Home</Link></li>
                        <li className='py-2 px-4 flex items-center cursor-pointer serviceIcon'><Link href={"/"}>Services </Link><IoIosArrowDown className='icon'/></li>
                        <li className='py-2 px-4 cursor-pointer'><Link href={"/"}>About</Link></li>
                        <li className='py-2 px-4 cursor-pointer'><Link href={"/"}>Contact Us</Link></li>
                    </div>
                </div>
        </div>
        </header>
        </div>
    );
};

export default Navbar;