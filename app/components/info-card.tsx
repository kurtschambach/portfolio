import Link from "next/link";

const InfoCard = () => {
	return (
		<div className="text-start z-10 bg-dark-bg p-4 px-6 rounded-xl w-72 h-full text-text hover:text-hover duration-500">
			<h2 className="text-md font-bold font-plex">
				Hi, my name is Kurt Schambach. <br />
				<br />
				I am a Software Developer working at{" "}
				<Link
					target="_blank"
					href="https://www.titanom.com"
					className="underline text-violet"
				>
					Titanom Technologies
				</Link>
				.
				<br />
				In my free time, I work on some of my own projects.
				<br />
				Check out{" "}
				<Link href="/projects" className="underline text-violet">
					Projects
				</Link>{" "}
				for more.
			</h2>
		</div>
	);
};

export default InfoCard;
