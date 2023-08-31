import React, { useState } from "react";
import { Logo } from "../assets";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Navbar = () => {
	const [open, setOpen] = useState(true);
	console.log(open);
	return (
		<div className="bg-white h-16 flex justify-between items-center px-20 md:px-6 sticky top-0 z-10 overflow-hidden">
			<Link to={"/"} className="">
				<img src={Logo} alt="" className="w-48 md:w-28" />
			</Link>

			<FaBarsStaggered
				onClick={() => setOpen(false)}
				className="hidden md:flex items-center mt-4 text-3xl"
			/>
			<ul className="flex items-center justify-evenly text-primary md:hidden">
				<li className="mx-3 hover:text-green">
					<Link to={"/"}>Home</Link>
				</li>
				<li className="mx-3 hover:text-green">
					<Link to={"/service"}>Services</Link>
				</li>
				<li className="mx-3 hover:text-green">
					<Link to={"/about"}>Aboute us</Link>
				</li>
				<li className="mx-3 hover:text-green">
					<Link to={"./extrapage"}>Extra Salespage</Link>
				</li>

				{/* <button className="w-48 bg-primary h-10 text-white rounded">Get your free guide now</button> */}
			</ul>
			<div
				className={`mobile hidden md:block ${
					open ? "translate-x-[300px]" : "translate-x-0"
				} `}
			>
				<ul className="flex-col  text-primary  w-full pl-6">
					<FaXmark
						onClick={() => setOpen(true)}
						className="hidden md:flex items-center mt-4 text-3xl"
					/>
					<li className="mt-6 hover:text-green">
						<Link to={"/"}>Home</Link>
					</li>
					<li className="mt-6 hover:text-green">
						<Link to={"/service"}>Services</Link>
					</li>
					<li className="mt-6 hover:text-green">
						<Link to={"/about"}>Aboute us</Link>
					</li>
					<li className="mt-6 hover:text-green">
						<Link to={"./extrapage"}>Extra Salespage</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
