import getBillboards from "@/actions/get-billboard";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
export const revalidate = 0;
const HomePage = async () => {
    const billboard = await getBillboards()
    return (
        <Container>
            <div className="space-y-10 pb-10 ">
                <Billboard />
            </div>
        </Container>
    )
}

export default HomePage;