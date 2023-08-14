"use client"

import { Product } from "@/types"

interface ProductCardProps {
    data: Product;
}
const ProductCard: React.FC<ProductCardProps> = () => {
    return (
        <div>
            Card
        </div>
    )
}

export default ProductCard'