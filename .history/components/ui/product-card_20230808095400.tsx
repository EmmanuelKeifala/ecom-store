"use client"

import { Product } from "@/types"

interface ProductCardProps {
    data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    return (
        <div>
            Card
        </div>
    )
}

export default ProductCard;