import { useState } from "react";import { psychological } from "../../assets/choices";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";

function Test() {
	// State to store the selected answer for each question
	const [selectedAnswers, setSelectedAnswers] = useState({});
	const [testType, setTestType] = useState("psychological"); // State to track the current test type

	const handleChoiceClick = (index, answer) => {
		setSelectedAnswers((prev) => ({
			...prev,
			[index]: answer, // Store the selected answer for the specific question index
		}));
	};

	const handleBackClick = () => {
		setSelectedAnswers({}); // Reset all selected answers when "Back" is clicked
	};

	const toggleTestType = () => {
		setTestType((prev) => (prev === "psychological" ? "stress" : "psychological")); // Toggle between test types
		setSelectedAnswers({}); // Reset the selected answers when toggling test types
	};

	return (
		<div className="p-4 my-8">
			<div className="flex flex-row justify-between items-center mb-4">
				<p className="font-bold">{testType === "psychological" ? "Psychological Test" : "Stress Test"}</p>
				<p
					onClick={toggleTestType}
					className="text-xs flex items-center font-bold">
					<SwapHorizOutlinedIcon fontSize="small" /> Switch
				</p>
			</div>

			<p className="text-xs mb-4">
				Here’s a {testType.charAt(0).toUpperCase() + testType.slice(1)} test with five choices. The answer will reflect
				aspects of your personality based on your choice.
			</p>

			<div>
				{psychological
					.filter((test) => test.type === testType) // Filter based on the current test type
					.map((test, index) => (
						<div
							key={index}
							className="mb-4 bg-blue-600 p-4 rounded">
							<p className="font-bold text-white mb-2">{test.question}</p>
							{test.choices.map((choice, idx) => {
								// Show only the selected choice or all choices if none is selected
								if (selectedAnswers[index] === choice.answer) {
									return (
										<button
											key={idx}
											className="block w-full text-left bg-blue-400 text-white p-2 rounded mb-2">
											<b>{choice.option}</b>: {choice.description}
										</button>
									);
								}
								// Show all choices if no answer has been selected yet
								if (selectedAnswers[index] === undefined) {
									return (
										<button
											key={idx}
											className="block w-full text-left bg-blue-500 text-white p-2 rounded mb-2 hover:bg-blue-700"
											onClick={() => handleChoiceClick(index, choice.answer)}>
											{choice.option}: {choice.description}
										</button>
									);
								}
								return null; // Hide other choices if one is selected
							})}
							{/* Display the selected answer for this question, if any */}
							{selectedAnswers[index] && (
								<p className="mt-4 text-white bg-blue-800 p-2 rounded">Answer: {selectedAnswers[index]}</p>
							)}
						</div>
					))}
				{/* Back button to reset selection */}
				{Object.keys(selectedAnswers).length > 0 && (
					<button
						className="mt-4 bg-gray-500 text-white p-2 rounded hover:bg-gray-700"
						onClick={handleBackClick}>
						Back
					</button>
				)}
			</div>
		</div>
	);
}

export default Test;
