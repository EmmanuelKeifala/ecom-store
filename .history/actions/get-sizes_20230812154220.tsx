import { Sizes } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<Category[]> => {
    const res = await fetch(URL)

    return res.json()
}
export default getSizes;