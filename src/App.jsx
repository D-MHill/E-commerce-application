import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";

function App() {
	const [cart, setCart] = useState([]);

	return (
		<Router>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route
						path="/shop"
						element={<Shop cart={cart} setCart={setCart} />}
					/>
					<Route path="/contact" element={<Contact />} />
					<Route
						path="/cart"
						element={<Cart cart={cart} setCart={setCart} />}
					/>
					{/* Pass setCart as prop */}
				</Route>
			</Routes>
		</Router>
	);
}

export default App;
