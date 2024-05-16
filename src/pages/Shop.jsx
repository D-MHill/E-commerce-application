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
		desc: "Infused with nourishing ingredients to effortlessly hydrate, detangle, and enhance your hair's natural shine and manageability, all day long.",
		price: 32,
	};

	const shampoo = {
		image: ShampooImage,
		title: "Secret Clean Shampoo",
		desc: "Gentle Cleanse Shampoo, meticulously crafted with nourishing botanicals for a soothing, nourishing cleanse",
		price: 23,
	};

	const conditioner = {
		image: ConditionerImage,
		title: "Secret Moist Conditioner",
		desc: "Nourishing Conditioner, enriched with botanical extracts to leave hair silky smooth and irresistibly soft after every wash",
		price: 26,
	};

	const Nourishingoil = {
		image: OilImage,
		title: "Secret Elixir",
		desc: "Infused Hair Oil crafted with a luxurious blend of botanical oils to replenish and restore hair's natural shine and vitality.",
		price: 15,
	};

	const brush = {
		image: BrushImage,
		title: "Tangle Free",
		desc: "Detangling brush engineered with innovative bristles to gently glide through knots and tangles, leaving your hair smooth, sleek, and magically manageable.",
		price: 33,
	};

	const cap = {
		image: CapImage,
		title: "Sleeping Beauty",
		desc: "Silk hair cap designed to gently protect and maintain your hairstyle while you sleep, leaving your locks smooth, frizz-free, and effortlessly glamorous.",
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
