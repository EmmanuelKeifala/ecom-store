/** @format */

import { create } from "zustand";

import { Product } from "@/types";

interface CartStore {
	isOpen: boolean;
	data?: Product;
	onOpen: (data: Product) => void;
	onClose: () => void;
}

const useCart = create<CartStore>((set) => ({
	isOpen: false,
	data: undefined,
	onOpen: (data: Product) => set({ isOpen: true, data }),
	onClose: () => set({ isOpen: false }),
}));

export default useCart;
