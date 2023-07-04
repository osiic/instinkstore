import { getApi } from "@/libs/getApi";
import { ProductBar } from "./ProductBar";
import { ProductDetail } from "./ProductDetail";

export default async function ProductPage({ params }) {
  const product = await getApi(`https://instinkstoreapi.onrender.com/api/products?filters[slug][$eq]=${params.product}&populate=*`,{ cache: 'no-store' });

  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto pt-14 lg:pt-15">
      <ProductBar />
      <ProductDetail product={product.data[0]}/>
    </div>
  );
}
