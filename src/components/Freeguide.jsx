import React from "react";
import { Frame } from "../assets";
import Heroui from "./Heroui";

const Freeguide = () => {
   const title = 'Don’t miss out on my ‘Live life at the full potential’ free guide'
   const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. ";
   const btntext = "Get your free guide now";
   return (
      <Heroui title={title} text={text} button={btntext} image={Frame}/>
		// <div className="py-20 bg-secondary w-full h-auto">
		// 	<div className="px-32 md:px-6 sm:px-3 flex justify-between flex-wrap">
		// 		<div className="mt-36">
		// 			<h1 className="text-5xl text-secondary font-bold max-w-[610px] md:text-4xl sm:text-2xl">
		// 				Don’t miss out on my ‘Live life at the full potential’ free guide
		// 			</h1>
		// 			<p className="text-primary text-lg max-w-[450px] mt-[18px]">
		// 				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
		// 				eiusmod tempor incididunt ut labore et dolore magna aliqua minim
		// 				veniam. <br /><br /> Sed ut perspiciatis unde omnis iste natus error sit
		// 				voluptatem accusantium doloremque laudantium, totam rem aperiam,
		// 				eaque ipsa quae ab illo inventore veritatis et quasi architecto
		// 				beatae vitae dicta sunt explicabo.
		// 			</p>
		// 			<button className="bg-primary w-[250px] h-[42px] rounded-xl mt-[18px] text-white md:w-[200px]">
		// 				Get your free guide now
		// 			</button>
		// 		</div>
		// 		<img src={Frame} alt="" className="mt-[100px]" />
		// 	</div>
		// </div>
	);
};

export default Freeguide;
