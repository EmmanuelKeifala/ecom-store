import { Product } from "@/types";
import qs from "query-string"
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProducts = async (): Promise<Product[]> => {
    const url = qs.
    const res = await fetch(`${URL}/${id}`)

    return res.json()
}
export default getProducts;