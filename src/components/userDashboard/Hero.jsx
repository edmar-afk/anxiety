/* eslint-disable react/no-unescaped-entities */
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
				<p className="text-xs">
					Welcome! I'm really glad you're here. It sounds like you might be going through some tough times, and that's
					completely okay. You're not alone, and it's perfectly normal to feel stressed or anxious.
				</p>
			</div>
		</>
	);
}

export default Hero;
