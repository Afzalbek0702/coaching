import React from "react";
import { Book, Comment, People } from "../assets";

const Serviceintro = () => {
	return (
		<div className="px-28 bg-white w-full h-auto md:px-6 sm:px-3 pt-[96px]">
			<div className="flex-col mb-20">
				<h1 className="mx-auto text-center text-6xl text-secondary font-bold max-w-[680px]  md:text-4xl sm:text-2xl">
					I can help you in these particular areas.
				</h1>

				<div className="flex justify-center flex-wrap mt-32">
					<div className="hover:scale-105 duration-100 sm:p-2 md:p-7 p-20 w-[480px] h-[360px] sm:h-auto sm:pb-10 border border-slate-200 m-5">
						<img src={Book} alt="" />
						<h1 className="text-gray text-2xl font-bold mt-4">1:1 Coaching</h1>
						<p className="mt-4 text-[16px]  text-primary sm:text-xs ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua minim
							veniam.
						</p>
					</div>
					<div className="hover:scale-105 duration-100 sm:p-2 md:p-7 p-20 w-[480px] h-[360px] sm:h-auto sm:pb-10 border border-slate-200 m-5 mt-16">
						<img src={Book} alt="" />
						<h1 className="text-gray text-2xl font-bold mt-4">Online course</h1>
						<p className="mt-4 text-[16px]  text-primary sm:text-xs ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua minim
							veniam.
						</p>
					</div>
					<div className="hover:scale-105 duration-100 sm:p-2 md:p-7 p-20 w-[480px] h-[360px] sm:h-auto sm:pb-10 border border-slate-200 m-5">
						<img src={Comment} alt="" />
						<h1 className="text-gray text-2xl font-bold mt-4">Consultation</h1>
						<p className="mt-4 text-[16px] text-primary sm:text-xs ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua minim
							veniam.
						</p>
					</div>

					<div className="hover:scale-105 duration-100 sm:p-2 md:p-7 p-20 w-[480px] h-[360px] sm:h-auto sm:pb-10 border border-slate-200 m-5 mt-16">
						<img src={People} alt="" />
						<h1 className="text-gray text-2xl font-bold mt-4">
							Group Coaching Sessions
						</h1>
						<p className="mt-4 text-[16px] text-primary sm:text-xs ">
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

export default Serviceintro;
