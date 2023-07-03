"use client";

import Link from "next/link";
import { FiArrowLeft, FiSearch } from "react-icons/fi";
import { useState } from "react";

export function Navbar() {
  const [search, setSearch] = useState(false);

  function handleSearch() {
    setSearch(!search);
  }

  return (
    <section className="fixed z-50 bg-white inset-x-0">
      <nav className="px-[7%] h-12 flex justify-between items-center relative">
        <Link href="/">
          <h1 className="text-xl text-slate-900 font-semibold">InstinkStore</h1>
        </Link>
        <FiSearch
          onClick={handleSearch}
          className="text-lg hover:text-slate-600"
        />

        <div
          className={`absolute left-0 right-0 flex justify-center items-center px-[6%] transition-all duration-300 ${
            !search && "-top-20"
          }`}
        >
          <form
            className="rounded-full border border-gray-600 bg-white flex justify-between items-center w-full gap-2 px-2"
            action="/search"
            method="get"
          >
            <FiArrowLeft onClick={handleSearch} />
            <input
              className="w-full text-sm font-light text-gray-700  py-[2px] px-3"
              name="q"
              placeholder="Cari apa yang kami mau"
            />
            <button type="submit">
              <FiSearch />
            </button>
          </form>
        </div>
      </nav>
    </section>
  );
}
