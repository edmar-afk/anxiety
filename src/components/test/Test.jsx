import Questions from "./Questions";
function Test() {
	return (
		<>
			<div className="p-4 my-8">
				<p className="font-bold">Psychological Test</p>
				<p className="text-xs">
					Here’s a Psychological test with five choices. The answer will reflect aspects of your personality based on
					your choice.
				</p>

				<Questions />
			</div>
		</>
	);
}

export default Test;
