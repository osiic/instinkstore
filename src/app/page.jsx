import Image from "next/image";
import { HomeSlider } from "./HomeSlider";
import { HomeProducts } from "./HomeProducts";
export default async function Home() {
  return (
    <>
      <HomeSlider />
      <HomeProducts />
    </>
  );
}
