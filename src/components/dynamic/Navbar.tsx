"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    return (
        <header className="bg-[#13212F]/20 text-white">
            <nav className="mx-auto flex items-center justify-between p-4 sm:p-6 lg:p-8">
                {/* Logo */}
                <div className="flex items-center gap-3">
                    <Image src="/logo.png" alt="Logo" width={32} height={32} />
                </div>

                {/* CTA Buttons */}
                <div className="hidden md:flex gap-4">
                    <Link
                        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                        href="/"
                        >
                        Keluar
                    </Link>
                </div>
            </nav>
        </header>
    );
}
