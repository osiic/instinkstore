import Link from "next/link";      
import { getApi } from "@/libs/getApi";

export async function HomeGrup() {
  const etalases = await getApi('https://instinkstoreapi.onrender.com/api/etalases')
  const categories = await getApi('https://instinkstoreapi.onrender.com/api/categories')
  
  return (
    <section className="px-[7%] overflow-hidden flex flex-wrap gap-2">
      {etalases.data.map(({attributes}, index) => (
        <Link key={index} href={{
          pathname: "/etalase",
          query: {
            q: attributes?.slug,
          },
        }} className="border border-slate-950 py-[2px] px-2 rounded hover:bg-slate-800 hover:text-white transition-all">{attributes?.nama}</Link>
      ))}
      {categories.data.map(({attributes}, index) => (
        <Link key={index} href={{
          pathname: "/category",
          query: {
            q: attributes?.slug,
          },
        }} className="border border-slate-950 py-[2px] px-2 rounded hover:bg-slate-800 hover:text-white transition-all">{attributes.name}</Link>
      ))}
    </section>
  );
}