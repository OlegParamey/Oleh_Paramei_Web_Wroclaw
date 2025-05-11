import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import OrderTotal from '../components/OrderTotal';

export default function Cart() {
	const { state, dispatch } = useCart();
	const navigate = useNavigate();

	const total = state.reduce(
		(sum, item) =>
			sum + (item.price.main + item.price.fractional / 100) * item.quantity,
		0
	);

	function handleQtyChange(qtyValue: number, itemId: number): void {
		dispatch({
			type: 'CHANGE_QUANTITY',
			payload: {
				id: itemId,
				quantity: Number(qtyValue),
			},
		});
	}

	return (
		<div id="container">
			<h1>Koszyk</h1>
			<Link to="/">Powrót do produktów</Link>
			{state.length > 0 ? (
				<>
					<ul className="cart-list">
						{state.map((item) => (
							<li key={item.id} className="cart-item">
								<p style={{ minWidth: '280px' }}>
									{item.name} — {item.quantity} szt. —{' '}
									{(
										item.price.main +
										item.price.fractional / 100
									).toFixed(2)}{' '}
									zł/szt.
								</p>
								<input
									className="qty-input"
									type="number"
									value={item.quantity}
									min={1}
									max={10}
									onChange={(e) =>
										handleQtyChange(Number(e.target.value), item.id)
									}
								/>
								<button
									onClick={() =>
										dispatch({
											type: 'REMOVE_ITEM',
											payload: item.id,
										})
									}
								>
									Usuń
								</button>
							</li>
						))}
					</ul>
					<OrderTotal total={total.toFixed(2)} />
					<button onClick={() => navigate('/summary')}>
						Przejdź do podsumowania
					</button>
				</>
			) : (
				<h2>Koszyk jest pusty!</h2>
			)}
		</div>
	);
}
