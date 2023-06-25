import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export function Navbar() {
  return (
    <section className="fixed z-50 bg-white inset-x-0">
      <nav className="px-[7%] h-12 flex justify-between items-center">
        <h1 className="text-xl text-slate-900 font-semibold">InstinkStore</h1>
        <FiSearch className="text-lg hover:text-slate-600" />
      </nav>
    </section>
  );
}
