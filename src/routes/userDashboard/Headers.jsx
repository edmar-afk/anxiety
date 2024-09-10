import { useEffect, useMemo } from "react";import { useNavigate } from "react-router-dom";
import bg from "../../assets/img/dashboardbg.png";

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
