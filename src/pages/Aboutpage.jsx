import React from "react";
import {Image7 } from "../assets";
import {Comments, Faq, Footer, Social,Heroui} from "../components";
const p = "Proven strategies backed by science for success.";
const title = "About me";
const text =
	"I help people to discover their true potential and live a fulfilling life...Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?";
const btntext = "Get your free guide now";
const Aboutpage = () => {
	return (
		<>
			<Heroui
				paragraf={p}
				title={title}
				text={text}
				button={btntext}
				image={Image7}
         />
         <Social />
         <Comments />
         <Faq />
         <Footer/>
		</>
	);
};

export default Aboutpage;
