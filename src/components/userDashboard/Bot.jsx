import { motion } from "framer-motion";import { useEffect, useState } from "react";
import bot1 from "../../assets/img/bot1.png";
import bot2 from "../../assets/img/bot2.png";
import { Link } from "react-router-dom";

// Messages array
const messages = [
	"Feeling overwhelmed today? Let’s find a moment of calm together.",
	"Stressed out? Let’s take a deep breath together.",
	"Need a break from the chaos? You’re not alone.",
	"Feeling anxious? Let's focus on finding some peace.",
	"Is today feeling a little too much? Let’s slow down.",
	"Need a moment to breathe? We’re here to help you relax.",
	"Overthinking again? Let’s quiet those thoughts together.",
	"Feeling on edge? Let’s find a way to ease the tension.",
	"Having a rough day? Let’s create a space for calm.",
	"Feeling anxious? Let’s work through it, one step at a time.",
	"Need to unwind? Let’s find some comfort together.",
];

function Bot() {
	const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
	const [currentBotImage, setCurrentBotImage] = useState(bot1);

	// Change message and image every 10 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
			setCurrentBotImage((prevImage) => (prevImage === bot1 ? bot2 : bot1)); // Toggle bot image
		}, 10000); // 10 seconds

		return () => clearInterval(interval);
	}, []);

	return (
		<Link
			to={"/chatbot"}
			className="flex flex-row flex-wrap items-center justify-evenly shadow-2xl">
			<div className="flex relative overflow-hidden bg-blue-500 rounded-lg items-center w-full mx-4 py-4 shadow-lg">
				<svg
					className="absolute bottom-0 left-0 mb-8"
					viewBox="0 0 375 283"
					fill="none"
					style={{ transform: "scale(1.5)", opacity: 0.1 }}>
					<rect
						x="159.52"
						y="175"
						width="152"
						height="152"
						rx="8"
						transform="rotate(-45 159.52 175)"
						fill="white"
					/>
					<rect
						y="107.48"
						width="152"
						height="152"
						rx="8"
						transform="rotate(-45 0 107.48)"
						fill="white"
					/>
				</svg>
				<div className="relative ml-8 flex items-center justify-center">
					<div className="relative text-white py-2 ">
						<div className="flex justify-between">
							<motion.span
								key={currentMessageIndex} // Unique key to trigger animation on message change
								initial={{ opacity: 0, x: -100 }} // Start faded and to the left
								animate={{ opacity: 1, x: 0 }} // Fade in and move to position
								exit={{ opacity: 0, x: 100 }} // Optional: Slide out to the right
								transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
								className="block font-extralight text-small">
								{messages[currentMessageIndex]}
							</motion.span>
						</div>
					</div>
					<div
						className="block absolute w-48 h-48 bottom-0 left-0 -mb-24"
						style={{
							background: "radial-gradient(black, transparent 60%)",
							transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
							opacity: 0.2,
						}}></div>
					<img
						className="relative"
						width={150}
						src={currentBotImage}
						alt=""
					/>
				</div>
			</div>
		</Link>
	);
}

export default Bot;
