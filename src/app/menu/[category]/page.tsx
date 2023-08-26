import { pizzas } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-green-400">
      {pizzas.map((item) => (
        <Link className="w-full h-[50vh] border-r-8 border-b-8 border-black sm:w-1/2 lg:w-1/3 p-4  flex flex-col justify-between group  bg-zinc-900" href={`/product/${item.id}`} key={item.id}>
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt="" fill className="object-contain"/>
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">₹{item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-green-400 text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
