import Link from "next/link";
import React from "react";

export const Block = ({
	children,
	link,
	blank,
	gap,
}: {
	children: React.ReactNode;
	link?: string;
	blank?: boolean;
	gap?: boolean;
}) => {
	if (link) {
		return (
			<Link
				href={link}
				target={blank ? "_blank" : undefined}
				className={`group text-start font-bold z-10 bg-dark-bg p-4 px-6 rounded-xl w-72 h-full text-text hover:text-hover duration-500 flex flex-col items-center justify-center ${
					gap && "gap-6"
				}`}
			>
				{children}
			</Link>
		);
	}
	return (
		<div
			className={`group text-start font-bold z-10 bg-dark-bg p-4 px-6 rounded-xl w-72 h-full text-text hover:text-hover duration-500 flex flex-col items-center justify-center ${
				gap && "gap-6"
			}`}
		>
			{children}
		</div>
	);
};
