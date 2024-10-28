/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Sender from "./Sender";
import Receiver from "./Receiver";
import questions from "../../assets/choices";
import api from "../../assets/api";
import Choices from "./Choices";
import SmartToyIcon from "@mui/icons-material/SmartToy";

function Body() {
	const [conversation, setConversation] = useState([]); // State to store conversation
	const [inputMessage, setInputMessage] = useState(""); // State for the input field
	const [loading, setLoading] = useState(false); // Loading state for bot response
	const [errorMessage, setErrorMessage] = useState(""); // Error message state
	const bottomRef = useRef(null); // Reference for the bottom of the conversation

	// Handle sending the question to the API
	const handleQuestionClick = async (question) => {
		const timeSent = new Date().toLocaleTimeString(); // Get current time

		// Add the user's question to the conversation
		setConversation((prevConversation) => [...prevConversation, { sender: "user", content: question, timeSent }]);

		setLoading(true); // Start loading state for bot response
		setErrorMessage(""); // Clear any previous error message

		try {
			const result = await api.post("/api/chatbot/", { question });

			// Simulate a delay for the bot's response
			setTimeout(() => {
				// Add the bot's response to the conversation with time sent
				setConversation((prevConversation) => [
					...prevConversation,
					{ sender: "bot", content: result.data.answer, timeSent: new Date().toLocaleTimeString() },
				]);
				setLoading(false); // End loading state after the response is added
			}, 2000); // 2000 milliseconds = 2 seconds
		} catch (error) {
			console.error(error);
			setErrorMessage("Failed to fetch bot response. Please try again.");
			setConversation((prevConversation) => [
				...prevConversation,
				{ sender: "bot", content: "Error fetching response", timeSent: new Date().toLocaleTimeString() },
			]);
			setLoading(false); // Ensure loading state is ended on error
		}
	};

	// Handle sending the message from the input field
	const handleSendMessage = () => {
		if (inputMessage.trim()) {
			handleQuestionClick(inputMessage); // Reuse the same logic for input field submission
			setInputMessage(""); // Clear the input field after sending
		}
	};

	// Scroll to the bottom when the conversation updates
	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [conversation]);

	return (
		<>
			<div className="flex-1 justify-between flex flex-col h-full">
				<Header />
				<div className="bg-white/60 w-full h-screen fixed -z-50"></div>

				{/* Display the conversation between user and bot */}
				<div className="p-4 overflow-y-auto flex flex-col pt-44 pb-24">
					{conversation.map((message, index) =>
						message.sender === "user" ? (
							<Sender
								key={index}
								message={message.content}
							/>
						) : (
							<Receiver
								key={index}
								message={message.content}
							/>
						)
					)}
					{/* Invisible div to maintain scroll position */}
					<div ref={bottomRef} />
				</div>

				{/* Display error message if any */}
				{errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

				{/* Display loading indicator when the bot is processing */}
				{loading && <p className="text-green-500 text-center mb-4">Chatbot is thinking...</p>}

				<Choices handleQuestionClick={handleQuestionClick} />

				<form
					className="fixed bottom-2 w-full"
					onSubmit={(e) => {
						e.preventDefault();
						handleSendMessage(); // Handle sending message on form submit
					}}>
					<label
						htmlFor="send"
						className="mb-2 text-sm font-medium text-gray-900 sr-only">
						Ask me if you need help
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
							<SmartToyIcon className="text-blue-400" />
						</div>
						<input
							type="text"
							id="send"
							className="block p-4 ps-10 w-[300px] text-sm text-gray-900 rounded-lg bg-gray-50 ring-0 focus:ring-0 focus:outline-none"
							placeholder="Ask me if you need help"
							value={inputMessage}
							onChange={(e) => setInputMessage(e.target.value)} // Update input field
							required
						/>

						<button
							type="submit"
							className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
							Send
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Body;
