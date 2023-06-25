import { Image } from "next/image";

export function HomeProducts() {
  return (
    <section className="px-[7%] py-5 bg-sky-300 min-h-screen">
      <h3 className="font-normal text-base text-slate-700">Products</h3>
      <div className="grid gap-3 grid-cols-3">
        <div className="rounded-[6px]">
          <Image
            src={"/"}
            width={1000}
            height={400}
            alt={""}
            className="bg-pink-300 aspect-square object-cover rounded-2xl"
          />
          <h4>Nitro Booster</h4>
          <p>Rp75.000</p>
          <div className="space-x-2">
            <span>25%</span>
            <p>Rp1290.000</p>
          </div>
        </div>
      </div>
    </section>
  );
}
