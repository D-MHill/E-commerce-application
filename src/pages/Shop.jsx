import React from "react";
import { ProductList } from "../components/ProductList";

export function Shop({ cart, setCart }) {
	const leavein = {
		title: "Style and go",
		desc: "Leave In for light and shining style",
		price: 32,
	};

	const shampoo = { title: "Magic Clean", desc: "Gentle cleanse", price: 23 };
	const conditioner = {
		title: "Magic Moist",
		desc: "Powerful moisturizer",
		price: 26,
	};

	const products = [shampoo, conditioner, leavein];

	return (
		<div>
			{products.map((product, index) => (
				<ProductList
					key={index}
					product={product}
					cart={cart}
					setCart={setCart}
				/>
			))}
		</div>
	);
}
