/** @format */

import { create } from "zustand";

import { Product } from "@/types";

interface CartStore {
    items: Product[];
    addItem: (data: Product) => void;
    removeItem: (id: string) => void
    
}

const useCart = create<CartStore>((set) => ({
	isOpen: false,
	data: undefined,
	onOpen: (data: Product) => set({ isOpen: true, data }),
	onClose: () => set({ isOpen: false }),
}));

export default useCart;
