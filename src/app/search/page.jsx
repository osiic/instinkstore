'use client'

import { useSearchParams } from 'next/navigation'
import { Products } from '@/components/Products';

export default function SearchPage() {
  const searchParams = useSearchParams()
  const search = searchParams.get('q')

  return (
    <section className="pt-12 lg:pt-14 px-[7%] min-h-screen">
      <h3 className="text-sm md:text-base lg:text-lg font-normal pt-1">Products: <span className="font-light px-1 lg:px-2 bg-orange-400 rounded-sm lg:rounded text-orange-900">{search ? search : "Mau nyari apa dek?"}</span></h3>
      <Products />
    </section>
  );
}