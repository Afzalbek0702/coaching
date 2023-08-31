import React from 'react'
import { Correct, Xmark } from '../assets';

const Test = () => {
  return (
		<div className="bg-secondary p-28 md:p-12 sm:p-4">
			<div>
				<p className="text-lightPrimary text-center">
					This is not for everyone!
				</p>
				<h1 className="text-6xl text-secondary font-bold text-center leading-tight mx-auto max-w-[538px] md:text-4xl sm:text-2xl">
					This program is perfect for you if...
				</h1>
			</div>
			<div className='flex justify-center flex-wrap mt-11'>
				<div className="flex flex-col  p-10 sm:p-4 pb-28">
					<h1 className="text-xl text-secondary font-bold text-center ">
						This is NOT for you if...
					</h1>
					<div className="flex mt-12">
						<img src={Xmark} alt="" />
						<h2 className="ml-3 text-primary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</h2>
					</div>

					<div className="flex mt-11">
						<img src={Xmark} alt="" />
						<h2 className="ml-3 text-primary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</h2>
					</div>

					<div className="flex mt-11">
						<img src={Xmark} alt="" />
						<h2 className="ml-3 text-primary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</h2>
					</div>

					<div className="flex mt-11">
						<img src={Xmark} alt="" />
						<h2 className="ml-3 text-primary">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit
						</h2>
					</div>
				</div>
				<div>
					<div className="bg-white flex flex-col p-10 sm:p-4 pb-28">
						<h1 className="text-xl text-secondary font-bold text-center">
							This is NOT for you if...
						</h1>
						<div className="flex mt-12">
							<img src={Correct} alt="" />
							<h2 className="ml-3 text-primary">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit
							</h2>
						</div>

						<div className="flex mt-11">
							<img src={Correct} alt="" />
							<h2 className="ml-3 text-primary">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit
							</h2>
						</div>

						<div className="flex mt-11">
							<img src={Correct} alt="" />
							<h2 className="ml-3 text-primary">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit
							</h2>
						</div>

						<div className="flex mt-11">
							<img src={Correct} alt="" />
							<h2 className="ml-3 text-primary">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Test