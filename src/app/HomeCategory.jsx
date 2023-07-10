import Link from "next/link";

export function HomeCategory({ category }) {

  return (
    <section className="px-[7%] overflow-hidden flex flex-wrap gap-2 ">
      {category.map(({attributes}, index) => (
        <Link key={index} href={{
          pathname: "/category",
          query: {
            q: attributes?.slug,
          },
        }} className="border border-slate-950 py-[2px] px-2 rounded hover:bg-slate-800 hover:text-white transition-all">{attributes?.name}</Link>
      ))}
    </section>
  );
}
