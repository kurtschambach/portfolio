import Link from "next/link";
import { Block } from "./block";

const ProjectsCard = () => {
  return (
    <Block>
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-lg">Some of my Apps</h2>
        <Link
          href="/projects/voyagr"
          className="w-52 flex flex-row gap-2 items-center justify-center text-violet bg-violet/10 p-2 px-4 rounded-full border-2 border-violet"
        >
          Voyagr
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
    </Block>
  );
};

export default ProjectsCard;
