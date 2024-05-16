import React from "react";
import { ProductList } from "../components/ProductList";
import ShampooImage from "../../public/shampoo.png";
import ConditionerImage from "../../public/conditioner.png";
import LeaveinImage from "../../public/leavein.png";
import CapImage from "../../public/cap.png";
import BrushImage from "../../public/brush.png";
import OilImage from "../../public/oil.jpg";
import "./Shop.css";

export function Shop({ cart, setCart }) {
	const leavein = {
		image: LeaveinImage,
		title: "Style and go LeaveIn ",
		desc: "Leave In for light and shining style",
		price: 32,
	};

	const shampoo = {
		image: ShampooImage,
		title: "Secret Clean Shampoo",
		desc: "Gentle cleanse",
		price: 23,
	};

	const conditioner = {
		image: ConditionerImage,
		title: "Secret Moist Conditioner",
		desc: "Powerful moisturizer",
		price: 26,
	};

	const Nourishingoil = {
		image: OilImage,
		title: "Secret Elixir",
		desc: "Infused Hair Oil",
		price: 15,
	};

	const brush = {
		image: BrushImage,
		title: "Tangle Free",
		desc: "Detangling brush",
		price: 33,
	};

	const cap = {
		image: CapImage,
		title: "Sleeping Beauty",
		desc: "Silk hair cap",
		price: 10,
	};

	const products = [shampoo, conditioner, leavein, Nourishingoil, brush, cap];

	return (
		<div className="shop">
			{products.map((product, index) => (
				<ProductList
					key={index}
					product={product}
					cart={cart}
					setCart={setCart}
					className="product"
					imgClassName="product-img"
					infoClassName="product-info"
				/>
			))}
		</div>
	);
}
