import { createContext, useContext } from 'react';
import type { CartItem, Product } from '../types';

type Action =
	| { type: 'ADD_ITEM'; payload: Product }
	| { type: 'REMOVE_ITEM'; payload: number }
	| { type: 'CHANGE_QUANTITY'; payload: { id: number; quantity: number } }
	| { type: 'CLEAR_CART' };

export type CartState = CartItem[];

export const CartContext = createContext<
	| {
			state: CartState;
			dispatch: React.Dispatch<Action>;
	  }
	| undefined
>(undefined);

export function useCart() {
	const context = useContext(CartContext);
	if (!context) throw new Error('useCart must be used within a CartProvider');
	return context;
}

export function cartReducer(state: CartState, action: Action): CartState {
	switch (action.type) {
		case 'ADD_ITEM': {
			const existing = state.find((item) => item.id === action.payload.id);
			if (existing) {
				return state.map((item) =>
					item.id === action.payload.id
						? { ...item, quantity: Math.min(item.quantity + 1, 10) }
						: item
				);
			}
			return [...state, { ...action.payload, quantity: 1 }];
		}
		case 'REMOVE_ITEM':
			return state.filter((item) => item.id !== action.payload);
		case 'CHANGE_QUANTITY':
			return state.map((item) =>
				item.id === action.payload.id
					? { ...item, quantity: Math.min(action.payload.quantity, 10) }
					: item
			);
		default:
			return state;
	}
}
