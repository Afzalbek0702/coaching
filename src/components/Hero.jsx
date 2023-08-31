import React from "react";
import { Image1 } from "../assets";
import Heroui from "./Heroui";
const Hero = () => {
   const p = "Proven strategies backed by science for success.";
   const title = "Live life at the full potential";
   const text = "I help people to discover their true potential and live a fulfilling life...Discover the simple 3 steps that I discovered to hack productivity. It just works and it is begin using backed by science. Wanna transform your life?";
	const btntext = 'Get your free guide now'
   return (
		<Heroui paragraf={p} title={title} text={text} button={btntext} image={Image1} />
	);
};

export default Hero;
