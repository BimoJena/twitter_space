import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
	const [name, setName] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();
	const [message, setMessage] = useState(null);
	const [messageType, setMessageType] = useState("");


	const handleForm = (e) => {
		e.preventDefault()
		axios.post('http://localhost:5001/register', { name, email, password })
			.then(employee => {
				setMessage(`Welcome, ${name}! Registration successful.`);
				setMessageType("success");
				console.log(employee)
			})
			.catch(error => {
				setMessage("Registration failed. Please try again.");
				setMessageType("error");
				console.log(error);
			});
	}


	return (
		<>
			<div>

				{/* navbar  */}
				<div className="navbar bg-black shadow-sm">
					<a className="btn btn-ghost text-xl font-bold">TALKING SPACE</a>
				</div>

				{message && (
					<div className={`p-3 mt-3 text-white rounded-md ${messageType === "success" ? 'bg-green-500' : 'bg-red-500'}`}>
						{message}
					</div>
				)}


				{/* container */}
				<div className='mt-10 md:gap-x-5 flex justify-center align-center flex-col md:flex-row p-4 md:pt-12'>

					{/* <!-- Left Side --> */}
					<div className='md:w-[400px] mb-6 md:mb-0'>

						<form onSubmit={handleForm} className='flex flex-col space-y-4'>
							<h2 className='font-bold text-2xl text-yellow-500'>Registration Page</h2>
							<input
								type="text"
								name='name'
								placeholder='Enter your name'
								required
								className='p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								type="email"
								name='email'
								placeholder='Enter your email'
								required
								className='p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
								onChange={(e) => setEmail(e.target.value)}
							/>
							<input
								type="password"
								name='password'
								placeholder='Enter your password'
								required
								minLength="6"
								className='p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
								onChange={(e) => setPassword(e.target.value)}
							/>
							<button type='submit' className='bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600'>
								Register
							</button>
						</form>
					</div>

					{/* <!-- Right Side (Form) --> */}
					<div className='flex flex-col md:w-[500px] pt-5'>
						<p className='text-lg font-semibold'>
							Welcome to Talking Space. Join our community and make a change with your first tweet! Share your thoughts, connect with like-minded individuals, and be a part of a dynamic and supportive network. <br /><br />
							Express yourself freely and start meaningful conversations. Your voice matters, and together, we can bring about change—one tweet at a time.
							Ready to get started? <br />Register now and dive into the conversation! <br />

							Already have an account? {""}
							<Link to={'/login'} className='text-yellow-500 cursor-pointer underline'>Sign In</Link> to get started.
						</p>
					</div>
				</div>

			</div>
		</>
	)
}

export default Register