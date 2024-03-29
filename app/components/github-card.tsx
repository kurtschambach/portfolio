import { ArrowRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Block } from "./block";

const GithubCard = () => {
	return (
		<Block link="https://github.com/kurtschambach/" blank>
			<div className="bg-dark-bg w-[8rem] h-[8rem] duration-1000 group-hover:w-[14rem] origin-center transition-all ease-in-out border-2 border-text overflow-hidden flex flex-col items-center justify-center rounded-full border-2 border-dark-bg">
				<div className="w-32 h-32 translate-y-1/2 group-hover:translate-x-12 ease-in-out duration-1000 bg-bg sticky rounded-full flex flex-col items-center justify-center">
					<Image
						src="https://avatars.githubusercontent.com/kurtschambach"
						width="128"
						height="128"
						alt="github-portfolio"
						className="rounded-full"
					/>
				</div>
				<div className="w-[8rem] h-[8rem] sticky -translate-y-1/2 drop-shadow-lg group-hover:-translate-x-12 duration-1000 ease-in-out rounded-full bg-bg border-2 border-text p-10 flex flex-col items-center justify-center">
					<Github size={60} className="rounded-full text-text" />
				</div>
			</div>
			<span className="font-bold text-lg text-hover mt-4">a3chron</span>
			<span className="text-base mb-4">kurtschambach</span>
			<button className="flex flex-row gap-2 items-center bg-violet/10 p-2 px-4 rounded-full border-2 border-violet text-hover">
				My GitHub profile <ArrowRight size={22} />
			</button>
		</Block>
	);
};

export default GithubCard;
