
import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";
import getProducts from "@/actions/get-products";
import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import React from "react";
import Filter from "./components/filter";

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
    const category = await getCategory(params.categoryId)
    return (
        <div className="bg-white">
            <Container>
                <Billboard data={category.billboard} />
                <div className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="lg:grid lg:grid-cols-5 lg:gap-5">
                        {/* Filters */}

                        <div className="hidden lg:block">
                            <Filter valueKey="sizeId" name="sizes" data={sizes} />
                            <Filter valueKey="colorId" name="colors" data={colors} />

                        </div>
                        <div className="mt-6 lg:cols-span-4 lg:mt-0">
                            {products.length ==}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default CategoryPage;