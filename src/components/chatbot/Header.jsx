import { Link } from "react-router-dom";
import comfortBot from "../../assets/img/comfortBot.png";
import BackspaceIcon from "@mui/icons-material/Backspace";

function Header() {
	return (
		<>
			<Link to={'/user-dashboard'} className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200 mx-4 pt-12">
				<div className="relative flex items-center space-x-4">
					<div className="relative">
						<span className="absolute text-green-500 right-0 bottom-0">
							<svg
								width="20"
								height="20">
								<circle
									cx="8"
									cy="8"
									r="8"
									fill="currentColor"></circle>
							</svg>
						</span>
						<img
							src={comfortBot}
							alt=""
							className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
						/>
					</div>
					<div className="flex flex-col leading-tight">
						<div className="text-sm mt-1 flex items-center">
							<span className="text-gray-700 mr-3">Anxiety Ally</span>
						</div>
						<span className="text-xs text-gray-600">Chatbot</span>
					</div>
				</div>
				<div className="flex items-center space-x-2">
					<button
						type="button"
						className="inline-flex items-center justify-center rounded-lg border border-red-700 h-10 w-10 transition duration-500 ease-in-out text-red-500 hover:bg-red-300 focus:outline-none">
						<BackspaceIcon />
					</button>
				</div>
			</Link>
		</>
	);
}

export default Header;
