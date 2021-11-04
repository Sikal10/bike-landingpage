import React, {useEffect, useRef} from 'react';
import {MdOutlineSearch} from "react-icons/md";
import lottie from "lottie-web";

const Hero = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require("../lotties/header.json")
        });
    }, [])


    return (
        <main className={"relative"}>
            <img src="/images/Group 10.svg"
                 className={"ml-3 absolute mt-5 -top-24 right-0 left-0 bottom-0"}
                 alt=""/>

            <div className={"md:max-w-[907px] mt-28 mb-[80px] relative mx-auto grid grid-cols-4 md:grid-cols-12"}>
                {/*text*/}
                <section className={"order-2 md:order-1 col-span-4 md:col-span-6"}>
                    <div className={""}>
                        <h3 className={"hidden md:block font-mulish text-[#233348] col-start-1 col-end-3 md:text-[48px] font-bold md:leading-[56px]"}>Your
                            Bike <br/> <span>Electric Update</span>
                        </h3>

                        {/*Visible on mobile only*/}
                        <h3 className={"md:hidden font-mulish text-center mt-[40px] mb-[30px] text-[#233348] leading-[40px]  text-[35px] font-semibold"}>
                           Your Bike Electric Update
                        </h3>

                        <p className={"text-[21px] font-mulish px-5 md:px-0 text-center md:text-left mt-[14px] md:mt-[24px] text-[#7D7987] md:w-[95%]"}>Dummy text progressive, and
                            affordable
                            healthcare, accessible on mobile and online for everyone
                        </p>

                        <div
                            className={"border border-[#C2CFE0] bg-transparent group h-[56px] mt-[24px] md:mt-[49px] rounded-full px-2 flex items-center mx-5 md:mx-0 md:w-[93%]"}>
                            <MdOutlineSearch className={"w-[20px] text-[#C2CFE0] h-[20px]"}/>
                            <input type="text" className={"flex-1 font-mulish text-gray-500 h-full bg-gray-50 outline-none border-none text-[14px] ml-2"}
                                   placeholder={"Search Bike or anything"}/>
                            <button className={"bg-[#FFBD37] w-[109px] h-[40px] rounded-full font-mulish"}>Find</button>
                        </div>
                    </div>
                </section>

                {/*image*/}
                <section className={"order-1 md:order-2 col-span-6"}>
                    <div className={"md:h-[73%] h-full"} ref={containerRef}/>
                </section>
            </div>
        </main>
    );
};

export default Hero;