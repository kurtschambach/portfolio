"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

import { MouseEventHandler, PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		const { left, top } = currentTarget.getBoundingClientRect();
		mouseX.set(clientX - left);
		mouseY.set(clientY - top);
	}
	let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
	let style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div
			onMouseMove={onMouseMove}
			className="overflow-hidden relative duration-500 border-2 rounded-xl hover:bg-emerald-300/5 backdrop-blur-none hover:backdrop-blur-3xl group md:gap-8 hover:border-black hover:border-2 border-emerald-300/40 "
		>
			{/*<div className="pointer-events-none">
				<div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" />
				<motion.div
					className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
					style={style}
				/>
				<motion.div
					className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
					style={style}
				/>
			</div>*/}

			{children}
		</div>
	);
};
