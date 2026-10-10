import { ProductType } from "@/types/ProductType";
import Marquee from "react-marquee-text";
import "react-marquee-text/dist/styles.css"

type ProductsProp={
     products: ProductType[] 

}

const MarqueeText = ({ products }: ProductsProp) => {   


    return (
        <div>
            <Marquee direction="right" duration={15}>
                {products.map((product: ProductType) => <div className="bg-appBg" key={product.id}>
                    <span className="mx-1">{product.image}</span>
                    <span className="mx-1">{product.nameBn}</span>
                    <span className="mx-1">{product.today} টাকা/কেজি</span>
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
                </div>)}
            </Marquee>
        </div>
    )
}

export default MarqueeText