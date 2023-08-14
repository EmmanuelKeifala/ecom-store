import { Category } from "@/types";
import id from "date-fns/locale/id/index";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getCategories = async (id: ): Promise<Category[]> => {
    const res = await fetch(`${URL}/${id}`)

    return res.json()
}
export default getCategories;