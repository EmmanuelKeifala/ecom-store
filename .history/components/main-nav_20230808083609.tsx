import { usePathname } from "next/navigation"
import  Link  from "next/link"
import { cn } from "@/lib/utils"
interface MainNavProps {
    data: any
}
const MainNav: React.FC<MainNavProps> = ({
    data
}) => {

    const pathname = usePathname()
    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route?.name,
        active: pathname === `/category/${route.id}`
    }))
    return (
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 ">
            {routes.map((route) => (
                <Link key={route.href} href={route.href} className={cn("text-sm font-mde")}>
                    {route.label}
                </Link>
            ))}
        </nav>
    )
}
export default MainNav;