/** @format */

import { create } from "zustand";
import p
import { Product } from "@/types";

interface CartStore {
	items: Product[];
	addItem: (data: Product) => void;
	removeItem: (id: string) => void;
	removeAll: () => void;
}

const useCart = create ((set) => ({
	
}));

export default useCart;
