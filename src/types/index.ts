export interface Price {
	main: number;
	fractional: number;
}

export interface Product {
	id: number;
	name: string;
	price: Price;
}

export interface CartItem extends Product {
	quantity: number;
}

export interface OrderTotalProps {
	total: number | string;
}
