import getBillboards from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
export const revalidate = 0;
const HomePage = async () => {
    const products = await getProducts({
        isFeatured: true
    })
    const billboard = await getBillboards("9e335f40-ed80-46e6-afa8-3174233df596")
    return (
        <Container>
            <div className="space-y-10 pb-10 ">
                <Billboard data={billboard} />
            </div>
            <div className="flex flex-col gap-y-8 px-4 ">

            </div>
        </Container>
    )
}

export default HomePage;