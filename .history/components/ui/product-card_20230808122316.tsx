"use client"

import { Product } from "@/types"

interface ProductCardProps {
    data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    return (
        <div className="bg-white groupcursor">
            Card
        </div>
    )
}

export default ProductCard;