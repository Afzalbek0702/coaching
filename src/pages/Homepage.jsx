import React from "react";
import {Hero, Comments, Introduction, Blog, Freeguide, Footer, Booking } from "../components";
const Homepage = () => {
	return (
		<>
         
         <Hero />
         <Introduction/>
         <Comments />
         <Blog />
         <Freeguide />
         <Booking/>
         <Footer/>
		</>
	);
};

export default Homepage;
