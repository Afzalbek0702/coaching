import React from "react";
import { Aboutpage, Homepage, Salasepage, Servicepage } from "./pages";
import { Navbar,Nav } from "./components";
import { Route, Routes } from "react-router-dom";
const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/service" element={<Servicepage />} />
				<Route path="/about" element={<Aboutpage />} />
				<Route path="/extrapage" element={<Salasepage />} />
			</Routes>
		</>
	);
};

export default App;
