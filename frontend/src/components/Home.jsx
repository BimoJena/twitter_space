// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function Home() {
// 	const navigate = useNavigate();
// 	const [userName, setUserName] = useState('');
// 	const [message, setMessage] = useState('');
// 	const [messages, setMessages] = useState([]); // Store messages

// 	useEffect(() => {
// 		const isLoggedIn = localStorage.getItem("isLoggedIn");
// 		const storedUserName = localStorage.getItem("userName");

// 		if (!isLoggedIn) {
// 			navigate('/login');
// 		} else {
// 			setUserName(storedUserName || 'User');
// 		}

// 		// Fetch messages from backend
// 		axios.get('http://localhost:5001/messages')
// 			.then(res => setMessages(res.data))
// 			.catch(err => console.log(err));
// 	}, [navigate]);

// 	// Function to handle message submission
// 	const handlePostMessage = () => {
// 		if (message.trim() === '') return; // Prevent empty messages

// 		const newMessage = { user: userName, text: message };

// 		// Save message to backend
// 		axios.post('http://localhost:5001/messages', newMessage)
// 			.then(res => {
// 				setMessages([res.data, ...messages]); // Add new message at the top
// 				setMessage(''); // Clear input field
// 			})
// 			.catch(err => console.log(err));
// 	};

// 	return (
// 		<>
// 			<div className="flex flex-col min-h-screen">
// 				{/* Navbar */}
// 				<div className="navbar fixed top-0 w-full flex justify-between bg-black shadow-sm px-4 py-2 z-50">
// 					<a className="btn btn-ghost md:text-xl text-[16px] font-bold">TALKING SPACE</a>
// 					<div className="flex items-center space-x-4">
// 						<span className="text-gray-400 font-semibold">{userName}</span>
// 						<button
// 							onClick={() => {
// 								localStorage.clear();
// 								navigate('/login');
// 							}}
// 							className='p-1 border-2 rounded px-4 text-white'
// 						>
// 							Logout
// 						</button>
// 					</div>
// 				</div>

// 				{/* Content */}
// 				<div className="flex-1 overflow-y-auto mt-12 p-4">
// 					{messages.length === 0 ? (
// 						<p className="text-center text-gray-500">No messages yet. Be the first to post!</p>
// 					) : (
// 						messages.map((msg, index) => (
// 							<div key={index} className="p-3 border-b">
// 								<strong className='text-yellow-500'>{msg.user}:</strong> {msg.text} <br />
// 								<small className="text-gray-500">{new Date(msg.timestamp).toLocaleString()}</small>
// 							</div>
// 						))
// 					)}
// 				</div>

// 				{/* Input Field at Bottom */}
// 				<div className="fixed bottom-0 w-full p-4 flex items-center border-t bg-black">
// 					<input
// 						type="text"
// 						className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
// 						placeholder="Write something..."
// 						value={message}
// 						onChange={(e) => setMessage(e.target.value)}
// 					/>
// 					<button
// 						className="ml-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
// 						onClick={handlePostMessage}
// 					>
// 						Post
// 					</button>
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default Home;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Home() {
	const navigate = useNavigate();
	const [userName, setUserName] = useState('');
	const [message, setMessage] = useState('');
	const [messages, setMessages] = useState([]); // Store messages

	useEffect(() => {
		const isLoggedIn = localStorage.getItem("isLoggedIn");
		const storedUserName = localStorage.getItem("userName");

		if (!isLoggedIn) {
			navigate('/login');
		} else {
			setUserName(storedUserName || 'User');
		}

		// Fetch messages from backend
		axios.get('http://localhost:5001/messages')
			.then(res => setMessages(res.data))
			.catch(err => console.log(err));
	}, [navigate]);

	// Function to handle message submission
	const handlePostMessage = () => {
		if (message.trim() === '') return; // Prevent empty messages

		const newMessage = { user: userName, text: message };

		// Save message to backend
		axios.post('http://localhost:5001/messages', newMessage)
			.then(res => {
				setMessages([res.data, ...messages]); // Add new message at the top
				setMessage(''); // Clear input field
			})
			.catch(err => console.log(err));
	};

	return (
		<>
			<div className="flex flex-col min-h-screen">
				{/* Navbar */}
				<div className="navbar fixed top-0 w-full flex justify-between bg-black shadow-sm px-4 py-2 z-50">
					<a className="btn btn-ghost md:text-xl text-[16px] font-bold">TALKING SPACE</a>
					<div className="flex items-center space-x-4">
						<span className="text-gray-400 font-semibold">{userName}</span>
						<button
							onClick={() => {
								localStorage.clear();
								navigate('/login');
							}}
							className='p-1 border-2 rounded px-4 text-white'
						>
							Logout
						</button>
					</div>
				</div>

				{/* Content */}
				<div className="flex-1 overflow-y-auto mt-12 p-4">
					{messages.length === 0 ? (
						<p className="text-center text-gray-500">No messages yet. Be the first to post!</p>
					) : (
						messages.map((msg, index) => (
							<div 
								key={index} 
								className={`p-3  ${msg.user === userName ? 'bg-zinc-800' : 'bg-zinc-900'} `}
							>
								<strong className={msg.user === userName ? 'text-yellow-800' : 'text-yellow-500'}>
									{msg.user}:
								</strong> {msg.text} <br />
								<small className="text-gray-500">{new Date(msg.timestamp).toLocaleString()}</small>
							</div>
						))
					)}
				</div>

				{/* Input Field at Bottom */}
				<div className="fixed bottom-0 w-full p-4 flex items-center border-t bg-black">
					<input
						type="text"
						className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
						placeholder="Write something..."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
					<button
						className="ml-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
						onClick={handlePostMessage}
					>
						Post
					</button>
				</div>
			</div>
		</>
	);
}

export default Home;
