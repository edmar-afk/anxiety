import { useState } from "react";import { psychological } from "../../assets/choices"; // import the array
function Questions() {
	// State to store the selected answer for each question
	const [selectedAnswers, setSelectedAnswers] = useState({});

	const handleChoiceClick = (index, answer) => {
		setSelectedAnswers((prev) => ({
			...prev,
			[index]: answer, // Store the selected answer for the specific question index
		}));
	};

	const handleBackClick = () => {
		setSelectedAnswers({}); // Reset all selected answers when "Back" is clicked
	};

	return (
		<div>
			{psychological.map((test, index) => (
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
	);
}

export default Questions;
