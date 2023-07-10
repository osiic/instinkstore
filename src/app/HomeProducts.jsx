import { getApi } from "@/libs/getApi";
import { Products } from '@/components/Products';

export async function HomeProducts() {
  const products = await getApi('https://instinkstoreapi.onrender.com/api/products?populate=image')

  return (
    <section className="px-[7%]">
      <h2 className="text-sm md:text-base lg:text-lg font-normal">All Products</h2>
      <Products products={products.data} />
    </section>
  );
}