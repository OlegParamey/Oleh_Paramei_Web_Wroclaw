import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import OrderTotal from '../components/OrderTotal';

export default function Summary() {
	const { state, dispatch } = useCart();
	const total = state.reduce(
		(sum, item) =>
			sum + (item.price.main + item.price.fractional / 100) * item.quantity,
		0
	);

	const handleSubmit = () => {
		window.localStorage.setItem('order', JSON.stringify(state));
		dispatch({ type: 'CLEAR_CART' });
		window.location.href = '/Oleh_Paramei_Web_Wroclaw/confirmation/confirmation.html';
	};

	return (
		<div id="container">
			<h1>Podsumowanie</h1>
			<Link to="/cart">Powrót do koszyka</Link>
			<ul className="cart-list">
				{state.map((item) => (
					<li key={item.id} className="cart-item">
						<p>{item.name}</p> — <p>{item.quantity}</p> szt. —{' '}
						<p>
							{(item.price.main + item.price.fractional / 100).toFixed(2)}{' '}
							zł
						</p>
					</li>
				))}
			</ul>
			<OrderTotal total={total.toFixed(2)} />
			<button onClick={handleSubmit}>Złóż zamówienie</button>
		</div>
	);
}
