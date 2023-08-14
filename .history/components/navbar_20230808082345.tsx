import Container from "@/components/ui/container";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="border-b">
            <Container>
                <Link href={"/"} className="ml-4 flex lg">
                    <p>STORE</p>
                </Link>
            </Container>
        </div>
    )
}
export default Navbar;