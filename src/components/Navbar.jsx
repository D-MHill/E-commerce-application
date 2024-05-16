import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faShoppingCart,
	faHome,
	faShoppingBag,
	faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import ShebaLogo from "../../public/Sheba1.png";

export function Navbar() {
	return (
		<div className="navbar">
			<img src={ShebaLogo} alt="logo" />

			<Link to="/">
				<button className="navbutton">
					<FontAwesomeIcon icon={faHome} /> Home
				</button>
			</Link>
			<Link to="/shop">
				<button className="navbutton">
					<FontAwesomeIcon icon={faShoppingBag} /> Shop
				</button>
			</Link>
			<Link to="/contact">
				<button className="navbutton">
					<FontAwesomeIcon icon={faPhoneVolume} /> Contact Us
				</button>
			</Link>
			<Link to="/cart">
				<button className="navbutton">
					<FontAwesomeIcon icon={faShoppingCart} /> Cart
				</button>
			</Link>
		</div>
	);
}
