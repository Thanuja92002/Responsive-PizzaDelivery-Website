import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">The Only Love Triangle Pizza</h1>
        <p className="text-white xl:text-xl">
        For New UsersFlat 50% OFF upto ₹150 on first order. PIZZA150 
        For All UsersGet Free Delivery on every order. FREEDEL
        </p>
        <CountDown/>
        <button className="bg-rose-500 text-white rounded-md py-3 px-6">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full bg-orange-100">
        <Image src="/offerproduct.jpeg" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;