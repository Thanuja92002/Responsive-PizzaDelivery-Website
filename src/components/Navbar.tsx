
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="h-12 bg-black text-red-500 p-4 flex items-center justify-between border-b-2 border-b-black uppercase  lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/"><button className="uppercase w-30 p-2 ring-1 ring-black rounded-md  hover:bg-rose-300">HOMEPAGE
        </button></Link>
        <Link href="/menu"><button className="uppercase w-30 p-2 ring-1 ring-black  rounded-md  hover:bg-rose-300">MENU
        </button></Link>
        <Link href="/"><button className="uppercase w-30 p-2 ring-1 ring-black rounded-md  hover:bg-rose-300">CONTACT
        </button></Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">BLAZZING PIZZA</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-yellow-50 px-1 rounded-md">
          <Image src="/phone-call.png" alt="" width={20} height={20} />
          <span>PHONE</span>
        </div>
        {!user ? (
          <Link href="/login"><button className="uppercase w-30 p-2 ring-1 ring-black  rounded-md  hover:bg-rose-300">LOGIN
          </button></Link>
        ) : (
          <Link href="/orders"><button className="uppercase w-30 p-2 ring-1 ring-black rounded-md  hover:bg-rose-300">cart
          </button></Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;