'use client'

import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string"
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
        const current = qs.parse(searchParams.toString())
        const query = {
            ...current, [valueKey]: id
        }
        if(current[valueKey] == id){
            query[valueKey] = null
        }
        const url = qs.stringifyUrl({
            url: window.location.href
            
        })
    }
    return (
        <div></div>
    )
}
export default Filter;