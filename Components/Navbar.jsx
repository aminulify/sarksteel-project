"use client";
import Image from 'next/image';
import logo from '../public/logo/logo.png';
import Link from 'next/link';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollTop = () =>{
        window.scrollTo(0,0);
    }
    return ( 
        <div className='fixed w-full z-10'>
            <header className='backdrop-blur-2xl bg-[#ffffffa4] py-3'>
            <div className="flex justify-between md:mx-auto items-center md:max-w-[1050px] mx-10">
            {/* left side  */}
                <div>
                    <Link href={"/"}><Image title="image" src={logo} height={60} alt='image'/></Link>
                </div>

                {/* mobile button  */}
                <button
                    className="lg:hidden text-2xl text-gray-80 cursor-pointer text-[var(--secondaryColor)] duration-300"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    {isMenuOpen ? <FiX className='text-3xl'/> : <FiMenu className='text-3xl'/>}
                </button>

                {/* right side  */}
                <div className='md:block lg:block hidden'>
                    <div className='uppercase list-none flex gap-3 text-[var(--secondaryColor)]'>
                        <li className='py-2 px-4 cursor-pointer hover:underline' onClick={handleScrollTop}><Link href={"/"}>Home</Link></li>
                        
                        {/* Services with Dropdown */}
                        <li
                        className="relative py-2 px-4 flex items-center cursor-pointer hover:underline"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                         onClick={handleScrollTop}>
                        <Link href="/services/consultancy">Services</Link>
                        <IoIosArrowDown className="ml-1" />

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <ul className="absolute left-0 mt-[280px] ml-[15px] w-56 backdrop-blur-2xl bg-[#ffffffa4] border border-gray-200 shadow-lg rounded-md">
                            {[
                                { name: "Consultancy", link: "/services/consultancy" },
                                { name: "Steel Building Supply", link: "/services/steel-building-supply" },
                                { name: "Fabrication", link: "/services/fabrication" },
                                { name: "Erection", link: "/services/erection" },
                                { name: "RCC Work", link: "/services/rcc-work" },
                                { name: "Interior Design", link: "/services/interior-design" },
                            ].map((service, index) => (
                                <li key={index} className="px-4 py-2 hover:bg-[var(--mainColor)] duration-300 rounded-md hover:text-white" onClick={handleScrollTop}>
                                <Link href={service.link}>{service.name}</Link>
                                </li>
                            ))}
                            </ul>
                        )}
                        </li>

                        <li className='py-2 px-4 cursor-pointer hover:underline'><Link href={"/about-us"} onClick={handleScrollTop}>About</Link></li>
                        <li className='py-2 px-4 cursor-pointer hover:underline' onClick={handleScrollTop}><Link href={"/contact-us"}>Contact Us</Link></li>
                    </div>
                </div>


                 {/* Mobile Menu (Hidden by default) */}
                    {isMenuOpen && (
                        <div className="lg:hidden md:hidden bg-white border-gray-200 fixed top-[85px] left-0 w-full">
                        <ul className="flex flex-col gap-3 py-4 px-6 text-gray-700">
                            <Link href="/" className="hover:bg-[var(--mainColor)] duration-300 py-2 w-full px-4 hover:text-white rounded-md cursor-pointer">
                            <li onClick={() => setIsMenuOpen(false)}>Home</li>
                            </Link>

                            {/* Services Dropdown for Mobile */}
                            <li className="hover:bg-[var(--mainColor)] duration-300 py-2 w-full px-4 hover:text-white rounded-md cursor-pointer">
                            <button
                                className="flex items-center justify-between w-full cursor-pointer"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            >
                                Services <IoIosArrowDown />
                            </button>
                            {isDropdownOpen && (
                                <ul className="bg-[var(--mainColor)] text-white rounded-md cursor-pointer">
                                {[
                                    { name: "Consultancy", link: "/services/consultancy" },
                                    { name: "Steel Building Supply", link: "/services/steel-building-supply" },
                                    { name: "Fabrication", link: "/services/fabrication" },
                                    { name: "Erection", link: "/services/erection" },
                                    { name: "RCC Work", link: "/services/rcc-work" },
                                    { name: "Interior Design", link: "/services/interior-design" },
                                ].map((service, index) => (
                                    <Link onClick={handleScrollTop} href={service.link} key={index} >
                                    <li className="hover:bg-white duration-300 py-2 w-full px-4 hover:text-[var(--mainColor)] rounded-md cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                                        {service.name}
                                    </li>
                                    </Link>
                                ))}
                                </ul>
                            )}
                            </li>

                            <Link href="/about-us" className="hover:bg-[var(--mainColor)] duration-300 py-2 w-full px-4 hover:text-white rounded-md cursor-pointer">
                            <li onClick={() => setIsMenuOpen(false)}>About</li>
                            </Link>

                            <Link href="/contact-us" className="hover:bg-[var(--mainColor)] duration-300 py-2 w-full px-4 hover:text-white rounded-md cursor-pointer">
                            <li onClick={() => setIsMenuOpen(false)}>Contact Us</li>
                            </Link>
                        </ul>
                        </div>
                    )}
        </div>
        </header>
        </div>
    );
};

export default Navbar;