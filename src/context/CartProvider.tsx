import { useReducer } from 'react';
import { CartContext, cartReducer } from './CartContext';
import type { ReactNode } from 'react';

export function CartProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(cartReducer, []);
	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
}
