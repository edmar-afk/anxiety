/* eslint-disable react/prop-types */import comfortBot from "../../assets/img/comfortBot.png";

function Receiver({msg}) {
	return (
		<>
			<div className="chat-message">
				<div className="flex items-end">
					<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
						<div>
							<span className="text-xs font-bold text-white">Anxiety Ally</span>
							<span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300/80 text-gray-600">{msg}</span>
						</div>
					</div>
					<img
						src={comfortBot}
						alt="My profile"
						className="w-6 h-6 rounded-full order-1"
					/>
				</div>
			</div>
		</>
	);
}

export default Receiver;
