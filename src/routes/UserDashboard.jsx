import Headers from "../components/userDashboard/Headers";
import Hero from "../components/userDashboard/Hero";
import Bot from "../components/userDashboard/Bot";
import Ranges from "../components/ranges/Ranges";
import Test from "../components/test/Test";
function UserDashboard() {
	return (
		<>
            <div className="relative h-full w-full flex flex-col">
                <Headers />
                <Hero />
                <Bot />
                <Test/>
                <Ranges/>
            </div>
		</>
	);
}

export default UserDashboard;
