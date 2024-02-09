import Link from "next/link";
import { Block } from "./block";

const DLCourseCard = () => {
	return (
		<Block gap>
			<h2 className="text-lg">Deep Learning Course</h2>
			<p className="text-center">
				I am writing a <br />
				course on deep learning. <br />
				You don't need any programming knowledge for the beginning.
			</p>
			<Link
				href="/blog/deep-learning-course"
				className="w-52 flex flex-row gap-2 items-center justify-center text-violet bg-violet/10 p-2 px-4 rounded-full border-2 border-violet"
			>
				Course Overview
			</Link>
		</Block>
	);
};

export default DLCourseCard;
