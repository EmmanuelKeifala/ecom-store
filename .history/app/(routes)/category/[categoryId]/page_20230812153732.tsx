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

const CategoryPage: React.FC<CategoryPageProps> = ({
    params, s
}) => {
    return (
        <div>
            Category
        </div>
    )
}
export default CategoryPage;