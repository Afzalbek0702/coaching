import React from "react";
import { Facebook, Icon1, Icon2, Icon3, Logo } from "../assets";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<>
			<div className="bg-secondary py-12 flex flex-wrap justify-around items-center md-p-6 sm:p-4">
				<div className="flex-col justify-center">
					<h1 className="text-3xl text-secondary font-bold max-w-[610px] md:text-4xl sm:text-2xl">
						Get notified when I publish new articles
					</h1>
					<p className="text-primary text-xl  mt-[18px]">
						Stay up to date with the latest news, announcements, and articles.
					</p>
				</div>
				<form className="mt-8 sm:flex flex-col sm:items-center">
					<input
						type="text"
						placeholder="Enter your Email"
						className="border w-64 h-11 rounded-lg px-4 border-zinc-200 mr-2"
					/>
					<button className="bg-primary w-36 sm:w-64 h-10 rounded-lg text-white text-base ml-4 sm:mt-2 sm:ml-0">
						Subscribe
					</button>
				</form>
			</div>
			<div className="bg-white">
				<div className="flex justify-around p-16 sm:p-3 flex-wrap">
					<div className="m-3">
						<img src={Logo} alt="" />
						<p className="text-lightPrimary text-base max-w-[320px] mt-10 sm:mt-5">
							Design amazing digital experiences that create more happy in the
							world.
						</p>
					</div>

					{/* <div className="m-3">
						<h1 className="text-sm font-bold">Pages</h1>
						<ul>
							<li className="mt-4">
								<Link
									to={'/'}
									className="text-lightPrimary  hover:text-green  sm:pt-2"
								>
									Home
								</Link>
							</li>
							<li className="mt-4">
								<Link
									to={'/service'}
									className="text-lightPrimary  hover:text-green sm:pt-2"
								>
									Services
								</Link>
							</li>
							<li className="mt-4">
								<a
									href=""
									className="text-lightPrimary  hover:text-green sm:pt-2"
								>
									About us
								</a>
							</li>
							<li className="mt-4">
								<a
									href=""
									className="text-lightPrimary  hover:text-green sm:pt-2"
								>
									Extra Sales/Landingpage
								</a>
							</li>
						</ul>
					</div> */}

					<div className="m-3">
						<h1 className="text-sm font-bold">Contact</h1>
						<p className="text-lightPrimary mt-4 sm:pt-5">+123 456 789</p>
						<p className="text-lightPrimary mt-3 sm:pt-5">
							hello@happydigital.nl
						</p>
						<p className="text-lightPrimary mt-3 sm:pt-5">Instagram</p>
						<p className="text-lightPrimary mt-3 sm:pt-5">LinkedIn</p>
					</div>
				</div>
				<div className="flex justify-around flex-wrap my-10">
					<h1 className="flex justify-start items-center sm:text-xs">
						Made with a&nbsp;
						<img src={Icon3} alt="Icon" />
						&nbsp; by &nbsp;
						<span className="font-bold">HappyDigital</span>
					</h1>
					<ul className="flex justify-start sm:mt-5">
						<img src={Icon1} alt="Icon" />
						<img src={Facebook} alt="Icon" className="mx-6" />
						<img src={Icon2} alt="Icon" />
					</ul>
				</div>
			</div>
		</>
	);
};

export default Footer;
