'use client'

import { Color, Size } from "@/types";
import { useSearchParams } from "next/navigation";

interface FilterProps {
    data: (Size | Color)[]
    name: string
    valueKey: string
}
const Filter: React.FC<FilterProps> = ({
    data, name, valueKey
}) => {
    const searchParams = useSearchParams()
    return (
        <div></div>
    )
}
export default Filter;