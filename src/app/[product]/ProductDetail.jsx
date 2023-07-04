"use client";
import Link from "next/link";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import toRupiah from "@develoka/angka-rupiah-js";
import * as Select from "@radix-ui/react-select";
import { FiShare2, FiMessageCircle } from "react-icons/fi";

export function ProductDetail({ product }) {
  return (
    <section className="mx-auto px-[7%]">
      <div className="flex flex-col flex-wrap justify-between gap-2 md:flex-row">
        <Image
          width={
            product.attributes.image.data[0].attributes.formats.medium.width
          }
          height={
            product.attributes.image.data[0].attributes.formats.medium.height
          }
          src={product.attributes.image.data[0].attributes.formats.medium.url}
          alt={product.attributes.title}
          className="w-full aspect-square rounded-md shadow-xl object-cover md:w-[48%]"
        />

        <div className="md:w-[48%] w-full flex flex-col md:py-4 gap-1 lg:gap-2 xl:gap-3">
          <p className="text-sm text-slate-500 truncate w-full">
            {`${product.attributes.etalase.data.attributes.nama} > ${product.attributes.category.data.attributes.name} > ${product.attributes.title}`}
          </p>
          <div className="">
            <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl lg:max-h-80 md:max-h-16 font-light max-h-14 overflow-hidden text-zinc-800">
              {product.attributes.title}
            </h3>
            <p className="text-4xl lg:text-5xl font-semibold">
              {toRupiah(product.attributes.price, { floatingPoint: 0 })}
            </p>
            <div className="flex gap-1 items-center py-1 ">
              <span className="text-sm lg:text-base font-medium bg-[#ADFFFA] text-[#004945] rounded-sm px-1">
                {product.attributes.discount}%
              </span>
              <p className="text-base lg:text-lg font-normal text-slate-500 -mt-[2px] lg:-mt-[1px] line-through	">
                {toRupiah(
                  Math.round(
                    (product.attributes.price /
                      (100 - product.attributes.discount)) *
                      100
                  ),
                  { floatingPoint: 0 }
                )}
              </p>
            </div>
          </div>

          <div className="">
            <p className="text-sm lg:text-base xl:text-lg font-normal">
              Stock:{" "}
              <span className="text-[#f36819]">{product.attributes.stock}</span>
            </p>
            <p className="text-sm lg:text-base xl:text-lg font-normal">
              Etalase:{" "}
              <span className="text-[#f36819]">
                {product.attributes.etalase.data.attributes.nama}
              </span>
            </p>
            <p className="text-sm lg:text-base xl:text-lg font-normal">
              Category:{" "}
              <span className="text-[#f36819]">
                {product.attributes.category.data.attributes.name}
              </span>
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
                  <Select.Viewport className="bg-white border border-slate-800 rounded-md overflow-hidden">
                    {product.attributes.variants.data.map((item, index) => (
                      <Select.Item
                        key={index}
                        value={item.attributes.slug}
                        className="w-full relative py-1 px-3 rounded-md"
                      >
                        <Select.ItemText className="text-lg font-normal">
                          {item.attributes.name}
                        </Select.ItemText>
                        <Select.ItemIndicator className="absolute right-0 left-0 top-0 text-base py-1 px-3 font-normal bg-sky-100">
                          {item.attributes.name}
                        </Select.ItemIndicator>
                      </Select.Item>
                    ))}
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

        <div className="py-4">
          <ReactMarkdown className="prose leading-5 prose-slate">
            {product.attributes.content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
