import { useState } from "react";import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";

function Ranges() {
	// Initialize state to hold the slider value
	const [sliderValue, setSliderValue] = useState(5);

	// Function to update the state when the slider is moved
	const handleSliderChange = (event) => {
		setSliderValue(Number(event.target.value)); // Convert to number
	};

	// Function to display text based on the slider value (unique for each level 1-10)
	const getAdviceBasedOnStressLevel = (value) => {
		switch (value) {
			case 0:
				return "You're feeling neutral. Take it easy!";
			case 1:
				return "You're very relaxed. Enjoy the calmness!";
			case 2:
				return "You seem calm, keep it going!";
			case 3:
				return "A little stress is creeping in, but you're still good!";
			case 4:
				return "Moderate stress. It might help to take short breaks.";
			case 5:
				return "You're at a midpoint. Take time for yourself.";
			case 6:
				return "You feel stressed. Consider some relaxation techniques.";
			case 7:
				return "High stress. Try to engage in some stress-relieving activities.";
			case 8:
				return "You're very stressed. A good rest or talking to someone might help.";
			case 9:
				return "Extreme stress. Seek support and prioritize your well-being.";
			case 10:
				return "Overwhelmed by stress! It's important to get help and take a break.";
			default:
				return "Invalid stress level.";
		}
	};

	return (
		<>
			<div className="flex flex-col p-4 mt-8">
				<p className="font-bold">How stressed are you?</p>

				<div className="mt-4 bg-blue-400 p-4 rounded-xl shadow-xl">
					<label
						htmlFor="steps-range"
						className="block mb-2 text-sm font-medium text-gray-900">
						Scale from 1 to 10 levels of your stress
					</label>
					<div className="flex flex-row my-3 items-center">
						<SentimentVerySatisfiedOutlinedIcon className="mr-1 text-white" />
						<input
							id="steps-range"
							type="range"
							min="0"
							max="10"
							step="1"
							value={sliderValue} // Bind to state
							onChange={handleSliderChange} // Update state on change
							className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
						/>
						<SentimentDissatisfiedOutlinedIcon className="ml-1 text-white" />
					</div>
					<p className="mt-2 text-xs">Stress Level: {sliderValue}</p> {/* Show current value */}
				</div>

				<div className="mt-4">
					<p className="font-bold">Advice:</p>
					<p>{getAdviceBasedOnStressLevel(sliderValue)}</p> {/* Display text based on range */}
				</div>
			</div>
		</>
	);
}

export default Ranges;
