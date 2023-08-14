interface ProductPageProps {
    params: {
        productId: string;
    },
}
const ProductPage: React.FC<ProductPageProps> = async ({
    params
}) => {
    
    return (
        <div>
            Hello
        </div>
    )
}
export default ProductPage;