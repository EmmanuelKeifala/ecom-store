import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSizes = async (): Promise<Sizes[]> => {
    const res = await fetch(URL)

    return res.json()
}
export default getSizes;