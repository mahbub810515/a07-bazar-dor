import { ProductType } from "@/types/ProductType";
import MarqueeText from "@/components/MarqueeText";

export default async function Home() {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor/products',{cache:"no-store"});
    const products:ProductType[] = await res.json();
   
  return (
    <div className="bg-brandBg">
        <MarqueeText products={products}/>
    </div>
  );
}
