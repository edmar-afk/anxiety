/* eslint-disable react/prop-types */
import { useState } from "react";import questions from "../../assets/choices";

function Choices({ handleQuestionClick }) {
	const [hiddenQuestions, setHiddenQuestions] = useState([]);

	const handleQuestionClickWithHide = (question) => {
		// Hide the selected question by adding its ID to the hiddenQuestions array
		setHiddenQuestions((prevHidden) => [...prevHidden, question.id]);
		// Pass the question text to the handler
		handleQuestionClick(question.question);
	};

	return (
		<div className="sticky bottom-4 flex flex-row flex-wrap items bg-white/60 backdrop-blur-md h-52 overflow-y-scroll">
			{questions.map(
				(question) =>
					// Only show questions that are not in hiddenQuestions
					!hiddenQuestions.includes(question.id) && (
						<p
							key={question.id}
							onClick={() => handleQuestionClickWithHide(question)}
							className="text-white bg-blue-600 my-1 px-1.5 rounded-sm py-0.5 text-xs mx-2 cursor-pointer hover:bg-blue-700 transition">
							{question.question}
						</p>
					)
			)}
		</div>
	);
}

export default Choices;
