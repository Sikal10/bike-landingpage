const BikeSectionTwo = () => {
    return (
        <main>
            <section className={"hidden md:block md:max-w-[907px] md:mx-auto md:mb-[116px] "}>
                <h3 className={"text-[24px] font-semibold text-[#233348] md:text-left text-center font-mulish"}>Other Type Of Bikes</h3>

                <div className={"flex space-x-4 items-center px-5"}>
                    <div className={"mt-[40px] bg-white group rounded-md group"}>
                        <div className={" w-[227px] shadow-md h-[117px] group-hover:border-2 rounded-lg group-hover:border-[#FCB72B]"}>
                            <img src="/images/fixiebike.png" className={"mx-auto group-hover:scale-110 transition duration-200 ease-out block mt-3.5"} alt=""/>
                        </div>

                        <p className={"bg-gray-50 p-2 text-center group-hover:text-[#FCB72B] font-mulish"}>Hybrid Bikes</p>
                    </div>

                    <div className={"mt-[40px] bg-white group rounded-md group"}>
                        <div className={" w-[227px] shadow-md h-[117px] group-hover:border-2 rounded-lg group-hover:border-[#FCB72B]"}>
                            <img src="/images/fixiebike.png" className={"mx-auto group-hover:scale-110 transition duration-200 ease-out block mt-3.5"} alt=""/>
                        </div>

                        <p className={"bg-gray-50 p-2 text-center group-hover:text-[#FCB72B] font-mulish"}>Fixie Bikes</p>
                    </div>

                    <div className={"mt-[40px] bg-white group rounded-md group"}>
                        <div className={" w-[227px] shadow-md h-[117px] group-hover:border-2 rounded-lg group-hover:border-[#FCB72B]"}>
                            <img src="/images/fixiebike.png" className={"mx-auto group-hover:scale-110 transition duration-200 ease-out block mt-3.5"} alt=""/>
                        </div>

                        <p className={"bg-gray-50 p-2 text-center group-hover:text-[#FCB72B] font-mulish"}>Folding Bikes</p>
                    </div>


                    <div className={"mt-[40px] bg-white group rounded-md group"}>
                        <div className={" w-[227px] shadow-md h-[117px] group-hover:border-2 rounded-lg group-hover:border-[#FCB72B]"}>
                            <img src="/images/fixiebike.png" className={"mx-auto group-hover:scale-110 transition duration-200 ease-out block mt-3.5"} alt=""/>
                        </div>

                        <p className={"bg-gray-50 p-2 text-center group-hover:text-[#FCB72B] font-mulish"}>Mount Bikes</p>
                    </div>


                    <div className={"mt-[40px] bg-white rounded-md opacity-25"}>
                        <div className={" w-[227px] h-[117px] rounded-lg"}>
                            <img src="/images/fixiebike.png" className={"mx-auto rounded-lg block mt-3.5"} alt=""/>
                        </div>

                        <p className={"bg-gray-50 p-2 text-center font-mulish"}>City Bikes</p>
                    </div>
                </div>
            </section>

            <section className={"md:hidden"}>
                <h3 className={"text-[24px] font-semibold text-[#233348] font-mulish md:text-left text-center"}>Other Type Of Bikes</h3>

                <div className={"flex space-x-4 items-center px-5 overflow-x-scroll pb-5 scrollbar-thin scrollbar-thumb-black"}>
                    <div className={"mt-[40px] bg-white group rounded-md group"}>
                        <div className={" w-[227px] shadow-md h-[117px] group-hover:border-2 rounded-lg group-hover:border-[#FCB72B]"}>
                            <img src="/images/fixiebike.png" className={"mx-auto group-hover:scale-110 transition duration-200 ease-out block mt-3.5"} alt=""/>
                        </div>

                        <p className={"bg-gray-50 p-2 text-center font-mulish group-hover:text-[#FCB72B] "}>Hybrid Bikes</p>
                    </div>

                    <div className={"mt-[40px] bg-white group rounded-md group"}>
                        <div className={" w-[227px] shadow-lg h-[117px] group-hover:border-2 rounded-lg group-hover:border-[#FCB72B]"}>
                            <img src="/images/fixiebike.png" className={"mx-auto group-hover:scale-110 transition duration-200 ease-out block mt-3.5"} alt=""/>
                        </div>

                        <p className={"bg-gray-50 p-2 text-center group-hover:text-[#FCB72B] font-mulish"}>Fixie Bikes</p>
                    </div>

                    <div className={"mt-[40px] bg-white group rounded-md group"}>
                        <div className={" w-[227px] shadow-lg h-[117px] group-hover:border-2 rounded-lg group-hover:border-[#FCB72B]"}>
                            <img src="/images/fixiebike.png" className={"mx-auto group-hover:scale-110 transition duration-200 ease-out block mt-3.5"} alt=""/>
                        </div>

                        <p className={"bg-gray-50 p-2 text-center group-hover:text-[#FCB72B] font-mulish"}>Folding Bikes</p>
                    </div>


                    <div className={"mt-[40px] bg-white group rounded-md group"}>
                        <div className={" w-[227px] shadow-lg h-[117px] group-hover:border-2 rounded-lg group-hover:border-[#FCB72B]"}>
                            <img src="/images/fixiebike.png" className={"mx-auto group-hover:scale-110 transition duration-200 ease-out block mt-3.5"} alt=""/>
                        </div>

                        <p className={"bg-gray-50 p-2 text-center group-hover:text-[#FCB72B] font-mulish"}>Mount Bikes</p>
                    </div>


                    <div className={"mt-[40px] bg-white rounded-md opacity-25"}>
                        <div className={" w-[227px] h-[117px] rounded-lg"}>
                            <img src="/images/fixiebike.png" className={"mx-auto rounded-lg block mt-3.5"} alt=""/>
                        </div>

                        <p className={"bg-gray-50 p-2 text-center font-mulish"}>City Bikes</p>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default BikeSectionTwo;