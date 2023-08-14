import getBillboards from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
export const revalidate = 0;
const HomePage = async () => {
    const billboard = await getBillboards("9e335f40-ed80-46e6-afa8-3174233df596")
    return (
        <Container>
            <div className="space-y-10 pb-10 ">
                <Billboard data={b}/>
            </div>
        </Container>
    )
}

export default HomePage;