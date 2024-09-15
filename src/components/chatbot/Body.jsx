/* eslint-disable no-unused-vars */import { useState, useRef, useEffect } from "react";import Header from "./Header";import Sender from "./Sender";
import Receiver from "./Receiver";
import questions from "../../assets/choices";
import api from "../../assets/api"; // Assuming this is a utility for making API requests

function Body() {
	const [userQuestion, setUserQuestion] = useState(""); // Store user question
	const [botResponse, setBotResponse] = useState(""); // Store chatbot response
	const [conversation, setConversation] = useState([]); // Store the entire conversation history
	const messagesEndRef = useRef(null); // Ref for the end of the messages container

	// Function to handle sending the question to the API
	const handleQuestionClick = async (question) => {
		setUserQuestion(question); // Update with user's question

		// Add user's question to the conversation history
		setConversation((prev) => [...prev, { sender: "user", message: question }]);

		// Set loading state to true and add "Searching..." to the conversation
		setConversation((prev) => [...prev, { sender: "bot", message: "Searching for an answer, please hold on…" }]);

		try {
			const response = await api.post("/api/chatbot/", {
				question, // Send the question to the chatbot API
			});

			if (response.status === 200) {
				const botMessage = response.data.answer;

				// Introduce a 1.5-second delay before updating with the actual response
				setTimeout(() => {
					setConversation((prev) => {
						const updatedConversation = [...prev];
						updatedConversation[updatedConversation.length - 1].message = botMessage;
						return updatedConversation;
					});
				}, 2000);
			} else {
				// Handle error response
				setTimeout(() => {
					setConversation((prev) => {
						const updatedConversation = [...prev];
						updatedConversation[updatedConversation.length - 1].message = "Something went wrong. Please try again.";
						return updatedConversation;
					});
				}, 1500); // 1.5 seconds delay
			}
		} catch (error) {
			// Handle network error
			setTimeout(() => {
				setConversation((prev) => {
					const updatedConversation = [...prev];
					updatedConversation[updatedConversation.length - 1].message = "Error communicating with the chatbot.";
					return updatedConversation;
				});
			}, 1500); // 1.5 seconds delay
		}
	};

	// Scroll to bottom whenever conversation changes
	useEffect(() => {
		if (messagesEndRef.current) {
			messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [conversation]);

	return (
		<>
			<div className="flex-1  justify-between flex flex-col h-full">
				<Header />
				<div className="bg-black/60 w-full h-screen fixed -z-50"></div>
				<div
					id="messages"
					className="flex flex-col justify-end h-full space-y-4 px-4 pb-44 pt-44 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
					{/* Map over the conversation history and render Sender/Receiver based on who sent the message */}
					{conversation.length > 0 ? (
						conversation.map((msg, index) =>
							msg.sender === "user" ? (
								<Sender
									key={index}
									msg={msg.message}
								/>
							) : (
								<Receiver
									key={index}
									msg={msg.message}
								/>
							)
						)
					) : (
						<p className="text-white text-center mt-44">Start a conversation by tapping the question below!</p>
					)}
					{/* Empty div to ensure scroll to bottom */}
					<div ref={messagesEndRef} />
				</div>

				<div className="fixed bottom-0 bg-black/70 backdrop-blur-xl p-2 pt-4 sm:mb-0 w-full">
					<div className="flex flex-row overflow-x-scroll space-x-4">
						{/* Render the list of questions */}
						{questions.map((question) => (
							<div
								key={question.id}
								className="text-xs bg-blue-600 text-white p-2 rounded-lg w-44 flex justify-center items-center text-center flex-shrink-0 cursor-pointer"
								onClick={() => handleQuestionClick(question.question)} // Handle click
							>
								{question.question}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Body;
