import { ProductType } from '@/types/ProductType'
import Image from 'next/image';

type ProductProps = {
    product: ProductType;
}

const ProductCard = ({ product }: ProductProps) => {
    console.log(product)
    return (
        <div className='border-2 rounded-2xl bg-white p-4'>
            <div className='flex items-center gap-2 pb-3'>
                {product.image.startsWith("http") ||
                    product.image.startsWith("/") ? (
                    <Image
                        src={product.image}
                        alt={product.nameBn}
                        width={100}
                        height={100}
                        className="object-contain"
                    />
                ) : (
                    <span className="text-5xl">{product.image}</span>
                )}
                <div>
                    <h2 className='font-semibold text-[16px]'>{product.nameBn}</h2>
                    <p className='font-normal text-[12px]'>প্রতি কেজি</p>
                </div>
            </div>
            <h2>আজকের দাম</h2>
            <div className='flex justify-between'>
                <h1 className='font-bold'>{product.today} <span> টাকা</span></h1>
                <p className='bg-green-100 px-2 rounded-xl'>
                    <span
                        className={`mx-1 ${product.change.dir === "down"
                            ? "text-green-500"
                            : product.change.dir === "up"
                                ? "text-red-500"
                                : "text-gray-500"
                            }`}
                    >
                        {product.change.dir === "up" ? "▲" : product.change.dir === "down" ? "▼" : "—"}{" "}
                        {product.change.pct}
                    </span>
                    </p>
            </div>
        </div>
    )
}

export default ProductCard