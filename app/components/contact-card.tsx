import { ArrowRight, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const ContactCard = () => {
	const handleCopy = (text: string) => {
		navigator.clipboard.writeText(text).catch((error) => {
			console.error("Error copying text: ", error);
		});
	};
	return (
		<div className="font-bold bg-dark-bg p-6 py-12 rounded-xl w-72 h-full duration-500 flex flex-col items-center justify-center gap-6 text-text hover:text-hover">
			<h2 className="text-lg">Contact</h2>
			<div className="w-52 flex flex-col gap-6 items-center justify-center text-violet bg-violet/10 p-4 rounded-3xl border-2 border-violet">
				<div className="flex flex-row gap-2 items-center justify-between w-full px-2">
					<div className="flex flex-row gap-2">
						<Mail />
						<span>Gmail</span>
					</div>
					<span className="rounded-lg bg-dark-bg text-sm p-1 px-2 cursor-pointer">
						Copy
					</span>
				</div>
				<div className="flex flex-row gap-2 items-center justify-between w-full px-2">
					<div className="flex flex-row gap-2">
						<Mail />
						<span>Proton</span>
					</div>
					<span className="rounded-lg bg-dark-bg text-sm p-1 px-2 cursor-pointer">
						Copy
					</span>
				</div>
			</div>
			<Link
				href="https://www.linkedin.com/in/kurt-schambach/"
				target="_blank"
				className="w-52 flex flex-row gap-2 items-center justify-center text-hover bg-violet/10 p-2 px-4 rounded-full border-2 border-violet"
			>
				<Linkedin />
				<span>LinkedIn</span>
				<ArrowRight size={22} />
			</Link>
		</div>
	);
};

export default ContactCard;
