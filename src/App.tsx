import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartProvider';
import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Summary from './pages/Summary';

export default function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ProductList />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/summary" element={<Summary />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	);
}
