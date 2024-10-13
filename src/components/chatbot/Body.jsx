/* eslint-disable no-unused-vars */ import { useState, useRef, useEffect } from "react";
import Header from "./Header";
import Sender from "./Sender";
import Receiver from "./Receiver";
import questions from "../../assets/choices";
import api from "../../assets/api"; 
import BotPress from './BotPress'

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
				<BotPress />
			</div>
		</>
	);
}

export default Body;
