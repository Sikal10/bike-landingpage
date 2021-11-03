import React from 'react';
import {HiOutlineMenu } from "react-icons/hi";

const Header = () => {
    return (
        <main className={"md:relative sticky top-0 bg-gray-50 z-10"}>
            {/*desktop*/}
            <header>

                {/*laptop navigation*/}
                <nav className={"hidden md:flex flex items-center max-w-[907px] mx-auto pt-[56px] justify-between"}>
                    <img src="/images/logo.svg" className={"mt-[6px]"} alt=""/>

                    <div className={"flex space-x-7 mt-[14px] items-center"}>
                        <p className={"text-[#233348] text-[18px] font-bold"}>Product</p>
                        <p className={"text-[#7D7987] text-[18px] h-[23px]"}>Bike Type</p>
                        <p className={"text-[#7D7987] text-[18px] h-[23px]"}>About Us</p>
                        <p className={"text-[#7D7987] text-[18px] h-[23px]"}>Testimonials</p>
                        <p className={"text-[#7D7987] text-[18px] h-[23px]"}>Contact</p>
                    </div>
                </nav>
            </header>

            {/*mobile*/}
            <header className={"md:hidden shadow-md "}>
                {/*mobile navigation*/}
                <nav className={"md:hidden p-3 flex items-center justify-between"}>
                    <img src="/images/logo.svg" className={"mt-[6px]"} alt=""/>

                    <HiOutlineMenu className={"text-4xl"} />

                    <div className={"flex hidden space-x-7 mt-[14px] items-center"}>
                        <p className={"text-[#233348] text-[18px] font-bold"}>Product</p>
                        <p className={"text-[#7D7987] text-[18px] h-[23px]"}>Bike Type</p>
                        <p className={"text-[#7D7987] text-[18px] h-[23px]"}>About Us</p>
                        <p className={"text-[#7D7987] text-[18px] h-[23px]"}>Testimonials</p>
                        <p className={"text-[#7D7987] text-[18px] h-[23px]"}>Contact</p>
                    </div>
                </nav>


            </header>

        </main>
    );
};

export default Header;