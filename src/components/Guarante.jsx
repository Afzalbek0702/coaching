import React from "react";
import { GuaranteIcon } from "../assets";
const Guarante = () => {
	return (
		<div className="p-28 md:p-10 sm:p-4">
			<img src={GuaranteIcon} alt="" className="mx-auto" />
			<h1 className="text-6xl text-secondary font-bold text-center leading-tight mx-auto max-w-[538px] md:text-4xl sm:text-2xl">
				Guarantee
			</h1>
			<p className="text-lightPrimary text-center max-w-[400px] mx-auto mt-4">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua minim veniam.
			</p>
		</div>
	);
};

export default Guarante;
