import React from 'react'
import { Company1, Company2, Company3, Company4, Company5 } from '../assets'

const Social = () => {
  return (
		<div className="py-24 px-32">
			<div className="flex justify-between flex-wrap">
				<img src={Company1} alt="" className="hover:scale-105 duration-100" />
				<img src={Company2} alt="" className="hover:scale-105 duration-100" />
				<img src={Company3} alt="" className="hover:scale-105 duration-100" />
				<img src={Company4} alt="" className="hover:scale-105 duration-100" />
				<img src={Company5} alt="" className="hover:scale-105 duration-100" />
			</div>
		</div>
	);
}

export default Social