import Image from "next/image";
import { FiSearch } from "react-icons/fi";

export function Navbar() {
  return (
    <nav className="px-[7%] py-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">InstinkStore</h1>
      <FiSearch className="text-lg hover:text-slate-600" />
    </nav>
  );
}
