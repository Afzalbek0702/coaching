import React from "react";
import { Bell, Calendar, Comment, Medal, Message } from "../assets";

const Faq = () => {
	return (
		<div className="py-24 px-32 md:py-10 md:px-10">
			<div className="text-center">
				<p className="text-sm text-lightPrimary">How does it work?</p>
				<h1 className="text-4xl text-secondary font-bold md:text-3xl sm:text-2xl">
					Are you ready to transform your life?
				</h1>
				<h2 className="text-xl text-lightPrimary mt-5 max-w-[768px] mx-auto">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua minim
					veniam.
				</h2>
			</div>
			<div className="mt-16 flex justify-between lg:justify-center flex-wrap">
				<div className="hover:scale-105 duration-100 w-[384px] h-[172px]">
					<div className="flex  justify-center items-center rounded-full bg-secondary w-12 h-12 mx-auto">
						<img src={Message} alt="" className="w-6" />
					</div>
					<h1 className="text-xl text-secondary font-bold text-center mt-5">
						Ready to start? Let’s talk!
					</h1>
					<p className="text-whitePrimary text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</p>
				</div>

				<div className="hover:scale-105 duration-100 w-[384px] h-[172px]">
					<div className="flex  justify-center items-center rounded-full bg-secondary w-12 h-12 mx-auto">
						<img src={Calendar} alt="" className="w-6" />
					</div>
					<h1 className="text-xl text-secondary font-bold text-center mt-5">
						Ready to start? Let’s talk!
					</h1>
					<p className="text-whitePrimary text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</p>
				</div>

				<div className="hover:scale-105 duration-100 w-[384px] h-[172px]">
					<div className="flex  justify-center items-center rounded-full bg-secondary w-12 h-12 mx-auto">
						<img src={Comment} alt="" className="w-6" />
					</div>
					<h1 className="text-xl text-secondary font-bold text-center mt-5">
						Ready to start? Let’s talk!
					</h1>
					<p className="text-whitePrimary text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</p>
				</div>

				<div className="hover:scale-105 duration-100 w-[384px] h-[172px] mt-12">
					<div className="flex  justify-center items-center rounded-full bg-secondary w-12 h-12 mx-auto">
						<img src={Medal} alt="" className="w-6" />
					</div>
					<h1 className="text-xl text-secondary font-bold text-center mt-5">
						Ready to start? Let’s talk!
					</h1>
					<p className="text-whitePrimary text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</p>
				</div>

				<div className="hover:scale-105 duration-100 w-[384px] h-[172px] mt-12">
					<div className="flex  justify-center items-center rounded-full bg-secondary w-12 h-12 mx-auto">
						<img src={Comment} alt="" className="w-6" />
					</div>
					<h1 className="text-xl text-secondary font-bold text-center mt-5">
						Ready to start? Let’s talk!
					</h1>
					<p className="text-whitePrimary text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</p>
				</div>

				<div className="hover:scale-105 duration-100 w-[384px] h-[172px] mt-12">
					<div className="flex  justify-center items-center rounded-full bg-secondary w-12 h-12 mx-auto">
						<img src={Bell} alt="" className="w-6" />
					</div>
					<h1 className="text-xl text-secondary font-bold text-center mt-5">
						Ready to start? Let’s talk!
					</h1>
					<p className="text-whitePrimary text-center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur
						adipiscing elit.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Faq;
