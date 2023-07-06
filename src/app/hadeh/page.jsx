import Image from "next/image";
// #f9f8f6
export default function Page() {
  return (
    <section className="absolute inset-0 z-50 bg-[#f9f8f6]" >
      <div className="flex flex-col w-screen h-screen bg-[#f9f8f6] justify-center items-center gap-2">
        <Image
          src="/Loading.gif"
          alt="loading"
          width="256"
          height="256"
          className="w-64 object-cover"
        />
      </div>
    </section>
  );
}
