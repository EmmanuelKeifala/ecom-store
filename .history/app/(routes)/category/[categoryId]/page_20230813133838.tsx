import getCategories from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import React from "react";

interface CategoryPageProps {
    params: {
        categoryId: string,
    },
    searchParams: {
        colorId: string,
        sizeId: string
    }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
    params, searchParams
}) => {
    const products = await getProducts({
        categoryId: params.categoryId,
        colorId: searchParams.colorId,
        sizeId: searchParams.sizeId
    })

    const sizes = await getSizes()
    const colors = await getColors()
    const category = await getCategories()
    return (
        <div>
            Category
        </div>
    )
}
export default CategoryPage;