"use client";

import Link from "next/link";
import Image from "next/image";
import * as Select from "@radix-ui/react-select";
import { FiShare2, FiMessageCircle } from "react-icons/fi";

export default function ProductPage() {
  return (
    <div className="min-h-screen max-w-screen-2xl mx-auto pt-14 lg:pt-15">
      <section className="px-[7%] mx-auto py-2 fixed bottom-0 left-0 right-0 bg-white md:hidden">
        <div className="flex gap-1 justify-between items-center">
          <button className="bg-slate-950 font-semibold rounded-md py-2 text-white w-[100%]">
            Buy Now
          </button>
        </div>
      </section>

      <section className="mx-auto px-[7%]">
        <div className="flex flex-col flex-wrap justify-between gap-2 md:flex-row">
          <Image
            width="1000"
            height="1000"
            src="https://media.discordapp.net/attachments/885110057736474634/1122024371939192904/Rectangle_3.png"
            alt="poroduk"
            className="w-full aspect-square rounded-md shadow-xl object-cover md:w-[48%]"
          />

          <div className="md:w-[48%] w-full flex flex-col md:py-4 gap-1 lg:gap-2 xl:gap-3">
            <p className="text-sm text-slate-500 truncate w-full">
              Discord {">"} Discord Nitro {">"} Nitro Gratis 1 Bulain Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="">
              <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:max-h-80 md:max-h-16 font-light max-h-14 overflow-hidden text-zinc-800">
                Nitro Gratis 1 Bulain Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </h3>
              <p className="text-4xl lg:text-5xl font-semibold">Rp75.000</p>
              <div className="flex gap-1 items-center py-1 ">
                <span className="text-sm lg:text-base font-medium bg-sky-100 text-sky-500 rounded-sm px-1">
                  21%
                </span>
                <p className="text-base lg:text-lg font-normal text-slate-500 -mt-[2px] lg:-mt-[1px] line-through	">
                  Rp125.000
                </p>
              </div>
            </div>

            <div className="">
              <p className="text-sm lg:text-base xl:text-lg font-normal">
                Stock: <span className="text-[#f36819]">2</span>
              </p>
              <p className="text-sm lg:text-base xl:text-lg font-normal">
                Etalase: <span className="text-[#f36819]">Discord</span>
              </p>
              <p className="text-sm lg:text-base xl:text-lg font-normal">
                Category: <span className="text-[#f36819]">Discord Nitro</span>
              </p>
            </div>

            <div className="">
              <Select.Root>
                <Select.Trigger className="w-full border py-1 lg:text-xl border-slate-800 rounded-md">
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

            <div className="hidden md:block">
              <div className="flex gap-1 flex-wrap justify-between md:gap-0 md:gap-y-2  items-center">
                <button className="bg-slate-950 order-first font-semibold rounded-md py-2 text-white lg:text-lg text-base w-[75%] md:w-full">
                  Buy Now
                </button>
              </div>
            </div>
          </div>

          <div className="py-4 space-y-2">
            <h2 className="text-lg lg:text-xl font-medium">
              Deskripsi Product
            </h2>
            <div className="text-base lg:text-lg font-normal text-slate-800 space-y-1">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quidem blanditiis tenetur! Quos earum similique, aspernatur,
                architecto quo natus reprehenderit ipsa officiis rerum ad
                voluptatem!
              </p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis aliquam necessitatibus eaque exercitationem, in odit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est,
                unde?
              </p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque, aspernatur distinctio. Quod quibusdam, nihil non
                mollitia sint sit accusamus blanditiis provident facilis soluta
                amet expedita fugit possimus aliquid at hic!
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quidem blanditiis tenetur! Quos earum similique, aspernatur,
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore alias in sequi, voluptatem voluptas dolor iste neque ex
                sunt facere! architecto quo natus reprehenderit ipsa officiis
                rerum ad voluptatem!
              </p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis aliquam necessitatibus eaque exercitationem, in odit.
              </p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Cumque, aspernatur distinctio. Quod quibusdam, nihil non
                mollitia sint sit accusamus blanditiis provident facilis soluta
                amet expedita fugit possimus aliquid at hic! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Autem, officia
                repudiandae.
              </p>
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                quidem blanditiis tenetur! Quos earum similique, aspernatur,
                architecto quo natus reprehenderit ipsa officiis rerum ad
                voluptatem!
              </p>
              <p className="">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis aliquam necessitatibus eaque exercitationem, in odit.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
                vel, autem non magni illo delectus voluptas error exercitationem
                amet molestiae illum veritatis saepe architecto inventore
                doloribus. Magni ad vel assumenda.
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
    </div>
  );
}
