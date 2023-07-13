import { getApi } from "@/libs/getApi";
import { Products } from "@/components/Products";

export default async function page({ params, searchParams }) {
  const { q = "Mau nyari apa dek?" } = searchParams;
  const search = q.split(" ");
  let query = "";
  
  if (q !== "Mau nyari apa dek?" && q != '' ) {
    query = "https://instinkstoreapi.onrender.com/api/products?populate=image";
    let queryText = "";

    search.forEach((item) => {
      queryText += `${item}+`;
      query += `&filters[category][slug][$eq]=${queryText}`;
      query = query.slice(0, -1);
    });
  }

  const products = query && (await getApi(query, { cache: "no-store" }));

  return (
    <section className="pt-12 lg:pt-14 px-[7%] min-h-[87vh]">
      <h3 className="text-sm md:text-base lg:text-lg font-normal pt-2 pb-1">
        Category:{" "}
        <span className="font-light px-1 lg:px-2 bg-orange-400 rounded-sm lg:rounded text-orange-900">
          {q ? q : "Mau nyari apa dek?"}
        </span>
      </h3>
      <Products products={products?.data} />
    </section>
  );
}
