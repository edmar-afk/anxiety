import Headers from "./userDashboard/Headers";
import Hero from "./userDashboard/Hero";

function UserDashboard() {
	return (
		<>
            <div className="relative h-full w-full flex flex-col">
                <Headers />
                <Hero/>
            </div>
		</>
	);
}

export default UserDashboard;
