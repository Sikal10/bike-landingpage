import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, { Navigation} from 'swiper'
import {CgArrowLeft, CgArrowRight} from "react-icons/cg";

SwiperCore.use([Navigation]);

const Slider = () => {
    return (
        <div className='relative hidden md:block'>
            <img src="/images/Vector (1).png" className={"absolute w-[500px] top-7 right-0 left-0 bottom-0"} alt=""/>

            <div className={" max-w-[1200px] mt-5 p-4 space-x-7 flex ml-72"}>
                <Swiper
                    className="swiper-wrapper"
                    slidesPerView={2.8}
                    navigation={{
                        prevEl: ".custom-prev1",
                        nextEl: ".custom-next1",
                    }}
                    watchSlidesVisibility={true}
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                        <SwiperSlide>
                            <section className={" py-4 px-7 w-[400px] h-[375.23px] rounded-2xl bg-white shadow-lg"}>
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={" py-4 px-7 w-[400px] h-[375.23px] rounded-2xl bg-white shadow-lg"}>
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={" py-4 px-7 w-[400px] h-[375.23px] rounded-2xl bg-white shadow-lg"}>
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
                        </SwiperSlide>
                        <SwiperSlide>
                            <section className={" py-4 px-7 w-[400px] h-[375.23px] rounded-2xl bg-white shadow-lg"}>
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
                        </SwiperSlide>
                </Swiper>
            </div>

            <div className={"relative max-w-sm ml-[1060px] flex space-x-3 "}>
                <div className={"custom-next1 cursor-pointer"}>
                    <CgArrowRight className={"text-[25px]"}/>
                </div>
                <div className={"custom-prev1 cursor-pointer"}>
                    <CgArrowLeft className={"text-[#DAA53A] text-[25px]"}/>
                </div>

            </div>
        </div>
    );
};

export default Slider;