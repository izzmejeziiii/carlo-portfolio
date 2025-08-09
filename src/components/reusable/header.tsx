'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const router = usePathname();

    const isAboutActive = router.startsWith('/about');
    const isContactActive = router.startsWith('/contact');

    return (
        <>
            <div className="w-full px-4 xl:px-0 pb-8 pt-12 max-w-7xl hidden lg:flex justify-between items-center">
                <span className="text-white uppercase text-[22px] font-bold">
                    Carlo E.
                </span>
                <div className="flex w-auto gap-12">
                    <Link
                        href="/"
                        className={`${
                            router === '/'
                                ? 'text-sm font-bold text-white uppercase border-b-4 border-[#F41A68] pb-2'
                                : 'text-sm font-bold text-white uppercase border-b-4 border-transparent pb-2 hover:border-[#F41A68]/20'
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className={`${
                            isAboutActive
                                ? 'text-sm font-bold text-white uppercase border-b-4 border-[#F41A68] pb-2'
                                : 'text-sm font-bold text-white uppercase border-b-4 border-transparent pb-2 hover:border-[#F41A68]/20'
                        }`}
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className={`${
                            isContactActive
                                ? 'text-sm font-bold text-white uppercase border-b-4 border-[#F41A68] pb-2'
                                : 'text-sm font-bold text-white uppercase border-b-4 border-transparent pb-2 hover:border-[#F41A68]/20'
                        }`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
            <div className="lg:hidden w-full flex justify-between p-4 pt-12">
                <span className="text-white uppercase text-[22px] font-bold">
                    Carlo E.
                </span>
                <IoMenu
                    className="lg:hidden text-white text-3xl"
                    onClick={() => setOpenMenu(true)}
                />
                <div
                    className={`fixed lg:hidden w-[80%] h-[100vh] bg-[#F41A68] p-5 space-y-10 transition-all duration-300 ease-in-out right-0 top-0 bottom-0 z-30 ${
                        openMenu ? 'translate-x-0' : 'translate-x-[100vw]'
                    }`}
                >
                    <button
                        type="button"
                        className="inline-flex text-gray-300 hover:text-gray-500 focus:outline-none text-right"
                        onClick={() => setOpenMenu(false)}
                    >
                        <IoClose className="w-6 h-6" />
                    </button>
                    <nav className="w-4/5 mx-auto">
                        <ul className="text-white text-center space-y-10 font-sora font-semibold">
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm font-bold text-white uppercase"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm font-bold text-white uppercase"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="text-sm font-bold text-white uppercase"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <footer className="text-center font-sans font-light text-sm text-white absolute bottom-0 pb-5 left-0 right-0 mx-auto">
                        <p>All Rights Reserved.</p>
                        <p>Copyright 2023</p>
                    </footer>
                </div>
            </div>
        </>
    );
}
