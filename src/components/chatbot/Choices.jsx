/* eslint-disable react/prop-types */
import questions from "../../assets/choices";
function Choices({ handleQuestionClick }) {
	return (
		<div className="sticky bottom-16 flex flex-row flex-wrap mb-20 bg-white/60 backdrop-blur-md">
			{questions.map((question) => (
				<p
					key={question.id}
					onClick={() => handleQuestionClick(question.question)} // Handle click
					className="text-white bg-blue-600 my-1 px-1.5 rounded-sm py-0.5 text-xs mx-2 cursor-pointer hover:bg-blue-700 transition">
					{question.question}
				</p>
			))}
		</div>
	);
}

export default Choices;
