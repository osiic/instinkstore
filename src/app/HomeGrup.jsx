"use client"

import Link from "next/link";
import { getApi } from "@/libs/getApi";
import { useRef, useEffect } from "react";

function useHorizontalScroll() {
  const elRef = useRef();
  useEffect(() => {
    const el = elRef.current;
    if (el) {
      const onWheel = e => {
        if (e.deltaY == 0) return;
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY,
          behavior: "smooth"
        });
      };
      el.addEventListener("wheel", onWheel);
      return () => el.removeEventListener("wheel", onWheel);
    }
  }, []);
  return elRef;
}

export async function HomeGrup() {
  const scrollRef = useHorizontalScroll();
  const etalases = await getApi(
    "https://instinkstoreapi.onrender.com/api/etalases"
  );
  const categories = await getApi(
    "https://instinkstoreapi.onrender.com/api/categories"
  );
  

  return (
    <section  ref={scrollRef}  className="mx-[7%] overflow-auto no-scrollbar">
      <div className="min-w-max p-1 space-x-2 ">
        {etalases.data.map(({ attributes }, index) => (
          <Link
            key={index}
            href={{
              pathname: "/etalase",
              query: {
                q: attributes?.slug,
              },
            }}
            className="border border-slate-950 py-[2px] px-2 rounded hover:bg-slate-800 hover:text-white transition-all"
          >
            {attributes?.nama}
          </Link>
        ))}
        {categories.data.map(({ attributes }, index) => (
          <Link
            key={index}
            href={{
              pathname: "/category",
              query: {
                q: attributes?.slug,
              },
            }}
            className="border border-slate-950 py-[2px] px-2 rounded hover:bg-slate-800 hover:text-white transition-all"
          >
            {attributes.name}
          </Link>
        ))}
      </div>
    </section>
  );
}
