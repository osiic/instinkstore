import { HomeSlider } from "./HomeSlider";
import { HomeProducts } from "./HomeProducts";

export default async function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto pt-12 lg:pt-14 xl:pt-16 space-y-4  xl:space-y-6">
      <HomeSlider />
      <HomeProducts />
    </div>
  )
}
