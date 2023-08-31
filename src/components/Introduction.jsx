import React from "react";
import { Book, Comment, People } from "../assets";

const Introduction = () => {
	return (
		<div className="px-28 bg-white w-full h-auto md:px-6 sm:px-3 pt-[96px]">
			<div className="flex-col mb-20">
				<div className="flex justify-around w-full items-start flex-wrap lg:block">
					<h1 className="text-6xl text-secondary font-bold max-w-[470px]  md:text-4xl sm:text-2xl">
						I can help you in these particular areas.
					</h1>
					<p className="text-primary text-lg max-w-[492px] mt-[18px]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua minim
						veniam. <br />
						<br /> Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque laudantium, totam rem aperiam,
						eaque ipsa quae ab illo inventore veritatis et quasi architecto
						beatae vitae dicta sunt explicabo.
					</p>
				</div>
				<div className="flex justify-around flex-wrap mt-4">
					<div className="sm:p-2 p-10 w-96 h-80">
						<img src={Book} alt="" />
						<h1 className="text-gray text-2xl font-bold mt-4">1:1 Coaching</h1>
						<p className="mt-4 text-[16px]  text-primary sm:text-xs ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua minim
							veniam.
						</p>
					</div>

					<div className="sm:p-2 p-10 w-96 h-80">
						<img src={Comment} alt="" />
						<h1 className="text-gray text-2xl font-bold mt-4">Consultation</h1>
						<p className="mt-4 text-[16px] text-primary sm:text-xl ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua minim
							veniam.
						</p>
					</div>

					<div className="sm:p-2 p-10 w-96 h-80">
						<img src={People} alt="" />
						<h1 className="text-gray text-2xl font-bold mt-4">1:1 Coaching</h1>
						<p className="mt-4 text-[16px] text-primary sm:text-xl ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua minim
							veniam.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Introduction;
