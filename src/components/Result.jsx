import React from "react";
import { Star, User1 } from "../assets";

function Result() {
	return (
		<div>
			<div className="p-32 md:p-10">
				<p className="text-lightPrimary ">Testimonials</p>
				<h1 className="text-6xl text-secondary font-bold md:text-4xl sm:text-2xl">
					Results that speak for themselves
				</h1>
			</div>
			<div className="flex justify-center flex-wrap p-16 md:p-6">
				<div className="w-[450px]  px-7 flex flex-col m-5">
					<h1 className="text-base text-secondary text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</h1>
					<img src={User1} alt="" className="mx-auto mt-8" />
					<h2 className="text-center mt-4">Naam</h2>
					<div className="flex mt-6 mx-auto ">
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
					</div>
				</div>

				<div className="w-[450px]  px-7 flex flex-col m-5">
					<h1 className="text-base text-secondary text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</h1>
					<img src={User1} alt="" className="mx-auto mt-8" />
					<h2 className="text-center mt-4">Naam</h2>
					<div className="flex mt-6 mx-auto ">
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
					</div>
				</div>

				<div className="w-[450px] px-7 flex flex-col m-5">
					<h1 className="text-base text-secondary text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</h1>
					<img src={User1} alt="" className="mx-auto mt-8" />
					<h2 className="text-center mt-4">Naam</h2>
					<div className="flex mt-6 mx-auto ">
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
					</div>
				</div>

				<div className="w-[450px] px-7 flex flex-col m-5">
					<h1 className="text-base text-secondary text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</h1>
					<img src={User1} alt="" className="mx-auto mt-8" />
					<h2 className="text-center mt-4">Naam</h2>
					<div className="flex mt-6 mx-auto ">
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Result;
