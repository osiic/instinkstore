import { getApi } from "@/libs/getApi";
import { HomeSlider } from "./HomeSlider";
import { HomeProducts } from "./HomeProducts";
import { HomeGrup } from "./HomeGrup";


export default async function page() {
  const banners = await getApi('https://instinkstoreapi.onrender.com/api/banners?populate=image')
  
  return (
    <div className="max-w-screen-2xl mx-auto pt-12 lg:pt-14 xl:pt-16 space-y-4  xl:space-y-6">
      <HomeSlider banners={banners.data} />
      <HomeGrup />
      <HomeProducts  />
    </div>
  )
}
