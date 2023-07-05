export function ProductBar() {
  return (
    <section className="px-[7%] mx-auto py-2 fixed bottom-0 left-0 right-0 bg-white md:hidden">
      <div className="flex gap-1 justify-between items-center">
        <button className="bg-slate-950 font-semibold rounded-md py-2 text-white w-[100%]">
          Buy Now
        </button>
      </div>
    </section>
  );
}
