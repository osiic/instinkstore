import Link from "next/link";
import Image from "next/image";
import toRupiah from "@develoka/angka-rupiah-js";

export function Products({ products }) {
  if (!products || products.length == 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] gap-2">
        <Image
          src="/Loading.gif"
          alt="loading"
          width="256"
          height="256"
          className="w-64object-cover"
        />
        <h3 className="text-slate-800 text-lg font-normal">
          Kek nya yang kao cari kagak ada
        </h3>
        <Link
          href="/"
          className="px-2 py-1 border border-slate-950 rounded-md active:scale-[0.97]"
        >
          Kembali ke Home
        </Link>
      </div>
    );
  }

  return (
    <div className="grid gap-3 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-1">
      {products.map((item, index) => (
        <Link
          href={"/" + item?.attributes?.slug}
          key={index}
          className="shadow-2xl rounded-md overflow-hidden hover:scale-[1.03] active:scale-[0.99] transition"
        >
          <Image
            width="500"
            height="500"
            src={
              item?.attributes?.image?.data[0]?.attributes?.formats?.small?.url
            }
            alt={item?.attributes?.title}
            className="aspect-square rounded-md w-full object-cover "
          />
          <div className="p-2 pt-3 pb-4 ">
            <h3 className="text-light leading-5 font-normal max-h-[2.5rem] overflow-hidden text-slate-800">
              {item?.attributes?.title}
            </h3>
            <p className="text-xl font-medium text-slate-950">
              {toRupiah(item?.attributes?.price, { floatingPoint: 0 })}
            </p>
            <div
              className={`flex gap-[2px] items-center ${
                item?.attributes?.discount == 0 && "hidden"
              }`}
            >
              <span className="px-1 py-[0.125rem] rounded-sm bg-[#ADFFFA] text-xs font-semibold text-[#004945]">
                {item?.attributes?.discount}%
              </span>
              <p className=" text-slate-500 line-through text-sm font-normal -mt-[0.125rem]">
                {toRupiah(
                  Math.round(
                    (item?.attributes?.price /
                      (100 - item?.attributes?.discount)) *
                      100
                  ),
                  { floatingPoint: 0 }
                )}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
