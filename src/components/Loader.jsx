import LockResetIcon from "@mui/icons-material/LockReset";
function Loader() {
	return (
		<>
			<div className="flex justify-center items-center">
				<div className="flex flex-row">
					<LockResetIcon fontSize="large" className="animate-spin"/>
				</div>
			</div>
		</>
	);
}

export default Loader;
