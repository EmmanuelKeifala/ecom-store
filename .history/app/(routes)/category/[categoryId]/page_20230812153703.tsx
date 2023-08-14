interface CategoryPageProps {
    params: {
        categoryId: string,
    },
    searchParams: {
        colorId: string,
        sizeId: string
    }
}

const CategoryPage: React = () => {
    return (
        <div>
            Category
        </div>
    )
}
export default CategoryPage;