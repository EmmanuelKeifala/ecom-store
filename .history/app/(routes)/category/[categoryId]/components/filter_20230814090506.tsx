'use client'

import { Color, Size } from "@/types";

interface FilterProps {
    data: (Size | Color)[]
    name: string
    valueKey: string
}
const Filter: React.FC<FilterProps> = ({
    data ,name}) =>  <div className="filter">
}) => {
    return (
        <div></div>
    )
}
export default Filter;