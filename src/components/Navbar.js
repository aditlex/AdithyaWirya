"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setVisible(true); // Tetap tampil jika di paling atas
      } else if (currentScrollY > lastScrollY) {
        setVisible(false); // Sembunyikan saat scroll ke bawah
      } else {
        setVisible(true); // Tampilkan saat scroll ke atas
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg`}
    >
      <Link href="/#home">
      <img src="/A.png" alt="Logo" className="h-10 w-auto" /></Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">
            <span className="hover:text-gray-400 cursor-pointer">Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="hover:text-gray-400 cursor-pointer">About</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
