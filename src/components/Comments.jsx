import React from "react";
import { Star,StarWhite, User1, User2,User3 } from "../assets";

const Comments = () => {
	return (
		<div className="px-32 bg-secondary w-full h-auto md:px-6 sm:px-3 pt-[140px] pb-52 md:pb-36 sm:pb-20 sm:pt-10">
			<h1 className="text-6xl text-secondary font-bold max-w-[600px] md:text-4xl sm:text-2xl">
				Hear out what my clients say about me.
			</h1>
			<div className="flex justify-around items-center flex-wrap mt-9">
				<div className="hover:scale-105 duration-100 w-[400px] h-[391px] bg-white p-10 mt-7 sm:p-2">
					<p className="text-2xl sm:text-xl">
						"I gained so much <span className="font-bold">confidence</span> in
						my ability to connect and deepen my relationships with people. "
					</p>
					<h2 className="text-2xl font-bold mt-4">Jane</h2>
					<img src={User1} alt="User" className="mt-4" />
					<div className="flex justify-start items-center mt-6 w-10">
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
						<img src={Star} alt="" className="mx-2" />
					</div>
				</div>
				<div className="hover:scale-105 duration-100 w-[400px] h-[391px] bg-white p-10 mt-7 sm:p-2">
					<p className="text-2xl sm:text-xl">
						"I gained so much confidence in my ability to connect and deepen my
						relationships with people. "
					</p>
					<h2 className="text-2xl font-bold mt-4">Catherine</h2>
					<img src={User2} alt="User" className="mt-4" />
					<div className="flex justify-start items-center mt-6 w-10">
						<img src={StarWhite} alt="" className="mx-2" />
						<img src={StarWhite} alt="" className="mx-2" />
						<img src={StarWhite} alt="" className="mx-2" />
						<img src={StarWhite} alt="" className="mx-2" />
						<img src={StarWhite} alt="" className="mx-2" />
					</div>
				</div>
				<div className="hover:scale-105 duration-100 w-[400px] h-[391px] bg-white p-10 mt-7 sm:p-2">
					<p className="text-2xl sm:text-xl">
						"I gained so much <span className="font-bold">confidence</span> in
						my ability to connect and deepen my relationships with people. "
					</p>
					<h2 className="text-2xl font-bold mt-4">Jane</h2>
					<img src={User3} alt="User" className="mt-4" />
					<div className="flex justify-start items-center mt-6 w-10">
						<img src={StarWhite} alt="" className="mx-2" />
						<img src={StarWhite} alt="" className="mx-2" />
						<img src={StarWhite} alt="" className="mx-2" />
						<img src={StarWhite} alt="" className="mx-2" />
						<img src={StarWhite} alt="" className="mx-2" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Comments;
