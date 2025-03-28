import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function Login() {
	const [name,setName] = useState();
	const [password,setPassword] = useState();
	const navigate = useNavigate();



	//my code
	/*
	const handleForm =(e)=>{
		e.preventDefault();
		// window.localStorage.setItem("isLoggedIn",true);
		axios.post('http://localhost:5001/login',{name,password})
		.then(result => {
			console.log(result);
			if(result.data == 'Success'){
				navigate('/home');
			}
			else{
				alert(result.data)
			}
		})
		.catch(err => {
			console.error(err);
			alert('error during login');
		})
	}
*/
	

	//gpt updated version
	const handleForm = (e) => {
		e.preventDefault();
		axios.post('http://localhost:5001/login', { name, password })
			.then(result => {
				console.log(result);
				if (result.data === 'Success') {
					toast.success(`Welcome back, ${name}!`, { position: "top-right" });
	
					// Store login state in localStorage
					localStorage.setItem("isLoggedIn", "true");
					localStorage.setItem("userName", name);
					
					navigate('/home');
				} else {
					toast.error(result.data, { position: "top-right" });
				}
			})
			.catch(err => {
				console.error(err);
				toast.error('Error during login. Please try again.', { position: "top-right" });
			});
	};
	

	return (
		<>
			<div>

				{/* navbar  */}
				<div className="navbar bg-black shadow-sm">
					<a className="btn btn-ghost text-xl font-bold">TALKING SPACE</a>
				</div>

				{/* container */}
				<div className='mt-10 md:gap-x-5 flex justify-center align-center flex-col md:flex-row p-4 md:pt-12'>

					{/* <!-- Left Side --> */}
					<div className='md:w-[500px] mb-6 md:mb-0'>
						<p className='text-lg font-semibold'>
							Welcome to Talking Space. Join our community and make a change with your first tweet! Share your thoughts, connect with like-minded individuals, and be a part of a dynamic and supportive network. <br /><br />
							Express yourself freely and start meaningful conversations. Your voice matters, and together, we can bring about change—one tweet at a time.
							Ready to get started? <br />Login now and dive into the conversation! <br />

							Don’t have an account? {""}
							<Link to={'/register'} className='text-yellow-500 cursor-pointer underline'>Sign Up</Link> to get started.
						</p>
					</div>

					{/* <!-- Right Side (Form) --> */}
					<div className='flex flex-col md:w-[400px]'>
						<form onSubmit={handleForm} className='flex flex-col space-y-4'>
							<h2 className='font-bold text-2xl text-yellow-500'>Login Page</h2>

							<input
								type="text"
								name='name'
								placeholder='Enter your name'
								required
								className='p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
								onChange={(e)=>setName(e.target.value)}
							/>
							<input
								type="password"
								name='password'
								placeholder='Enter your password'
								required
								minLength="6"
								className='p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500'
								onChange={(e)=>setPassword(e.target.value)}
							/>

							<button
								type='submit'
								className='bg-yellow-500 text-white font-semibold py-2 rounded-md hover:bg-yellow-600'
							>
								Login
							</button>
						</form>
					</div>

				</div>


			</div>
		</>
	)
}

export default Login