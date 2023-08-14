"use client"

import { Product } from "@/types"

interface ProductCardProps {
    data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    return (
        <div className="bg-white group cursor-pointer rounded-xl border p-3 sp">
            Card
        </div>
    )
}

export default ProductCard;