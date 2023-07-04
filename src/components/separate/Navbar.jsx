"use client";

import Link from "next/link";
import { FiX, FiSearch } from "react-icons/fi";
import { useState } from "react";

export function Navbar() {
  const [search, setSearch] = useState(false);

  function handleSearch() {
    setSearch(!search);
  }

  return (
    <section className="fixed z-50 bg-white inset-x-0">
      <nav className="px-[7%] h-12 lg:h-14 flex justify-between items-center relative">
        <Link href="/">
          <h1 className="text-xl lg:text-2xl text-slate-900 font-semibold">
            InstinkStore
          </h1>
        </Link>
        <FiSearch
          onClick={handleSearch}
          className="text-lg lg:text-2xl hover:text-slate-600"
        />

        <div
          className={`absolute w-full md:w-6/12 flex justify-center items-center px-[6.5%] transition-all duration-300 md:right-0 ${
            search ? "right-0" : "-right-full"
          }`}
        >
          <form
            className="rounded-full border border-gray-600 bg-white flex justify-between items-center w-full gap-2 px-2 "
            action="/search"
            method="get"
          >
            <FiX
              onClick={handleSearch}
              className="text-lg lg:text-2xl hover:text-slate-600 md:hidden"
            />
            <input
              className="w-full text-sm lg:text-base font-light text-gray-700 px-3 py-[2px] lg:py-1"
              required
              name="q"
              placeholder="Cari apa yang kami mau"
            />
            <button type="submit">
              <FiSearch className="text-lg lg:text-2xl hover:text-slate-600" />
            </button>
          </form>
        </div>
      </nav>
    </section>
  );
}
