import Link from "next/link";

const ProjectsCard = () => {
	return (
		<div className="font-bold bg-dark-bg z-10 p-6 py-12 rounded-xl w-72 h-full duration-500 flex flex-col items-center justify-center gap-6 text-text hover:text-hover">
			<h2 className="text-lg">Some of my Apps</h2>
			<Link
				href="/projects/plant-org"
				className="w-52 flex flex-row gap-2 items-center justify-center text-violet bg-violet/10 p-2 px-4 rounded-full border-2 border-violet"
			>
				Plant Org
			</Link>
			<Link
				href="/projects/dev-apps"
				className="w-52 flex flex-row gap-2 items-center justify-center text-violet bg-violet/10 p-2 px-4 rounded-full border-2 border-violet"
			>
				Dev Apps
			</Link>
			<Link
				href="/projects/productivity-app"
				className="w-52 flex flex-row gap-2 items-center justify-center text-violet bg-violet/10 p-2 px-4 rounded-full border-2 border-violet"
			>
				Productivity App
			</Link>
		</div>
	);
};

export default ProjectsCard;
