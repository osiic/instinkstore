import { getApi } from "@/libs/getApi";
import { Products } from "@/components/Products";

export default async function SearchPage({ params, searchParams }) {
  const { q } = searchParams;
  const search = q.split(" ");

  let query = "https://instinkstoreapi.onrender.com/api/products?populate=image";
  let queryText = "";
  
  search.forEach((item) => {
    queryText += `${item}+`;
    query += `&filters[title][$containsi]=${queryText}`;
  });
  
  const products = await getApi(query,{ cache: 'no-store' });

  return (
    <section className="pt-12 lg:pt-14 px-[7%] min-h-screen">
      <h3 className="text-sm md:text-base lg:text-lg font-normal pt-2 pb-1">
        Products:{" "}
        <span className="font-light px-1 lg:px-2 bg-orange-400 rounded-sm lg:rounded text-orange-900">
          {q ? q : "Mau nyari apa dek?"}
        </span>
      </h3>
      <Products products={products.data} />
    </section>
  );
}
