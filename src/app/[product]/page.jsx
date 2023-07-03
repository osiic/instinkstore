"use client";

import {
  FiShare2,
  FiMessageCircle,
} from "react-icons/fi";
import Image from "next/image";
import * as Select from "@radix-ui/react-select";

export default function ProductPage() {
  return (
    <>
      <section className="px-[7%] max-w-screen-sm mx-auto py-2 fixed bottom-0 left-0 right-0 bg-white">
        <div className="flex gap-1 justify-between items-center">
          <a className="">
            <FiShare2 className="text-2xl font-semibold" />
          </a>
          <a className="">
            <FiMessageCircle className="text-2xl font-semibold" />
          </a>
          <button className="bg-slate-950 font-semibold rounded-md py-2 text-white w-[80%]">
            Buy Now
          </button>
        </div>
      </section>

      <section className="max-w-screen-sm mx-auto pt-14 px-[7%]">
        <div className="flex flex-col gap-2">
          <Image
            width="1000"
            height="1000"
            src="https://media.discordapp.net/attachments/885110057736474634/1122024371939192904/Rectangle_3.png"
            alt="poroduk"
            className="w-full aspect-square rounded-md shadow-xl object-cover"
          />
          <div className="">
            <h3 className="text-xl font-light h-14 overflow-hidden text-zinc-800">
              Nitro Gratis 1 Bulain Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </h3>
            <p className="text-4xl font-semibold">Rp75.000</p>
            <div className="flex gap-1 items-center py-1 pb-2 ">
              <span className="text-sm font-medium bg-sky-100 text-sky-500 rounded-sm px-1">
                21%
              </span>
              <p className="text-base font-normal text-slate-500 -mt-[2px] line-through	">
                Rp125.000
              </p>
            </div>
            <p className="text-sm font-normal">
              Stock <span className="text-[#f36819]">2</span>
            </p>
            <Select.Root>
              <Select.Trigger className="w-full border py-1 border-slate-800 rounded-md">
                <Select.Value placeholder="Select a Variant" />
              </Select.Trigger>

              <Select.Portal>
                <Select.Content
                  position="popper"
                  sideOffset="1"
                  className="w-[var(--radix-select-trigger-width)]"
                >
                  <Select.Viewport className="bg-white border border-slate-800 rounded-md">
                    <Select.Item
                      value="Nitro 1 Bulan"
                      className="w-full relative py-1 px-3"
                    >
                      <Select.ItemText className="text-lg font-normal">
                        Nitro 1 Bulan
                      </Select.ItemText>
                      <Select.ItemIndicator className="absolute right-0 left-0 top-0 text-base py-1 px-3 font-normal bg-sky-100">
                        Nitro 1 Bulan
                      </Select.ItemIndicator>
                    </Select.Item>

                    <Select.Item
                      value="Nitro 3 Bulan"
                      className="w-full relative py-1 px-3"
                    >
                      <Select.ItemText className="text-lg font-normal">
                        Nitro 3 Bulan
                      </Select.ItemText>
                      <Select.ItemIndicator className="absolute right-0 left-0 top-0 text-base py-1 px-3 font-normal bg-sky-100">
                        Nitro 3 Bulan
                      </Select.ItemIndicator>
                    </Select.Item>

                    <Select.Item
                      value="Nitro 6 Bulan"
                      className="w-full relative py-1 px-3"
                    >
                      <Select.ItemText className="text-lg font-normal">
                        Nitro 6 Bulan
                      </Select.ItemText>
                      <Select.ItemIndicator className="absolute right-0 left-0 top-0 text-base py-1 px-3 font-normal bg-sky-100">
                        Nitro 6 Bulan
                      </Select.ItemIndicator>
                    </Select.Item>

                    <Select.Item
                      value="Nitro 12 Bulan"
                      className="w-full relative py-1 px-3"
                    >
                      <Select.ItemText className="text-lg font-normal">
                        Nitro 12 Bulan
                      </Select.ItemText>
                      <Select.ItemIndicator className="absolute right-0 left-0 top-0 text-base py-1 px-3 font-normal bg-sky-100">
                        Nitro 12 Bulan
                      </Select.ItemIndicator>
                    </Select.Item>
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </div>

          <div className="py-4 space-y-2">
            <h2 className="text-lg font-medium">Deskripsi Product</h2>
            <div className="text-base font-normal text-slate-800 space-y-1">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quidem blanditiis tenetur! Quos earum similique, aspernatur,
                architecto quo natus reprehenderit ipsa officiis rerum ad
                voluptatem!
              </p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis aliquam necessitatibus eaque exercitationem, in odit.
              </p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque, aspernatur distinctio. Quod quibusdam, nihil non
                mollitia sint sit accusamus blanditiis provident facilis soluta
                amet expedita fugit possimus aliquid at hic!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
