import React from 'react';
import {CgArrowRight, CgArrowLeft} from "react-icons/cg";

const Bike = () => {
    return (
        <main>
            <section id={"#product"} className={"hidden md:block relative mb-[105px] bg-gray-50"}>
                <img src="/images/Vector (1).png" className={"absolute w-[500px] top-7 right-0 left-0 bottom-0"} alt=""/>

                <div className={" mx-auto relative"}>
                    <div className={"mt-12 justify-end space-x-7 flex items-center"}>
                        {/*card1*/}
                        <section className={"py-4 px-7 w-[382.2px] h-[375.23px] rounded-2xl bg-white shadow-lg"}>
                            <h2 className={"text-[20px] font-mulish text-[#233348] font-bold"}>Universal eBike Kit</h2>
                            <img src="/images/brampton.png" className={"w-[199px] object-contain h-[229px] block mx-auto"}
                                 alt=""/>
                            <hr className={"bg-[#C2CFE0] border"}/>
                            <p className={"text-[#7D7987] font-mulish mt-2 text-[16px]"}>Price</p>
                            <div className={"flex items-center justify-between"}>
                                <p className={"text-[20px] font-mulish text-[#233348] font-bold"}>$750.00</p>
                                <button className={"bg-[#FFBD37] font-mulish w-[109px] h-[40px] rounded-full"}>Order</button>
                            </div>
                        </section>

                        {/*card2*/}
                        <section className={"py-4 px-7 w-[382.2px] h-[375.23px] rounded-2xl bg-white shadow-lg"}>
                            <h2 className={"text-[20px] text-[#233348] font-mulish font-bold"}>Universal eBike Kit</h2>
                            <img src="/images/brampton.png" className={"w-[199px] object-contain h-[229px] block mx-auto"}
                                 alt=""/>
                            <hr className={"bg-[#C2CFE0] border"}/>
                            <p className={"text-[#7D7987] font-mulish mt-2 text-[16px]"}>Price</p>
                            <div className={"flex items-center font-mulish justify-between"}>
                                <p className={"text-[20px] text-[#233348] font-mulish font-bold"}>$750.00</p>
                                <button className={"bg-[#FFBD37] w-[109px] font-mulish h-[40px] rounded-full"}>Order</button>
                            </div>
                        </section>

                        {/*card3*/}
                        <section className={"py-4 opacity-25 px-7 w-[382.2px] h-[375.23px] rounded-2xl bg-white shadow-lg"}>
                            <h2 className={"text-[20px] text-[#233348]  font-mulish font-bold"}>Universal eBike Kit</h2>
                            <img src="/images/brampton.png" className={"w-[199px] object-contain h-[229px] block mx-auto"}
                                 alt=""/>
                            <hr className={"bg-[#C2CFE0] border"}/>
                            <p className={"text-[#7D7987] font-mulish mt-2 text-[16px]"}>Price</p>
                            <div className={"flex items-center justify-between"}>
                                <p className={"text-[20px] font-mulish text-[#233348] font-bold"}>$750.00</p>
                                <button className={"bg-[#FFBD37] font-mulish w-[109px] h-[40px] rounded-full"}>Order</button>
                            </div>
                        </section>

                    </div>

                    <div className={"flex space-x-3 justify-end mr-72 items-center my-5"}>
                        <button className={"bg-[#FFE8B9] flex items-center justify-center rounded-full h-[48px] w-[48px]"}>
                            <CgArrowLeft className={"text-[#DAA53A] text-[25px]"}/></button>
                        <button className={"bg-[#FFBD37] flex items-center justify-center rounded-full h-[48px] w-[48px]"}>
                            <CgArrowRight className={"text-[25px]"}/></button>
                    </div>
                </div>

            </section>

            <section className={"md:hidden relative mb-[105px] bg-gray-50"}>
                <img src="/images/Vector (1).png" className={"absolute w-[500px] top-7 right-0 left-0 bottom-0"} alt=""/>

                <div className={""}>
                    <div className={"space-y-5"}>
                        {/*card1*/}
                        <section className={"mx-5 p-3 relative h-[375.23px] rounded-2xl bg-white shadow-md"}>
                            <h2 className={"text-[20px]  font-mulish text-[#233348] font-bold"}>Universal eBike Kit</h2>
                            <img src="/images/brampton.png" className={"w-[199px] object-contain h-[229px] block mx-auto"}
                                 alt=""/>
                            <hr className={"bg-[#C2CFE0] border"}/>
                            <p className={"text-[#7D7987] font-mulish mt-2 text-[16px]"}>Price</p>
                            <div className={"flex items-center justify-between"}>
                                <p className={"text-[20px] font-mulish text-[#233348] font-bold"}>$750.00</p>
                                <button className={"bg-[#FFBD37] font-mulish w-[109px] h-[40px] rounded-full"}>Order</button>
                            </div>
                        </section>

                        {/*card3*/}
                        <section className={"mx-5 p-3 relative h-[375.23px] rounded-2xl bg-white shadow-md"}>
                            <h2 className={"text-[20px] text-[#233348] font-mulish font-bold"}>Universal eBike Kit</h2>
                            <img src="/images/brampton.png" className={"w-[199px] object-contain h-[229px] block mx-auto"}
                                 alt=""/>
                            <hr className={"bg-[#C2CFE0] border"}/>
                            <p className={"text-[#7D7987] mt-2 font-mulish text-[16px]"}>Price</p>
                            <div className={"flex items-center justify-between"}>
                                <p className={"text-[20px] font-mulish text-[#233348] font-bold"}>$750.00</p>
                                <button className={"bg-[#FFBD37] font-mulish w-[109px] h-[40px] rounded-full"}>Order</button>
                            </div>
                        </section>

                    </div>

                    <div className={"flex space-x-3 justify-end items-center m-5"}>
                        <button className={"bg-[#FFE8B9] flex items-center justify-center rounded-full h-[48px] w-[48px]"}>
                            <CgArrowLeft className={"text-[#DAA53A] text-[25px]"}/></button>
                        <button className={"bg-[#FFBD37] flex items-center justify-center rounded-full h-[48px] w-[48px]"}>
                            <CgArrowRight className={"text-[25px]"}/></button>
                    </div>
                </div>

            </section>

        </main>
    );
};

export default Bike;