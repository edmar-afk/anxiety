import { Link } from "react-router-dom";import comfortBot from "../../assets/img/comfortBot.png";
import BackspaceIcon from "@mui/icons-material/Backspace";

function Header() {
	return (
		<>
			<Link
				to={"/user-dashboard"}
				className="fixed left-0 top-0 px-3 bg-white/70 backdrop-blur-xl w-full flex sm:items-center justify-between py-3 pt-8">
				<div className="relative flex items-center space-x-4 nb">
					<div className="relative">
						<img
							src={comfortBot}
							alt=""
							className="w-10 sm:w-16 h-10 sm:h-16 rounded-full border-4 border-blue-700"
						/>
					</div>
					<div className="flex flex-col leading-tight">
						<div className="text-sm mt-1 flex items-center">
							<span className="text-blue-700 mr-3">Anxiety Ally</span>
						</div>
						<span className="text-xs text-blue-100">Chatbot</span>
					</div>
				</div>
				<div className="flex items-center space-x-2 mr-4">
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
