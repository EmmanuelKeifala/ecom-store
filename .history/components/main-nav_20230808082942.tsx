import { usePathname } from "next/navigation"

interface MainNavProps {
    data: any
}
const MainNav: React.FC<MainNavProps> = ({
    data
}) => {

    const pathname = usePathname()
    const routes = data.map((route) => ({
        href: `/category${route.id}`,
        label: route?.name,
    }))
    return (
        <nav>


        </nav>
    )
}
export default MainNav;