import products from '../data/products.json';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';
import { Link } from 'react-router-dom';

export default function ProductList() {
	return (
		<div id="container">
			<h1>Produkty</h1>
			<Link to="/cart">Przejdź do koszyka</Link>
			<div className="cards">
				{products.map((product: Product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}
