import Link from "next/link";
import { Block } from "./block";

const InfoCard = () => {
  return (
    <Block>
      <p className="text-md font-bold font-plex w-full h-fit">
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
        <br />
        In my free time, I work on some of my own{" "}
        <Link href="/projects" className="underline text-violet">
          Projects
        </Link>{" "}
        or I write on articles for my{" "}
        <Link href="/projects" className="underline text-violet">
          Blog
        </Link>
        .
      </p>
    </Block>
  );
};

export default InfoCard;
