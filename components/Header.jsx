import React from 'react';
import {HiOutlineMenu } from "react-icons/hi";
import {FaTimes} from "react-icons/fa";
import Link from "next/link";

const Header = ({isOpen, toggleIcon}) => {
    return (
        <main className={"md:relative sticky top-0 bg-gray-50 z-10"}>
            {/*desktop*/}
            <header className={"hidden md:block"}>

                {/*laptop navigation*/}
                <nav className={"hidden md:flex flex items-center max-w-[907px] mx-auto pt-[40px] justify-between"}>
                    <img src="/images/logo.svg" className={"mt-[6px]"} alt=""/>

                    <div className={"flex space-x-7 mt-[14px] items-center"}>
                        <Link href={"#product"}><p className={"text-[#233348] font-mulish cursor-pointer text-[18px] font-bold"}>Product</p></Link>
                        <Link href="#bike-type"><p className={"text-[#7D7987] font-mulish cursor-pointer text-[18px] h-[23px]"}>Bike Type</p></Link>
                        <Link href={"#about"}><p className={"text-[#7D7987] font-mulish cursor-pointer text-[18px] h-[23px]"}>About Us</p></Link>
                        <Link href={"#testimonials"}><p className={"text-[#7D7987] font-mulish cursor-pointer text-[18px] h-[23px]"}>Testimonials</p></Link>
                        <Link href={"#contact"}><p className={"text-[#7D7987] font-mulish cursor-pointer text-[18px] h-[23px]"}>Contact</p></Link>
                    </div>
                </nav>
            </header>

            {/*mobile*/}
            <header className={"md:hidden shadow-md "}>
                {/*mobile navigation*/}
                <nav className={"md:hidden p-3 flex items-center justify-between"}>
                    <img src="/images/logo.svg" className={"mt-[6px]"} alt=""/>

                    {/*mobile-nav*/}
                    <div onClick={toggleIcon} className={"md:hidden text-3xl text-gray-400"}>{!isOpen && <HiOutlineMenu className={"text-4xl"} /> }</div>
                </nav>

                {/*overlay*/}
                <div onClick={toggleIcon} className={`md:hidden ${isOpen && "transition duration-300 ease-in h-[100vh] fixed overflow-hidden w-2/6 top-0 right-0 left-0 bottom-0 bg-black opacity-50"}`}/>

                {/*mobile-nav*/}
                <aside className={`md:hidden ${isOpen ? "absolute top-0 right-0 h-screen fixed w-4/6 bg-white space-y-3" : "hidden"}`}>
                    <p onClick={toggleIcon} className={"border-4 absolute right-[20px] top-[20px] font-light border-nosh_blue rounded-full border-opacity-30 w-[40px] h-[40px] px-[8px] pt-[8px]  text-center"}>
                        <FaTimes className={"text-md text-red-500"} />
                    </p>
                    <div className={"mt-[14px] items-center"}>
                        <Link href={"#"}><p className={"text-[#233348] font-mulish text-center mb-10 mt-[120px] text-[18px] font-bold"}>Product</p></Link>
                        <Link href="#bike-type"><p className={"text-[#7D7987] font-mulish text-center my-10 text-[18px] h-[23px]"}>Bike Type</p></Link>
                        <Link href={"#about"}><p className={"text-[#7D7987] font-mulish text-center my-10 text-[18px] h-[23px]"}>About Us</p></Link>
                        <Link href={"#testimonials"}><p className={"text-[#7D7987] font-mulish text-center my-10 text-[18px] h-[23px]"}>Testimonials</p></Link>
                        <Link href={"#contact"}><p className={"text-[#7D7987] font-mulish text-center cursor-pointer text-[18px] h-[23px]"}>Contact</p></Link>
                    </div>
                </aside>


            </header>

        </main>
    );
};

export default Header;