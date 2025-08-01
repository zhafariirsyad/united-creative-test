"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <header className="bg-[#13212F]/20 text-white">
            <nav className="mx-auto flex items-center justify-between p-4 sm:p-6 lg:p-8">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image src="/logo.svg" alt="Logo" width={32} height={32} />
                    {/* Desktop Menu */}
                    <ul className="hidden md:flex gap-8 ml-6 text-sm font-light">
                        <li><a href="#" className="hover:text-[#E5933A]">Pasar</a></li>
                        <li><a href="#" className="hover:text-[#E5933A]">Tentang Kami</a></li>
                        <li><a href="#" className="hover:text-[#E5933A]">Kontak Kami</a></li>
                    </ul>
                </div>


                {/* CTA Buttons */}
                <div className="hidden md:flex gap-4">
                    <button className="border border-[#E5933A] text-xs px-4 py-1 rounded-full hover:bg-[#E5933A] hover:text-black transition">SIGN IN</button>
                    <button className="border border-[#E5933A] text-xs px-4 py-1 rounded-full hover:bg-[#E5933A] hover:text-black transition">SIGN UP</button>
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setOpenMenu(!openMenu)} className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="white" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {openMenu && (
                <div className="md:hidden px-4 pb-4">
                    <ul className="flex flex-col gap-2 text-sm">
                        <li><a href="#" className="block py-2">Pasar</a></li>
                        <li><a href="#" className="block py-2">Tentang Kami</a></li>
                        <li><a href="#" className="block py-2">Kontak Kami</a></li>
                    </ul>
                    <div className="flex gap-3 mt-3">
                <button className="w-full border border-[#E5933A] text-xs px-4 py-1 rounded-full hover:bg-[#E5933A] hover:text-black transition">SIGN IN</button>
                <button className="w-full border border-[#E5933A] text-xs px-4 py-1 rounded-full hover:bg-[#E5933A] hover:text-black transition">SIGN UP</button>
                </div>
            </div>
            )}
        </header>
    );
}
