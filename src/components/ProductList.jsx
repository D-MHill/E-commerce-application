import React from "react";

export function ProductList({ product, cart, setCart }) {
	function handleClick() {
		setCart([...cart, product]);
	}

	return (
		<div key={product.title}>
			<h2>{product.title}</h2>
			<p>{product.desc}</p>
			<p>£{product.price}</p>
			<button onClick={handleClick}>
				{cart.find((item) => item.title === product.title)
					? "Added"
					: "Add to cart"}
			</button>
		</div>
	);
}
