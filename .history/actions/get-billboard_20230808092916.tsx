import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getBill = async (): Promise<Category[]> => {
    const res = await fetch(URL)

    return res.json()
}
export default getBill;