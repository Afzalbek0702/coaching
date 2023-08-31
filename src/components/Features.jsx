import React from 'react'
import { Calendar, Comment, Icon4, Image1, Message } from '../assets';

const Features = () => {
  return (
		<div className="p-24 md:p-14 sm:p-2">
			<div>
				<p className="text-sm text-lightPrimary">How does it work?</p>
				<h1 className="text-6xl text-secondary font-bold max-w-[680px]  md:text-4xl sm:text-2xl">
					Are you ready to transform your life?
				</h1>
				<p className="text-xl max-w-[460px] mt-5 text-lightPrimary">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua minim
					veniam.
				</p>
			</div>
			<div className="flex mt-16 justify-between items-center flex-wrap">
				<div>
					<div className="max-w-lg mt-12">
						<div className="w-12 h-12 rounded-3xl bg-secondary flex items-center justify-center">
							<img src={Comment} alt="" className="w-5 h-5" />
						</div>

						<h1 className="text-secondary text-2xl font-bold mt-4">
							Talk to me first
						</h1>
						<p className="text-lightPrimary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>
					</div>

					<div className="max-w-lg mt-12">
						<div className="w-12 h-12 rounded-3xl bg-secondary flex items-center justify-center">
							<img src={Calendar} alt="" className="w-5 h-5" />
						</div>

						<h1 className="text-secondary text-2xl font-bold mt-4">
							Schedule a meeting
						</h1>
						<p className="text-lightPrimary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>
					</div>

					<div className="max-w-lg mt-12">
						<div className="w-12 h-12 rounded-3xl bg-secondary flex items-center justify-center">
							<img src={Icon4} alt="" className="w-5 h-5" />
						</div>

						<h1 className="text-secondary text-2xl font-bold mt-4">
							Online consultation
						</h1>
						<p className="text-lightPrimary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>
					</div>

					<div className="max-w-lg mt-12">
						<div className="w-12 h-12 rounded-3xl bg-secondary flex items-center justify-center">
							<img src={Message} alt="" className="w-5 h-5" />
						</div>

						<h1 className="text-secondary text-2xl font-bold mt-4">
							Ready to start? Let’s talk!
						</h1>
						<p className="text-lightPrimary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt.
						</p>
					</div>
				</div>
				<div className="mt-20">
					<img src={Image1} alt="" />
				</div>
			</div>
		</div>
	);
}

export default Features