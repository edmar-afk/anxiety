/* eslint-disable react/prop-types */import comfortBot from "../../assets/img/comfortBot.png";
function Receiver({message}) {
	return (
		<>
			<div className="chat-message py-4">
				<div className="flex items-end justify-start">
					<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
						<span className="text-xs font-bold text-blue-600">Anxiety Ally</span>
						<div>
							<span className="px-4 font-bold py-2 rounded-lg inline-block rounded-bl-none bg-gray-300/80 text-gray-600">
								{message}
							</span>
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
