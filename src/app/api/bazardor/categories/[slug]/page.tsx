import ProductCard from '@/components/ProductCard';
import { ProductType } from '@/types/ProductType';
import Image from 'next/image';

export const instant = false
type CategoriesPageProps = {
  params: Promise<{
    slug: string;
  }>
}
// api/bazardor/categories/chal
const CategoriesPage = async ({ params }: CategoriesPageProps) => {
  const { slug } = await params;
  const res = await fetch(`https://openapi.programming-hero.com/api/bazardor/products?category=${slug}`);
  const products: ProductType[] = await res.json()
  console.log(products)
  return (
    <div className='container mx-auto'>
      <div className='flex gap-2 border-2 border-gray-200 p-10 my-5 rounded-2xl'>
        <span className="text-4xl" role="img" aria-label={products[0].category}>
          {products[0].categoryIcon}
        </span>
        <div>
        <h1>{products[0].categoryNameBn}</h1>
        <p>{products.length} টি পণ্যের আজকের দাম ও পরিবর্তন</p>
        </div>
      </div>
      <h1 className='font-bold text-2xl my-4'>মোট {products.length} টি পণ্য দেখানো হচ্ছে</h1>
      <div className='grid grid-cols-3 gap-4'>
        {products.map((product: ProductType) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  )
}

export default CategoriesPage