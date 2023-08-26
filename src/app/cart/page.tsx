import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row bg-rose-100">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40 ">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p2.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">BBQ Chicken</h1>
            <span>Medium</span>
          </div>
          <h2 className="font-bold">₹502</h2>
          <span className="cursor-pointer">X</span>          
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p3.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">vegge classic</h1>
            <span>small</span>
          </div>
          <h2 className="font-bold">₹498</h2>
          <span className="cursor-pointer">X</span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p4.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">FarmHouse</h1>
            <span>Large</span>
          </div>
          <h2 className="font-bold">₹799</h2>
          <span className="cursor-pointer">X</span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-rose-100 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-">
        <div className="flex justify-between">
          <span className="">Subtotal 
          (3 items)</span>
          <span className="">₹810</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">₹10.0</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-green-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">TOTAL
          (INCL.VAT)</span>
          <span className="font-bold">₹1,809</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded-md w-30 self-end hover:bg-yellow-400">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
