import { menu } from "@/data";
import Link from "next/link";
import React from "react";

const MenuPage = () => {
  return (
    <div className="p-2 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center bg-zinc-900">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-4 md:h-1/2"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          <div className={`text-${category.color} w-1/2`} >
            <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
            <p className="text-sm my-5">{category.desc}</p>

            
            <button className={`hidden xl:block uppercase bg-white text-red-700 py-2 px-4 rounded-md hover:bg-yellow-500`}>Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;
