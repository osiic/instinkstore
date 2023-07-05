import Image from "next/image";
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
      <div className="flex flex-col justify-center items-center h-[87vh] gap-2">
        <Image
          src="/Loading.gif"
          alt="loading"
          width="256"
          height="256"
          className="w-64 object-cover"
        />
        <h3 className="text-slate-800 text-lg font-normal">
          Kek nya yang kao cari kagak ada
        </h3>
      </div>
    );
  }
   return (
     <div className="min-h-screen max-w-screen-2xl mx-auto pt-14 lg:pt-15">
       <ProductBar />
       <ProductDetail product={product.data[0]} />
     </div>
  );
}
