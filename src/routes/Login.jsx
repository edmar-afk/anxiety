/* eslint-disable react/no-unescaped-entities */import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import api from "../assets/api";
import Loader from "../components/Loader";
import bg from "../assets/img/bg.jpeg";

const Login = () => {
	const [email, setEmail] = useState(""); // Email used as username
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.state && location.state.successMessage) {
			setError(location.state.successMessage);
		}
	}, [location]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const res = await api.post("/api/token/", { username: email, password });

			if (res.status === 200) {
				localStorage.setItem("ACCESS_TOKEN", res.data.access);
				localStorage.setItem("REFRESH_TOKEN", res.data.refresh);

				const userRes = await api.get("/api/user/", {
					headers: {
						Authorization: `Bearer ${res.data.access}`,
					},
				});

				localStorage.setItem("userData", JSON.stringify(userRes.data));
				navigate("/user-dashboard");
			} else {
				setError("Login failed.");
			}
		} catch (error) {
			setError("Invalid Email or Password");
		} finally {
			setLoading(false);
		}
	};

	// Animation variants for fade-in and slide-down
	const fadeInSlideDown = {
		hidden: { opacity: 0, y: -20 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div className="relative mx-auto w-full max-w-md h-screen px-6 pb-8">
			<img
				src={bg}
				alt=""
				className="fixed top-0 left-0 w-full -z-50 h-screen"
			/>
			<Link
				to="/"
				className="p-2 flex items-center fixed top-8">
				<ArrowBackIcon className="text-gray-800 z-50" />
			</Link>
			<div className="container flex flex-col mx-auto rounded-lg pt-32 my-5">
				<div className="flex justify-center w-full h-full my-auto">
					<div className="flex items-center justify-center w-full lg:p-12">
						<form
							className="flex flex-col w-full h-full pb-6 text-center rounded-3xl"
							onSubmit={handleSubmit}>
							<h3 className="mb-3 text-4xl font-extrabold text-blue-900">Sign In</h3>
							<p className="mb-4 text-gray-700 pt-">Enter your email and password</p>

							<motion.div
								initial="hidden"
								animate="visible"
								transition={{ duration: 0.6 }}
								variants={fadeInSlideDown} className="text-left">
								<label
									htmlFor="email"
									className="mb-2 text-sm text-gray-900 pt-12 ml-4">
									Email*
								</label>
								<input
									id="email"
									type="email"
									placeholder="mail@example.com"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="w-full px-5 py-4 mb-7 text-sm font-medium bg-gray-200 text-blue-900 rounded-2xl focus:bg-gray-400 outline-none"
								/>
							</motion.div>

							<motion.div
								initial="hidden"
								animate="visible"
								transition={{ duration: 0.6, delay: 0.2 }}
								variants={fadeInSlideDown} className="text-left">
								<label
									htmlFor="password"
									className="mb-2 text-sm ml-4 text-gray-900">
									Password*
								</label>
								<input
									id="password"
									type="password"
									placeholder="Enter a password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									className="w-full px-5 py-4 mb-5 text-sm font-medium bg-gray-200 text-blue-900 rounded-2xl focus:bg-gray-400 outline-none"
								/>
							</motion.div>

							{error && <p className="text-red-600 mb-4">{error}</p>}

							<button
								type="submit"
								className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white bg-blue-500 rounded-2xl hover:bg-blue-600 focus:ring-4 focus:ring-blue-100"
								disabled={loading}>
								{loading ? <Loader /> : "Login"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
