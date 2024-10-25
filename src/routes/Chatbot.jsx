import Body from "../components/chatbot/Body";
import messengerbg from "../assets/img/chatbot.jpg";

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
