import { ProductType } from '@/types/ProductType'
import React from 'react'
import ProductCard from './ProductCard'
type PriceUpProps={
    PriceUpProduct:ProductType[]
}
const PriceUpProduct = ({PriceUpProduct}:PriceUpProps) => {
    console.log(PriceUpProduct)
  return (
    <div>
        <div className="container mx-auto">
        <h1 className="font-bold text-2xl mb-2 p-1"><span className="text-red-500 mr-2">▲</span>আজ দাম বেড়েছে</h1>
        <div className="grid grid-cols-3 gap-2">
          {PriceUpProduct.map((product: ProductType) => <ProductCard key={product.id} product={product} />)}
        </div>
      </div>
    </div>
  )
}

export default PriceUpProduct