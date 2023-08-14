interface ProductPageProps {
    params: {
        productId: string;
    },
}
const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    const suggestedProducts = await getProducts({
        categoryId: product?.category?.id
    });
    return (
        <div>
            Hello
        </div>
    )
}
export default ProductPage;