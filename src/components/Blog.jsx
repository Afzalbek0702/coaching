import React from "react";
import { Image2, Image3, Image4 } from "../assets";

const Blog = () => {
	return (
		<div className="my-24 min-h-screen">
			<h1 className="text-6xl text-secondary font-bold text-center max-w-[700px] mx-auto md:text-4xl sm:text-2xl">
				Stay Motivated, read the weekly blog articles.
			</h1>
			<div className="flex justify-evenly my-20 flex-wrap">
				<div className="hover:scale-105 duration-100 w-[356px]  m-10">
					<img src={Image2} alt="" />
					<div className="p-6 border border-zinc-200">
						<h1 className="text-secondary text-2xl font-bold sm:text-lg">
							Balancing your love and work life.
						</h1>
						<p className="text-primary text-lg sm:text-xs mt-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua minim
							veniam.
						</p>
					</div>
				</div>

				<div className="hover:scale-105 duration-100 w-[356px]  m-10">
					<img src={Image4} alt="" />
					<div className="p-6 border border-zinc-200">
						<h1 className="text-secondary text-2xl font-bold sm:text-lg">
							A short break from Social Media is important.
						</h1>
						<p className="text-primary text-lg sm:text-xs mt-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua minim
							veniam.
						</p>
					</div>
				</div>

				<div className="hover:scale-105 duration-100 w-[356px]  m-10">
					<img src={Image3} alt="" />
					<div className="p-6 border border-zinc-200">
						<h1 className="text-secondary text-2xl font-bold sm:text-lg">
							How to be 1% Better Every Day
						</h1>
						<p className="text-primary text-lg sm:text-xs mt-3">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua minim
							veniam.
						</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center px-5">
				<button className="bg-primary w-[250px] h-[42px] rounded-xl m-auto text-white md:w-[200px]">
					Read more blogs
				</button>
			</div>
		</div>
	);
};

export default Blog;
