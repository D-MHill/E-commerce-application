import React from "react";
import { Link } from "react-router-dom";
// import beauty1 from "../../public/beauty1.jpg";
import "./Home.css";

export function Home() {
	return (
		<div className="home">
			<h1>Hair shop</h1>
			{/* <img src={beauty1} alt="Beauty" /> */}
			<Link to="/shop">
				<button>Shop now</button>
			</Link>
		</div>
	);
}
