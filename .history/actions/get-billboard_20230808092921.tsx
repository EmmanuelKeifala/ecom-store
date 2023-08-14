import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

const getBillboards = async (): Promise<Bi[]> => {
    const res = await fetch(URL)

    return res.json()
}
export default getBillboards;