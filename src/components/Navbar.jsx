import { Link } from "react-router-dom";
import "./Navbar.css";
import ShebaLogo from "../../public/Sheba1.png"; // Importing the image

export function Navbar() {
	return (
		<div className="navbar">
			<img src={ShebaLogo} alt="logo" /> 
			
			<Link to="/">
				<button className="navbutton">Home</button>
			</Link>
			<Link to="/shop">
				<button className="navbutton">Shop</button>
			</Link>
			<Link to="/contact">
				<button className="navbutton">Contact Us</button>
			</Link>
			<Link to="/cart">
				<button className="navbutton">Cart</button>
			</Link>
		</div>
	);
}
