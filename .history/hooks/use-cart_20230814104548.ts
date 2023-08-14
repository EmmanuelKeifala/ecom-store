/** @format */

import { create } from "zustand";
import {persist, createJSONStorage} from "zustand"
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
