export const questions = [	{ id: 1, backgroundColor: "bg-red-50", textColor: "text-red-900", question: "What is stress?" },
	{ id: 2, backgroundColor: "bg-red-200", textColor: "text-white", question: "What are common causes of stress?" },
	{
		id: 3,
		backgroundColor: "bg-red-500",
		textColor: "text-white",
		question: "How can deep breathing help reduce stress?",
	},
	{ id: 4, backgroundColor: "bg-red-700", textColor: "text-white", question: "Can meditation help manage stress?" },
	{
		id: 5,
		backgroundColor: "bg-red-900",
		textColor: "text-white",
		question: "Do we have a record of our student being seen by the guidance counselor for stress?",
	},
	{
		id: 6,
		backgroundColor: "bg-orange-100",
		textColor: "text-orange-900",
		question: "What are some signs of chronic stress?",
	},
	{
		id: 7,
		backgroundColor: "bg-orange-200",
		textColor: "text-orange-900",
		question: "What interventions did the school implement to help manage their stress?",
	},
	{
		id: 8,
		backgroundColor: "bg-orange-500",
		textColor: "text-white",
		question: "What are the different types of stress?",
	},
	{ id: 9, backgroundColor: "bg-orange-700", textColor: "text-white", question: "What causes stress?" },
	{
		id: 10,
		backgroundColor: "bg-orange-900",
		textColor: "text-white",
		question: "What are the physical symptoms of stress?",
	},
	{
		id: 11,
		backgroundColor: "bg-green-100",
		textColor: "text-green-900",
		question: "What are the mental symptoms of stress?",
	},
	{ id: 12, backgroundColor: "bg-green-200", textColor: "text-green-900", question: "How can I tell if I'm stressed?" },
	{
		id: 13,
		backgroundColor: "bg-green-500",
		textColor: "text-white",
		question: "What are some ways to manage stress?",
	},
	{
		id: 14,
		backgroundColor: "bg-green-700",
		textColor: "text-white",
		question: "What are some relaxation techniques for stress?",
	},
	{
		id: 15,
		backgroundColor: "bg-green-900",
		textColor: "text-white",
		question: "What are some lifestyle changes that can help reduce stress?",
	},
	{
		id: 16,
		backgroundColor: "bg-cyan-100",
		textColor: "text-cyan-900",
		question: "When should I seek professional help for stress?",
	},
	{
		id: 17,
		backgroundColor: "bg-cyan-300",
		textColor: "text-cyan-900",
		question: "Can stress be a sign of a medical condition?",
	},
	{
		id: 18,
		backgroundColor: "bg-cyan-500",
		textColor: "text-cyan-900",
		question: "What is the best way to cope with stress?",
	},
	{
		id: 19,
		backgroundColor: "bg-cyan-700",
		textColor: "text-white",
		question: "What is the best way to deal with stress?",
	},
	{ id: 20, backgroundColor: "bg-cyan-900", textColor: "text-white", question: "What role does sleep play in stress?" },
	{
		id: 21,
		backgroundColor: "bg-blue-100",
		textColor: "text-blue-900",
		question: "Can stress lead to physical health problems?",
	},
	{ id: 22, backgroundColor: "bg-blue-200", textColor: "text-blue-900", question: "What is the stress response?" },
	{ id: 23, backgroundColor: "bg-blue-400", textColor: "text-white", question: "What are some relaxation techniques?" },
	{ id: 24, backgroundColor: "bg-blue-700", textColor: "text-white", question: "How can time management reduce stress?" },
	{ id: 25, backgroundColor: "bg-blue-900", textColor: "text-white", question: "What should you avoid when stressed?" },
	{ id: 26, backgroundColor: "bg-purple-100", textColor: "text-purple-900", question: "Can stress make me sick?" },
	{ id: 27, backgroundColor: "bg-purple-200", textColor: "text-gray-200", question: "How can I protect my health from stress?" },
	{ id: 28, backgroundColor: "bg-purple-300", textColor: "text-gray-300", question: "How can stress affect my relationships?" },
	{ id: 29, backgroundColor: "bg-purple-400", textColor: "text-white", question: "How can I talk to my partner about my stress?" },
	{ id: 30, backgroundColor: "bg-purple-500", textColor: "text-white", question: "How can I support a loved one who is stressed?" },
	{ id: 31, backgroundColor: "bg-purple-600", textColor: "text-white", question: "How can stress affect my work performance?" },
	{ id: 32, backgroundColor: "bg-purple-700", textColor: "text-white", question: "What are some tips for managing stress at work?" },
];

