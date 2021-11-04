import React, {useEffect, useRef} from 'react';
import lottie from "lottie-web";

const Hybrid = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: containerRef.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require("../lotties/rider.json")
        });
    }, []);

    return (
        <main className={"pb-20 mt-[108px] mb-[80px] md:mb-[138px] relative"}>
            {/*absolute bg*/}
            <img src="/images/Vector.png" className={"absolute top-0 right-0 bottom-0"} alt=""/>

            <div className={"mt-10 max-w-[907px] relative grid grid-cols-4 md:grid-cols-12 mx-auto"}>

               {/*image*/}
               <section className=" col-span-full md:col-span-6">
                   <section className={"md:px-7 px-5 mx-5 md:mx-0 md:w-[420px] py-4 rounded-2xl bg-white shadow-lg"}>
                       <div className="w-[65%] mx-auto" ref={containerRef}/>
                       <hr className={"bg-[#C2CFE0] mt-4"}/>
                       <p className={"text-[#7D7987] mt-4 text-[16px]"}>Price</p>
                       <div className={"flex items-center mt-4 justify-between"}>
                           <p className={"text-[20px] text-[#233348] font-bold"}>$750.00</p>
                           <button className={"bg-[#FFBD37] w-[109px] h-[40px] rounded-full"}>Order</button>
                       </div>
                   </section>
               </section>

               {/*text*/}
               <section className={"col-span-full md:col-span-6 md:ml-[62px] py-9"}>
                   <h2 className={"md:text-[36px] text-[#233348] font-bold text-[30px] md:text-left text-center"}>Hybrid Bikes</h2>
                   <p className={"mt-[32px] font-mulish hidden md:block text-[#7D7987] text-[18px]"}>
                       Dummy Text progressive, and affordable healthcare, accessible on mobile and online for everyone.
                       To us, it’s not just work. We take pride <br/>in the solutions we deliver
                   </p>
                   <p className={"mt-[32px] font-mulish md:hidden px-3 text-center text-[#7D7987] text-[18px]"}>
                       Dummy Text progressive, and affordable healthcare, accessible on mobile and online for everyone.
                       To us, it’s not just work. We take pride in the solutions we deliver
                   </p>

                   <button className={"hidden md:block font-mulish border-2 text-[18px] border-[#FCB72B] w-[200px] h-[56px] rounded-full text-[#FCB72B] font-bold mt-[37px]"}>Learn more</button>

                    <div className={"md:hidden flex justify-center -mt-2"}>
                        <button className={"md:hidden border font-mulish text-[18px] border-[#FCB72B] w-[200px] h-[56px] rounded-full text-[#FCB72B] font-bold mt-[37px]"}>Learn more</button>
                    </div>
               </section>
           </div>
        </main>
    );
};

export default Hybrid;