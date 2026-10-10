import { ProductType } from '@/types/ProductType'
import React from 'react'
import ProductCard from './ProductCard'
type PriceUpProps = {
  products: ProductType[]
}
const PriceUpProduct = ({products }: PriceUpProps) => {
  const PriceUp = products.filter(product => product.change.dir === "up");
  const priceDown = products.filter(product => product.change.dir === "down");
  
  return (
    <div className="container mx-auto">
      <div className='py-4' >
        <h1 className="font-bold text-2xl mb-2 p-1"><span className="text-red-500 mr-2">▲</span>আজ দাম বেড়েছে</h1>
        <div className="grid grid-cols-3 gap-2">
          {PriceUp.map((product: ProductType) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
      <div className='py-4'>
        <h1 className="font-bold text-2xl mb-2 p-1"><span className="text-green-500 mr-2">▼</span>আজ দাম কমেছে</h1>
        <div className="grid grid-cols-3 gap-2">
          {priceDown.map((product: ProductType) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
      <div className='py-4'>
        <h1 className="font-bold text-2xl mb-2 p-1">সব পণ্য</h1>
        <p className='mb-4'>মোট {products.length}টি পণ্য দেখানো হচ্ছে</p>
        <div className="grid grid-cols-3 gap-2">
          {products.map((product: ProductType) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  )
}

export default PriceUpProduct