export const psychological = [
	{
		type: "psychological",
		question:
			"Imagine you're walking through a forest alone, and you come across a fork in the path. Which path would you choose to follow?",
		choices: [
			{
				option: "A Sunny Meadow Path",
				description:
					"This path is bright, open, and filled with flowers. It feels peaceful, and you can hear birds singing.",
				answer:
					"This choice reflects a cheerful and optimistic personality. You’re drawn to beauty and simplicity, preferring comfort and warmth in life.",
			},
			{
				option: "A Dense Forest Path",
				description:
					"This path is shaded, with tall trees around. It's quiet and mysterious, with occasional rays of sunlight breaking through.",
				answer:
					"Choosing this path shows that you are introspective and value solitude. You’re comfortable with mystery and enjoy exploring the depths of your thoughts.",
			},
			{
				option: "A Mountainous Trail",
				description:
					"This path is rocky and challenging. It leads up a steep mountain with a promise of a breathtaking view at the top.",
				answer:
					"This path represents ambition and resilience. You’re someone who isn’t afraid of challenges and are motivated by goals, often pushing yourself to reach new heights.",
			},
			{
				option: "A Winding River Path",
				description:
					"This path follows along a gently flowing river. You can hear the water and see fish swimming in the clear river.",
				answer:
					"This choice reflects a calm and adaptable nature. You go with the flow and find peace in life’s natural rhythm. You value tranquility and enjoy the journey.",
			},
			{
				option: "A Tunnel Path",
				description:
					"This path goes through a dark tunnel, leading to an unknown destination. It feels risky, but there's something intriguing about it.",
				answer:
					"Choosing this path shows curiosity and courage. You’re open to taking risks and exploring the unknown. You’re not afraid to step out of your comfort zone to discover new things.",
			},
		],
	},

	{
		type: "stress",
		question:
			"Imagine you're standing at the edge of a cliff overlooking the ocean. You see a storm brewing in the distance. How do you react?",
		choices: [
			{
				option: "I stay calm and take a moment to enjoy the view.",
				description:
					"Despite the impending storm, you appreciate the beauty around you, focusing on the moment rather than the potential danger.",
				answer:
					"This choice indicates that you have a resilient mindset. You are capable of staying calm under pressure and find value in appreciating the present, even amidst uncertainty.",
			},
			{
				option: "I start looking for a safe place to hide.",
				description:
					"You instinctively seek shelter, feeling anxious about the storm approaching and prioritizing your safety.",
				answer:
					"This choice reflects a cautious personality. You tend to avoid risks and prefer to prepare for potential dangers, often feeling stressed in uncertain situations.",
			},
			{
				option: "I grab my camera and start capturing the moment.",
				description:
					"You feel compelled to document the beauty and intensity of the storm, viewing it as an opportunity for creativity.",
				answer:
					"This choice shows that you thrive on challenges and see stressful situations as chances for growth. You’re motivated by creativity and find purpose in expressing yourself, even in difficult times.",
			},
			{
				option: "I turn away and walk back to safety.",
				description: "You decide that the storm isn't worth the risk and choose to retreat to a place of comfort.",
				answer:
					"This choice indicates a preference for security over adventure. You may find stress overwhelming and tend to prioritize your comfort and safety over exploration.",
			},
			{
				option: "I shout out to the ocean, feeling exhilarated by the storm.",
				description:
					"You embrace the chaos of the storm, feeling energized by the raw power of nature, expressing your emotions openly.",
				answer:
					"This choice suggests that you are passionate and unafraid to confront your feelings. You find excitement in uncertainty and may thrive in dynamic and intense situations.",
			},
		],
	},
];
