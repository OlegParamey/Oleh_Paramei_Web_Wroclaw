import type { Product } from '../types';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
	const { dispatch } = useCart();

	const handleAdd = () => {
		dispatch({ type: 'ADD_ITEM', payload: product });
	};

	return (
		<div className="card">
			<h3>{product.name}</h3>
			<p>
				Cena: {product.price.main}.
				{product.price.fractional.toString().padStart(2, '0')} zł
			</p>
			<button onClick={handleAdd}>Dodaj do koszyka</button>
		</div>
	);
}
