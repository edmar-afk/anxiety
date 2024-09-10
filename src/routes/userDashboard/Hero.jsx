import { useEffect, useState } from "react";

function Hero() {
	const [greeting, setGreeting] = useState("");

	useEffect(() => {
		const currentTime = new Date();
		const hours = currentTime.getHours();

		if (hours >= 0 && hours < 5) {
			setGreeting("It's early in the morning! How are you today?");
		} else if (hours >= 6 && hours < 12) {
			setGreeting("Good morning! How are you today?");
		} else if (hours >= 12 && hours < 18) {
			setGreeting("Good afternoon! How are you today?");
		} else if (hours >= 18 && hours <= 23) {
			setGreeting("Good evening! How are you today?");
		}
	}, []);

	return (
		<>
			<div className="my-4 p-4">
				<p className="font-bold">{greeting}</p>
			</div>
		</>
	);
}

export default Hero;
