/** @format */

import { create } from "zustand";

import { Product } from "@/types";

interface CartStore {
	items: Product[];
	addItem: (data: Product) => void;
	removeItem: (id: string) => void;
	removeAll: () => void;
}

const useCart = create<CartStore>((set) => ({
	
}));

export default useCart;
