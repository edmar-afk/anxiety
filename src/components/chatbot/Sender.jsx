/* eslint-disable react/prop-types */
import Person3Icon from "@mui/icons-material/Person3";


function Sender({ message }) {
	return (
		<>
			<div className="chat-message">
				<div className="flex items-end justify-end">
					<div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
						<span className="font-bold -mb-2 mr-2 text-blue-600">You</span>
						<div>
							<span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600/80 text-white ">{message}</span>
						</div>
					</div>
					<Person3Icon className="order-2 text-blue-700"/>
				</div>
			</div>
		</>
	);
}

export default Sender;
