import bg from "../../assets/img/dashboardbg.png";
function Headers() {
    const userData = JSON.parse(localStorage.getItem("userData")) || {};
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
					<p className="text-xs mt-2">I know things might feel overwhelming right now, and that’s okay. Take a deep breath.</p>
				</div>
			</div>
		</>
	);
}

export default Headers;
