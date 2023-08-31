import React from "react";

import { Image8 } from "../assets";
import { Booking, Faq,Footer,Guarante,Result, Test,Heroui } from "../components";

const p = "Proven strategies backed by science for success.";
const title = "Self Esteem Therapy";
const text =
	"I help people to discover their true potential and live a fulfilling life...Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?";
const btn = "Claim your spot";
const Salasepage = () => {
	return (
		<>
			<Heroui
				paragraf={p}
				title={title}
				text={text}
				button={btn}
				image={Image8}
         />
         <Faq />
         <Result />
         <Test />
         <Booking />
         <Guarante />
         <Footer/>
		</>
	);
};

export default Salasepage;
