import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Theme",
};

export default function Theme() {
	return (
		<div className="bg-bg w-full h-fit flex flex-row flex-wrap items-center justify-start gap-12">
			<div className="flex flex-col items-center justify-center gap-12">
				<div className="w-44 h-56 p-6 text-text hover:text-hover duration-500 rounded-2xl bg-dark-bg flex flex-col items-center justify-start">
					<p className="text-base uppercase">colors</p>
					<span className="flex flex-col items-center justify-center w-32 p-2 px-4 h-10 rounded-full mt-2 bg-primary font-bold text-sm text-dark-bg">
						#43FFAF
					</span>
					<span className="flex flex-col items-center justify-center w-32 p-2 px-4 h-10 rounded-full -translate-y-2 bg-violet font-bold text-sm text-dark-bg">
						#C061CB
					</span>
					<span className="flex flex-col items-center justify-center w-32 p-2 px-4 h-10 rounded-full -translate-y-4 bg-text font-bold text-sm text-dark-bg">
						#526777
					</span>
					<span className="flex flex-col items-center justify-center w-32 p-2 px-4 h-10 rounded-full -translate-y-6 bg-bg font-bold text-sm text-violet">
						#262a33
					</span>
					<span className="flex flex-col items-center justify-center w-32 p-2 px-4 h-10 rounded-full -translate-y-8 bg-dark-bg font-bold text-sm text-primary">
						#1F232C
					</span>
				</div>
				<div className="bg-dark-bg text-text hover:text-hover duration-500 w-44 rounded-2xl flex flex-col items-center justify-center p-6">
					<p className="text-base uppercase">Firefox Theme</p>
					<Link
						href="https://addons.mozilla.org/en-US/firefox/addon/monkey-superuser-theme/"
						target="_blank"
						className="mt-2 rounded-full border-2 border-primary p-2 px-3 w-full h-fit flex flex-col items-center justify-center text-primary font-bold bg-primary/0 hover:bg-primary/10 duration-500"
					>
						Theme
					</Link>
				</div>
			</div>
			<div className="p-6 text-text hover:text-hover duration-500 rounded-2xl bg-dark-bg flex flex-col items-center justify-center">
				<p className="text-base uppercase">Monkeytype</p>
				<Link
					href="https://monkeytype.com/"
					target="_blank"
					className="bg-bg rounded-xl mt-2"
				>
					<Image
						src="/monkeytype-superuser-mobile.png"
						alt="monkeytype superuser theme"
						width={176}
						height={320}
						className="rounded-xl"
					/>
				</Link>
			</div>
		</div>
	);
}
