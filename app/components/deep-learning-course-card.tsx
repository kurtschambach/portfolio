import Link from "next/link";
import { Block } from "./block";

const DLCourseCard = () => {
	return (
		<Block gap>
			<h2 className="text-lg">Deep Learning Course</h2>
			<p className="text-center">
				I am writing <br />
				on a course <br/> 
				about deep learning. <br />
				No programming knowledge needed to start...
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
