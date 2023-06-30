'use client'

import { useSearchParams } from 'next/navigation'
import { Products } from '@/components/Products';

export default function SearchPage() {
  const searchParams = useSearchParams()
  const search = searchParams.get('q')

  return (
    <section className="pt-12">
      <h3 className="px-[7%] text-sm font-light pt-1">Products : <span className="font-normal">{search ? search : "Mau nyari apa dek?"}</span></h3>
      <Products />
    </section>
  );
}