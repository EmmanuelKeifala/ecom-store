import usePath

interface MainNavProps {
    data: any
}
const MainNav: React.FC<MainNavProps> = ({
    data
}) => {

    const pathname = usePathname()
    return (
        <nav>


        </nav>
    )
}
export default MainNav;