import React from 'react';

const Footer = () => {
    return (
        <main>
            <footer className={"hidden md:block bg-[#FCB72B] relative"}>
                <img src="/images/element.png" className={"absolute bottom-0 w-[45px] left-2"} alt=""/>
                <div className={"max-w-[907px] py-[124px] mx-auto grid grid-cols-12"}>
                    <article className={"col-span-7"}>
                        <div className={"flex items-center space-x-3"}>
                            <div>
                                <p className={"text-[26px] rounded-full w-[41px] h-[41px] bg-white text-center text-[#FCB72B]"}>B</p>
                            </div>
                            <p className={"text-[24px] text-white"}>eBike</p>
                        </div>
                        <p className={"w-[62%] text-[18px] font-light text-white mt-[22px]"}>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                        <p className={"mt-[31px] text-[16px] font-light text-white "}>©eBike 2021. All rights reserved</p>
                    </article>

                    <article className={"col-start-9 col-end-10"}>
                        <h3 className={"text-[20px] font-bold text-white mb-6"}>Company</h3>
                        <div className={"text-white space-y-4"}>
                            <p>Product</p>
                            <p>Bike Type</p>
                            <p>About Us</p>
                            <p>Contact</p>
                        </div>
                    </article>

                    <article className={"col-start-11 col-end-13 "}>
                        <h3 className={"text-[20px] font-bold text-white mb-6"}>Help</h3>
                        <div className={" space-y-4 text-white"}>
                            <p>Help center</p>
                            <p>Contact support</p>
                            <p>Instructions</p>
                            <p>How it works</p>
                        </div>
                    </article>

                </div>
            </footer>

            {/*mobile*/}
            <footer className={"md:hidden bg-[#FCB72B] relative"}>
                <img src="/images/element.png" className={"absolute bottom-0 w-[45px] left-2"} alt=""/>
                <div className={"py-[80px] grid grid-cols-4"}>

                    <article className={"col-span-full text-center"}>
                        <h3 className={"text-[25px] font-bold text-white mb-6"}>Company</h3>
                        <div className={"text-white space-y-4"}>
                            <p>Product</p>
                            <p>Bike Type</p>
                            <p>About Us</p>
                            <p>Contact</p>
                        </div>
                    </article>

                    <article className={"col-span-full text-center mt-10"}>
                        <h3 className={"text-[25px] font-bold text-white mb-6"}>Help</h3>
                        <div className={" space-y-4 text-white"}>
                            <p>Help center</p>
                            <p>Contact support</p>
                            <p>Instructions</p>
                            <p>How it works</p>
                        </div>
                    </article>

                    <article className={"col-span-full text-center mt-10"}>
                        <div className={"flex justify-center items-center space-x-3"}>
                            <div>
                                <p className={"text-[26px] rounded-full w-[41px] h-[41px] bg-white text-center text-[#FCB72B]"}>B</p>
                            </div>
                            <p className={"text-[24px] text-white"}>eBike</p>
                        </div>
                        <p className={"text-[18px] font-light text-white mt-[20px]"}>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
                        <p className={"mt-[22px] text-[16px] font-light text-white "}>©eBike 2021. All rights reserved</p>
                    </article>


                </div>
            </footer>

        </main>
    );
};

export default Footer;