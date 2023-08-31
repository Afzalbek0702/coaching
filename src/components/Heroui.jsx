import React from "react";

const Heroui = ({ paragraf, title, text, button, image }) => {
	return (
		<div className="px-0 bg-secondary w-full h-auto">
			<div className="px-32 md:px-6 sm:px-3 flex justify-between flex-wrap">
				<div>
					<p className="text-primary text-sm pt-[170px] md:pt-10">{paragraf}</p>
					<h1 className="text-6xl text-secondary font-bold max-w-[610px] md:text-4xl sm:text-2xl">
						{title}
					</h1>
					<p className="text-primary text-lg max-w-[450px] mt-[18px]">{text}</p>
					<button className="hover bg-primary px-7 py-2 md:px-1 rounded-xl mt-[18px] text-white md:w-[200px]">
						{button}
					</button>
				</div>
				<img src={image} alt="" className="my-12 w-[603px] h-[462px" />
			</div>
		</div>
	);
};

export default Heroui;
