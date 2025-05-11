const order = JSON.parse(localStorage.getItem('order')) || [];
const summary = document.getElementById('summary');

if (order.length === 0) {
	summary.innerHTML = '<p>Brak danych o zamówieniu.</p>';
} else {
	const total = order
		.reduce((sum, item) => {
			return sum + (item.price.main + item.price.fractional / 100) * item.quantity;
		}, 0)
		.toFixed(2);

	const list = document.createElement('ul');

	order.forEach((item) => {
		const li = document.createElement('li');
		li.classList.add('order-item');
		li.textContent = `${item.name} — ${item.quantity} szt. — ${(
			item.price.main +
			item.price.fractional / 100
		).toFixed(2)} zł`;
		list.appendChild(li);
	});
	summary.appendChild(list);
	list.classList.add('order-list');
	const totalEl = document.createElement('p');
	totalEl.textContent = `Łączna kwota: ${total} zł`;
	summary.appendChild(totalEl);
}

localStorage.removeItem('order');
