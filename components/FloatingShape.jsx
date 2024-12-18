import { motion } from "framer-motion";

const FloatingShape = ({ color = "bg-gray-500", size = "w-16 h-16", top = "0%", left = "0%", delay = 0 }) => {
	return (
		<motion.div
			className={`absolute rounded-full ${color} ${size} opacity-20 blur-xl`}
			style={{ top, left }}
			animate={{
				y: ["0%", "50%", "0%"], // Adjust movement to a more natural range
				x: ["0%", "50%", "0%"],
				rotate: [0, 360], // Continuous rotation
			}}
			transition={{
				duration: 20,
				ease: "linear",
				repeat: Infinity,
				delay,
			}}
			aria-hidden="true"
		/>
	);
};

export default FloatingShape;
