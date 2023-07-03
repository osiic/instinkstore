import { Products } from '@/components/Products';

export function HomeProducts() {
  return (
    <section className="px-[7%] py-2 ">
      <h3 className="text-sm md:text-base lg:text-lg font-normal">All Products</h3>
      <Products />
    </section>
  );
}