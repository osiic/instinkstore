import Image from "next/image";
// #f9f8f6
export default function Loading() {
  return (
    <section className="flex flex-col justify-center items-center h-screen gap-2 z-50">
      <Image src="/Loading.gif" alt="loading" width="256" height="256" className="w-64object-cover" />
    </section>
  );
}