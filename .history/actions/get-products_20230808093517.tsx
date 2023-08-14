import { Product } from "@/types";
import qs from ""
const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

const getProducts = async (id: string): Promise<Billboard> => {
    const res = await fetch(`${URL}/${id}`)

    return res.json()
}
export default getProducts;