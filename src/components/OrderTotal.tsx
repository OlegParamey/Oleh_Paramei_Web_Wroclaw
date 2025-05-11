import type { OrderTotalProps } from '../types';

function OrderTotal({ total }: OrderTotalProps) {
	return <p>Łącznie: {total} zł</p>;
}

export default OrderTotal;
