import Link from "next/link";

export function HomeEtalase({ etalase }) {
  return (
    <section className="px-[7%] overflow-hidden flex flex-wrap gap-2">
      {etalase.map(({attributes}, index) => (
        <Link key={index} href={{
          pathname: "/etalase",
          query: {
            q: attributes?.slug,
          },
        }} className="border border-slate-950 py-[2px] px-2 rounded hover:bg-slate-800 hover:text-white transition-all">{attributes?.nama}</Link>
      ))}
    </section>
  );
}
