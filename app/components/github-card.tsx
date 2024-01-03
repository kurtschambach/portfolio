import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GithubCard = () => {
	return (
		<Link
			href="https://github.com/kurtschambach/"
			target="_blank"
			className="text-start font-bold bg-dark-bg p-4 px-6 rounded-xl w-72 h-full text-text duration-500 flex flex-col items-center justify-center"
		>
			<span className="bg-dark-bg rounded-full border-2 border-dark-bg p-2">
				<Image
					src="https://avatars.githubusercontent.com/kurtschambach"
					width="120"
					height="120"
					alt="github-portfolio"
					className="rounded-full"
				/>
			</span>
			<span className="font-bold text-lg text-hover">a3chron</span>
			<span className="text-base mb-4">kurtschambach</span>
			<button className="flex flex-row gap-2 items-center bg-violet/10 p-2 px-4 rounded-full border-2 border-violet text-hover">
				My GitHub profile <ArrowRight size={22} />
			</button>
		</Link>
	);
};

export default GithubCard;
