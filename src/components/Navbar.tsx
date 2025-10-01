"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathName = usePathname();

    console.log(pathName);

    return (
        <div className="w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
            <div className="text-xl font-bold">
                <Link href="/">NextJS</Link>
            </div>

            <div className="flex space-x-6">
                <div>
                    <input className="bg-white text-black" type="text" />
                </div>
                {/* <Link href="/about" className="hover:text-gray-300">About</Link>
                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                <Link href="/products" className="hover:text-gray-300">Product</Link>
                <Link href="/gallery" className="hover:text-gray-300">Gallery</Link>
                <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
                <Link href="/login" className="hover:text-gray-300">Login</Link> */}

                <Link href="/about" className={`${pathName === "/about" ? "text-blue-600 font-semibold underline" : "text-white hover:underline"}`}>About</Link>
                <Link href="/contact" className={`${pathName === "/contact" ? "text-blue-600 font-semibold underline" : "text-white hover:underline"}`}>Contact</Link>
                <Link href="/products" className={`${pathName === "/products" ? "text-blue-600 font-semibold underline" : "text-white hover:underline"}`}>Product</Link>
                <Link href="/gallery" className={`${pathName === "/gallery" ? "text-blue-600 font-semibold underline" : "text-white hover:underline"}`}>Gallery</Link>
                <Link href="/dashboard" className={`${pathName === "/dashboard" ? "text-blue-600 font-semibold underline" : "text-white hover:underline"}`}>Dashboard</Link>
                <Link href="/login" className={`${pathName === "/login" ? "text-blue-600 font-semibold underline" : "text-white hover:underline"}`}>Login</Link>
            </div>
        </div >
    );
}