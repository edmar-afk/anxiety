import { useState } from "react";import SentimentVerySatisfiedOutlinedIcon from "@mui/icons-material/SentimentVerySatisfiedOutlined";import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";

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
				return "You're feeling neutral, neither too relaxed nor stressed. It's a great place to be, so just go with the flow and enjoy your day. Keep doing what you're doing, and take the time to appreciate the balance you're currently experiencing!";
			case 1:
				return "You're very relaxed and at ease. This is a wonderful state of calm, so take this time to fully embrace it. Whether you're reading, meditating, or just sitting quietly, let yourself soak in the peacefulness of the moment!";
			case 2:
				return "You're calm and collected. It seems like you're managing everything quite well! Keep this positive energy going by continuing to do things that bring you peace, whether it's taking breaks, enjoying your hobbies, or simply breathing deeply.";
			case 3:
				return "A little bit of stress is starting to creep in, but you're still handling it well. It might be a good time to do a quick check-in with yourself—take a few deep breaths, stretch, or step outside for a bit of fresh air. You’re in a good spot, so just keep an eye on things.";
			case 4:
				return "You're experiencing moderate stress. This could be a good time to start incorporating short breaks into your routine, especially if you've been focused on something for a while. Stretch, hydrate, or take a short walk to help reset your mind and body.";
			case 5:
				return "You're at a midpoint with your stress. It’s neither overwhelming nor negligible, but it’s important to pay attention. Make sure you're taking care of yourself—whether that means taking some personal time to unwind, practicing mindfulness, or just engaging in an activity you enjoy.";
			case 6:
				return "You’re feeling quite stressed, and it's time to start actively managing it. Consider some relaxation techniques like deep breathing, yoga, or listening to calming music. Taking a short break from whatever is causing your stress can really help to reset your mood and bring some clarity.";
			case 7:
				return "Your stress levels are high. Now’s a good time to engage in activities that can reduce stress, such as physical exercise, meditation, or talking to a friend or family member. Recognize that it's okay to take a step back and prioritize your mental health right now.";
			case 8:
				return "You're feeling very stressed, and it's important to take this seriously. Make sure to give yourself time to rest or talk to someone about what's going on. Stress can take a toll, so engaging in self-care activities or seeking support is vital for your well-being.";
			case 9:
				return "You're under extreme stress, and it's crucial to take action. Seek out support from a trusted person, whether that’s a friend, family member, or a professional. Prioritize your mental and emotional health by taking a break, talking it out, or even seeking guidance from a counselor or therapist.";
			case 10:
				return "You're feeling overwhelmed by stress, and it's imperative to get help immediately. This level of stress can be harmful, so please prioritize your well-being. Reach out to someone, step away from your stressors, and consider seeking professional support to guide you through this time.";
			default:
				return "It looks like you've entered an invalid stress level. Please select a valid number between 0 and 10 so we can provide the appropriate advice for your current situation.";
		}
	};


	return (
		<>
			<div className="flex flex-col p-4 mt-8 mb-24">
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
