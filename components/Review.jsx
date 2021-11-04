import React, {useState} from 'react';
import {reviewsData} from "../data/data";
import {CgArrowRight, CgArrowLeft} from "react-icons/cg";


const Review = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    //last element in the array
    const lastSlide = reviewsData.length - 1;

    const prevSlide = () => {
        const newSlide = currentSlide === 0 ? lastSlide : currentSlide - 1;
        setCurrentSlide(newSlide);
    }

    const nextSlide = () => {
        const newSlide = currentSlide === lastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newSlide);
    }

    return (
        <main>
            <div className={"hidden md:block relative"}>
                <img src="/images/Group 10.png" className={"absolute bottom-[-159px] right-14 rotate-90"} alt=""/>
                {reviewsData.map(({name, job, image, review}, index) =>  {
                    return <section
                        key={index}
                        className={index === currentSlide ? " max-w-[907px] mx-auto " : "hidden"}
                    >

                        <div className={"w-[895px] rounded-xl h-[425px] relative overflow-y-hidden bg-[#FCB72B]"}>
                            <img src="/images/Group 10.png" className={"absolute -top-12 opacity-75 right-10 rotate-90"} alt=""/>

                            <div className={"grid grid-cols-12"}>
                                <h2 className={"col-span-full col-start-3 pt-[64px] font-mulish text-[36px] text-white font-bold"}>What our customer are saying</h2>

                                <div className={"border-b col-start-6 border-2 bg-white w-[56px] col-span-full text-center"}/>


                                {/*image*/}
                                <div className={"col-span-6 mt-[33px] col-start-3 col-end-6"}>
                                    <img src={image} className={"rounded-full bg-white border p-1 "} alt=""/>
                                    <div>
                                        <h2 className={"text-[22px] my-[10px] font-mulish text-white font-semibold"}>{name}</h2>
                                        <span className={"text-white font-mulish px-10"}>{job}</span>
                                    </div>
                                </div>

                                {/*text*/}
                                <p className={"col-span-6 text-white opacity-90 font-mulish leading-[30px] mt-[74px] w-[71%]"}>{review}</p>
                            </div>
                        </div>

                    </section>
                })}

                <section className={"md:mt-10 mb-32 md:max-w-[907px] md:mx-auto"}>
                    <div className={"relative flex items-center space-x-20 flex justify-center items-center"}>
                        <button disabled={currentSlide === 0} className={"disabled:cursor-not-allowed disabled:opacity-30"} onClick={prevSlide}>
                            <CgArrowLeft className={"disabled:text-[#FFEBC4] disabled:bg-red-900 text-[#FFBE3B] text-[28px]"} />
                        </button>

                        <div className={"flex max-w-[907px] mx-auto justify-center"}>
                            {reviewsData.map((review, index) => <div key={index} className={""}>
                                <button onClick={() => setCurrentSlide(index)}
                                        className={index === currentSlide ? "h-2 w-2 bg-[#FFBE3B] rounded-full mx-2 mb-2 cursor-pointer":
                                            "h-2 w-2 bg-[#FFBE3B] bg-opacity-30 rounded-full mx-2 mb-2 cursor-pointer"}
                                />
                            </div>)}
                        </div>

                        <button disabled={currentSlide === lastSlide} className={"disabled:cursor-not-allowed disabled:opacity-30"} onClick={nextSlide}>
                            <CgArrowRight className={"text-[#FFBE3B] text-[28px]"} />
                        </button>
                    </div>
                </section>

            </div>

            {/*mobile*/}
            <div className={"md:hidden relative"}>
                <img src="/images/Group 10.png" className={"absolute bottom-[-165px] right-14 rotate-90"} alt=""/>
                {reviewsData.map(({name, job, image, review}, index) =>  {
                    return <section
                        key={index}
                        className={index === currentSlide ? "" : "hidden"}
                    >

                        <div className={"rounded-xl pt-5 mb-10 pb-7 px-3 relative mx-5  overflow-y-hidden bg-[#FCB72B]"}>
                            <img src="/images/Group 10.png" className={"absolute -top-12 opacity-25 right-9 rotate-90"} alt=""/>

                            <div className={"grid grid-cols-4 relative space-y-6"}>
                                <h2 className={"text-[30px] font-mulish leading-[30px] text-center px-4 col-span-full text-white font-semibold"}>What our customer are saying</h2>

                                <div className={"border-b col-start-3 -ml-8 border bg-white w-[56px] col-span-full text-center"}/>


                                {/*image*/}
                                <div className={"col-span-full "}>
                                   <div className={"flex items-center justify-center flex-col space-y-3"}>
                                       <img src={image} className={"rounded-full h-[100px] bg-white p-[3px]"} alt=""/>
                                       <div className={"space-y-1"}>
                                           <h2 className={"text-[22px] font-mulish text-center text-white font-semibold"}>{name}</h2>
                                           <span className={"text-white font-mulish px-10"}>{job}</span>
                                       </div>
                                   </div>
                                </div>

                                {/*text*/}
                                <p className={"px-3 text-center font-mulish text-[19px] opacity-90 text-white col-start-1 col-end-5 col-span-full"}>{review}</p>
                            </div>
                        </div>

                    </section>
                })}

                <section className={"mb-32"}>
                    <div className={"relative flex items-center space-x-20 flex justify-center items-center"}>
                        <button disabled={currentSlide === 0} className={"disabled:cursor-not-allowed disabled:opacity-30"} onClick={prevSlide}>
                            <CgArrowLeft className={"disabled:text-[#FFEBC4] disabled:bg-red-900 text-[#FFBE3B] text-[28px]"} />
                        </button>

                        <div className={"flex max-w-[907px] mx-auto justify-center"}>
                            {reviewsData.map((review, index) => <div key={index} className={""}>
                                <button onClick={() => setCurrentSlide(index)}
                                        className={index === currentSlide ? "h-2 w-2 bg-[#FFBE3B] rounded-full mx-2 mb-2 cursor-pointer":
                                            "h-2 w-2 bg-[#FFBE3B] bg-opacity-30 rounded-full mx-2 mb-2 cursor-pointer"}
                                />
                            </div>)}
                        </div>

                        <button disabled={currentSlide === lastSlide} className={"disabled:cursor-not-allowed disabled:opacity-30"} onClick={nextSlide}>
                            <CgArrowRight className={"text-[#FFBE3B] text-[28px]"} />
                        </button>
                    </div>
                </section>

            </div>

        </main>
    );
};

export default Review;