import Button from "@/components/ui/Button";
import { ShoppingBag } from "lucide-react";

const NavbarActions = () => {
    return (
        <div className="ml-auto flex items-center gap-x-4">
            <Button>
                <ShoppingBag />
            </Button>

        </div>
    )
}
export default NavbarActions;