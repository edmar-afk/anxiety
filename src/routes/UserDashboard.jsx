import Headers from "../components/userDashboard/Headers";
import Hero from "../components/userDashboard/Hero";
import Bot from "../components/userDashboard/Bot";
function UserDashboard() {
	return (
		<>
            <div className="relative h-full w-full flex flex-col">
                <Headers />
                <Hero />
                <Bot/>
            </div>
		</>
	);
}

export default UserDashboard;
