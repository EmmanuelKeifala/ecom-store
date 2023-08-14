'use client'

import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import 
interface FilterProps {
    data: (Size | Color)[]
    name: string
    valueKey: string
}
const Filter: React.FC<FilterProps> = ({
    data, name, valueKey
}) => {
    const searchParams = useSearchParams()
    const router = useRouter()

    const selectedValue = searchParams.get(valueKey)

    const onClick = (id: string) => {
        const current 
        }
    return (
        <div></div>
    )
}
export default Filter;