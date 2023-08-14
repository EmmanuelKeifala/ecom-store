import Container from "@/components/ui/container";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="border-b">
            <Container>
                <div>
                <Link href={"/"} className="ml-4 flex lg:ml-0 gap-x-2 ">
                    <p className="font-bold text-xl">STORE</p>
                </Link>
            </Container>
        </div>
    )
}
export default Navbar;