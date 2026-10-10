import { ProductType } from "@/types/ProductType";
import MarqueeText from "@/components/MarqueeText";
import Banner from "@/components/Banner";
import products from "@/data/productsData.json";
import PriceUpProduct from "@/components/ProductGallery";
console.log(products)

export default async function Home() {
  const res = await fetch('https://api.abcz.workers.dev/api/bazardor/products', { cache: "no-store" });
  const products: ProductType[] = await res.json();
  
  
  return (
    <div className="bg-green-50">
      <MarqueeText products={products} />
      <Banner />
      <PriceUpProduct products={products}/>
    </div>
  );
}
