import { ProductType } from "@/types/ProductType";
import MarqueeText from "@/components/MarqueeText";
import Banner from "@/components/Banner";
import { Suspense } from "react";

export default async function Home() {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products', { cache: "no-store" });
  const products: ProductType[] = await res.json();

  return (
    <div className="bg-green-50">      
        <MarqueeText products={products} />     
      <Banner />
    </div>
  );
}
