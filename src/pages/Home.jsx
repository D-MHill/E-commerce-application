import React from "react";
import { Link } from "react-router-dom";
// import beauty1 from "../../public/beauty1.jpg";
import "./Home.css";

export function Home() {
	return (
		<div className="home">
			<div className="container">
				<h1>Everyday is good hair day</h1>
				<Link to="/shop">
					<button className="submit">Shop now</button>
				</Link>
			</div>
			{/* <img src={beauty1} alt="Beauty" className="image"/> */}
		</div>
	);
}
