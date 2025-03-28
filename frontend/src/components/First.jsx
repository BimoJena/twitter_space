import React from 'react'
import { Link } from 'react-router-dom'

function First() {
	return (
		<>
			<div>

				{/* navbar  */}
				<div className="navbar bg-black shadow-sm">
					<a className="btn btn-ghost text-xl font-bold">TALKING SPACE</a>
				</div>

				{/* container */}
				<div className='text-center mt-10 p-4'>

					<p className='mb-5 text-4xl font-semibold'>Welcome to <span className='text-yellow-500 font-bold'>Talking Space !!</span></p>
					<p className='leading-[30px] mb-3'>This is a space where you can express yourself freely, without fear of judgment. Share your experiences, concerns, and <span className='font-bold text-gray-500'>struggles related to the university</span>—whether it’s about unfair treatment, academic pressure, or personal issues. Feel free to mention specific events, names, or departments. This platform is about raising awareness and providing support, so others don’t have to face the same challenges alone.</p>
					<p className='text-yellow-500 font-semibold'>Let’s open the conversation and make a change together.</p>
					
					<div className='flex mt-10 space-x-4 justify-center'>
						<Link to={'/login'} className='border-2 border-yellow-500 text-yellow-500 hover:text-white hover:bg-yellow-500 font-semibold rounded-[10px] p-2 w-[100px]'>Login</Link>
						<Link to={'/register'} className='border-2 border-yellow-500 text-white bg-yellow-500 hover:text-yellow-500 hover:bg-black font-semibold rounded-[10px] p-2 w-[100px]'>Register</Link>
					</div>

				</div>

			</div>
		</>
	)
}

export default First