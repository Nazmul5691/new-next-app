import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
            <div className="text-xl font-bold">
                <Link href="/">NextJS</Link>
            </div>

            <div className="fle space-x-6">
                <Link href="/about" className="hover:text-gray-300">About</Link>
                <Link href="/contact" className="hover:text-gray-300">Contact</Link>
                <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
                <Link href="/login" className="hover:text-gray-300">Login</Link>
            </div>
        </div >
    );
}