import React from "react";

export function ProductList({ product, cart, setCart }) {
	function handleClick() {
		setCart([...cart, product]);
	}

	return (
		<div className="product" key={product.title}>
			<h2>{product.title}</h2>
			<img src={product.image} />
			<p>{product.desc}</p>
			<p>£{product.price}</p>
			<button onClick={handleClick} className="submit">
				{cart.find((item) => item.title === product.title)
					? "Added"
					: "Add to cart"}
			</button>
		</div>
	);
}
