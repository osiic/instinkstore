import Image from "next/image";
import Link from "next/link";

export function Products() {
  return (
    <div className="grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-1">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(
        (item, index) => (
          <Link
            href="/produk"
            key={index}
            className=" shadow-2xl rounded-md overflow-hidden"
          >
            <Image
              width="500"
              height="500"
              src="https://media.discordapp.net/attachments/885110057736474634/1122024371939192904/Rectangle_3.png"
              alt="poroduk"
              className="aspect-square rounded-md object-cover "
            />
            <div className="p-2 pt-3 pb-4 ">
              <h3 className="text-light leading-5 font-normal h-[2.5rem] overflow-hidden text-slate-800">
                Mitro Booster 1 Bulan Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Similique adipisci consequatur veritatis?
              </h3>
              <p className="text-xl font-medium text-slate-950">Rp54.000</p>
              <div className="flex gap-[2px] items-center">
                <span className="px-1 py-[0.125rem] rounded-sm bg-[#ADFFFA] text-xs font-semibold text-[#004945] ">
                  21%
                </span>
                <p className=" text-slate-500 line-through text-sm font-normal -mt-[0.125rem]">
                  Rp283.000
                </p>
              </div>
            </div>
          </Link>
        )
      )}
    </div>
  );
}
