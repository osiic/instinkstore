import Image from "next/image";
import { Slider } from "./Slider";
import { Products } from "./Products";
export default async function Home() {
  return (
    <>
      <Slider />
      <Products />
    </>
  );
}
