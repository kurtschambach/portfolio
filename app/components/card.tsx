import { PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="group overflow-hidden relative duration-500 border-2 rounded-2xl bg-dark-bg group md:gap-8 text-text hover:text-hover border-bg">
			{children}
		</div>
	);
};
