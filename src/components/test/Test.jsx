import { useState } from "react";import { psychological } from "../../assets/choices";import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
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
		<div className="p-1 my-8">
			<div className="flex flex-row justify-between items-center p-4">
				<p className="font-bold">{testType === "psychological" ? "Psychological Test" : "Stress Test"}</p>
				<p
					onClick={toggleTestType}
					className="text-xs flex items-center font-bold">
					<SwapHorizOutlinedIcon fontSize="small" /> Switch
				</p>
			</div>

			<p className="text-xs -mt-4 p-4">
				Here’s a {testType.charAt(0).toUpperCase() + testType.slice(1)} test with five choices. The answer will reflect
				aspects of your personality based on your choice.
			</p>

			<div>
				{psychological
					.filter((test) => test.type === testType) // Filter based on the current test type
					.map((test, index) => (
						<div
							key={index}
							className={`mb-4 p-4 rounded ${testType === "stress" ? "bg-pink-600" : "bg-blue-600"} shadow-2xl`}>
							<p className="font-bold text-white mb-2">{test.question}</p>
							{test.choices.map((choice, idx) => {
								// Determine button color based on selected answer and test type
								const buttonClass =
									selectedAnswers[index] === choice.answer
										? testType === "stress"
											? "bg-pink-400"
											: "bg-blue-400"
										: selectedAnswers[index] === undefined
										? testType === "stress"
											? "bg-pink-900 hover:bg-pink-700"
											: "bg-blue-500 hover:bg-blue-700"
										: "hidden";

								return (
									<button
										key={idx}
										className={`block w-full text-left text-white p-2 rounded mb-2 ${buttonClass}`}
										onClick={() => handleChoiceClick(index, choice.answer)}
										style={{ display: buttonClass !== "hidden" ? "block" : "none" }}>
										{choice.option}: {choice.description}
									</button>
								);
							})}
							{/* Display the selected answer for this question, if any */}
							{selectedAnswers[index] && (
								<p className={`mt-4 text-white ${testType === "stress" ? "bg-pink-800" : "bg-blue-800"} p-2 rounded`}>
									Answer: {selectedAnswers[index]}
								</p>
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
