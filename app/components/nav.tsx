"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-500 border-b  ${
					isIntersecting
						? "bg-emerald-900/0 border-transparent"
						: "bg-emerald-900/30  border-black "
				}`}
			>
				<div className="container font-display flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						<Link
							href="/projects"
							className="duration-200 text-emerald-400 hover:text-emerald-100"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="duration-200 text-emerald-400 hover:text-emerald-100"
						>
							Contact
						</Link>
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						<ArrowLeft className="w-6 h-6 text-emerald-400 hover:text-emerald-100" />
					</Link>
				</div>
			</div>
		</header>
	);
};
