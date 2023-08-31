import React from "react";
import { Image5 } from "../assets";

const Booking = () => {
	return (
		<div className="bg-white">
			<div className="bg-secondary mx-32 lg:mx-20 md:mx-14 sm:mx-6 my-28 sm:my-16 md:my-20 px-16 md:px-7 flex flex-wrap justify-center items-center rounded-3xl overflow-hidden">
				<div className="lg:mt-16">
					<h1 className="text-4xl text-secondary font-bold max-w-[610px] md:text-3xl sm:text-xl">
						Get 15-Minutes Complimentary online session.
					</h1>
					<p className="text-lightPrimary text-xl max-w-[320px] mt-5 sm:mt-5">
						Limited Period Offer. Claim Now.
					</p>
					<button className="bg-primary w-[250px] h-[42px] rounded-xl mt-10 text-white md:w-[200px]">
						Book now
					</button>
				</div>
				<img
					src={Image5}
					alt=""
					className="translate-x-20 translate-y-5 xl:translate-x-0 xl:translate-y-0 mt-6"
				/>
			</div>
		</div>
	);
};

export default Booking;
