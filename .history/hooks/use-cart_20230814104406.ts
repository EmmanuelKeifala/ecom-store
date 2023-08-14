/** @format */

import { create } from "zustand";

import { Product } from "@/types";

interface CartStore {
    items: Product[];
    addItem
}

const useCart = create<CartStore>((set) => ({
	isOpen: false,
	data: undefined,
	onOpen: (data: Product) => set({ isOpen: true, data }),
	onClose: () => set({ isOpen: false }),
}));

export default useCart;
