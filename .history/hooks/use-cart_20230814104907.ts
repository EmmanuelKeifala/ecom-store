/** @format */

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Product } from "@/types";

interface CartStore {
	items: Product[];
	addItem: (data: Product) => void;
	removeItem: (id: string) => void;
	removeAll: () => void;
}

const useCart = create(persist<CartStore>(set, get) => (
    {
        items : [],
        addItem:(data: Product)=>{
            const currentItems = get().items
            const existingItem = currentItems.find(item => item.id === data.id)

            if(existingItem){
                return toast("Item")
            }
        }
    }
))

export default useCart;
