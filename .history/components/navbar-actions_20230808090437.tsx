import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button className="flex items-center rounded-full bg-black ">
                <ShoppingBag size={20} color="white" />
            </Button>

        </div>
    )
}
export default NavbarActions;