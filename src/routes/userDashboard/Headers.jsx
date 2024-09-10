import { useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../assets/img/dashboardbg.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import logo from "../../assets/img/logo.png";
function Headers() {
	const navigate = useNavigate();

	const userData = useMemo(() => {
		return JSON.parse(localStorage.getItem("userData")) || {};
	}, []); // Memoize userData until localStorage changes

	useEffect(() => {
		if (!userData || Object.keys(userData).length === 0) {
			navigate("/");
		}
	}, [userData, navigate]); // userData now remains stable unless localStorage changes

	return (
		<>
			<div className="relative h-64">
				<div className="flex flex-row justify-between mx-4 mt-8 z-50 items-center">
					<Link to={"/"}>
						<ExitToAppIcon className="text-red-700 " />
					</Link>
					<img
						src={logo}
						alt=""
						className="w-8 rounded-full"
					/>
				</div>
				<img
					src={bg}
					alt=""
					className="absolute top-0 left-0 rounded-b-3xl shadow-2xl -z-10"
				/>
				<div className="absolute bottom-5 left-4 text-white ">
					<p className="font-extralight text-lg">
						Welcome! <span className="font-bold">{userData.first_name}</span>
					</p>
					<p className="text-xs mt-2">
						I know things might feel overwhelming right now, and that’s okay. Take a deep breath.
					</p>
				</div>
			</div>
		</>
	);
}

export default Headers;
