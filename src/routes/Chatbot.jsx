import Body from "../components/chatbot/Body";import messengerbg from "../assets/svg/messagebg.avif";

function Chatbot() {
	return (
		<>
			<div className="relative w-full h-screen">
				<img
					src={messengerbg}
					alt=""
					className="fixed inset-0 w-full h-full object-cover"
				/>
				<div className="relative z-10">
					<Body />
				</div>
			</div>
		</>
	);
}

export default Chatbot;
