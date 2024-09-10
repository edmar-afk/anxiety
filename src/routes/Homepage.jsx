/* eslint-disable react/no-unescaped-entities */import stressLogo from "../assets/svg/stress.svg";
import { Link } from "react-router-dom";
import bg from "../assets/img/bg.jpeg";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { motion } from "framer-motion";

const fadeInAndBounce = {
	hidden: { opacity: 0, y: -100 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			type: "spring",
			bounce: 0.5,
			duration: 0.8,
		},
	}),
};

function Homepage() {
	return (
		<>
			<div className="relative h-full">
				<img
					src={bg}
					className="fixed top-0 left-0 h-screen w-full object-cover"
					alt="Background"
				/>

				<div className="z-[100] relative mt-16">
					<div className="flex h-screen justify-center items-center">
						<div className="mx-auto mt-10 flex justify-center px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
							<motion.div
								className="text-center"
								initial="hidden"
								animate="visible"
								variants={fadeInAndBounce}
								custom={0}>
								<h1 className="text-4xl font-extrabold text-gray-900">
									<motion.span
										custom={1}
										variants={fadeInAndBounce}>
										<span className="mb-5 block">Anxiety Ally:</span>
										<span className="bg-gradient-to-r text-3xl from-indigo-400 to-pink-600 bg-clip-text text-transparent">
											AI Solutions for
										</span>
									</motion.span>
									<motion.div
										className="-mt-4"
										custom={2}
										variants={fadeInAndBounce}>
										<span className="relative whitespace-nowrap text-blue-600 text-lg">
											<svg
												aria-hidden="true"
												viewBox="0 0 418 42"
												className="absolute top-3/4 left-0 right-0 m-auto h-[0.58em] w-fit fill-pink-400/50"
												preserveAspectRatio="none">
												<path d="M203.371..."></path>
											</svg>
											<span className="relative">Managing Anxiety and Stress</span>
										</span>
									</motion.div>
								</h1>

								<motion.img
									src={stressLogo}
									alt=""
									className="w-[75%] mx-auto py-4"
									custom={3}
									variants={fadeInAndBounce}
								/>

								<motion.p
									className="mx-auto mt-3 max-w-xl text-lg text-gray-500 text-slate-400 sm:mt-5 md:mt-5"
									custom={4}
									variants={fadeInAndBounce}>
									Mindfulness teaches us to observe our thoughts and feelings without judgment, helping us break free
									from the cycle of stress and anxiety.
								</motion.p>

								<motion.div
									className="sm:mt-8 flex flex-row justify-evenly my-14"
									custom={5}
									variants={fadeInAndBounce}>
									<motion.div
										className="rounded-md shadow-2xl shadow-blue-200"
										custom={6}
										variants={fadeInAndBounce}>
										<Link
											to={"/login"}
											className="flex w-[150px] items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 md:py-4 md:px-10 md:text-lg">
											<VpnKeyIcon
												fontSize="small"
												className="mr-1"
											/>{" "}
											Login
										</Link>
									</motion.div>

									<motion.div
										className="rounded-md"
										custom={7}
										variants={fadeInAndBounce}>
										<Link
											to={"/register"}
											className="flex w-[150px] items-center bg-transparent justify-center rounded-md border-2 border-blue-700 px-8 py-3 text-base font-medium text-blue-700 md:py-4 md:px-10 md:text-lg">
											<HowToRegIcon
												fontSize="small"
												className="mr-1"
											/>{" "}
											Register
										</Link>
									</motion.div>
								</motion.div>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Homepage;
