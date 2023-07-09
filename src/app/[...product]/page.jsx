import Image from "next/image";
import Link from "next/link";
import { getApi } from "@/libs/getApi";
import { ProductBar } from "./ProductBar";
import { ProductDetail } from "./ProductDetail";

export default async function ProductPage({ params }) {
  const product = await getApi(
    `https://instinkstoreapi.onrender.com/api/products?filters[slug][$eq]=${params?.product[0]}&populate=*`,
    { cache: "no-store" }
  );

  if (product.data.length == 0) {
    return (
      <section className="absolute inset-0 z-50 bg-[#f9f8f6]">
        <div className="flex flex-col w-screen h-screen bg-[#f9f8f6] justify-center items-center gap-2">
          <Image
            src="/Loading.gif"
            alt="loading"
            width="256"
            height="256"
            className="w-64 object-cover"
          />
          <h3 className="text-slate-800 text-lg font-normal">
            Mau cari apa dek? 
          </h3>
          <Link href="/" className="px-2 py-1 border border-slate-950 rounded-md active:scale-[0.97]">Kembali ke Home</Link>
        </div>
      </section>
    );
  }

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto pt-12 lg:pt-14 xl:pt-16">
      <ProductBar />
      <ProductDetail product={product.data[0]} />
    </div>
  );
}
