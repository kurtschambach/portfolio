import Link from "next/link";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col w-full h-full overflow-hidden bg-bg p-4 sm:px-10 md:p-10">
			<div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-track-bg scrollbar-thumb-text pr-2">
				<div className="bg-dark-bg rounded-3xl w-full h-fit">
					<Link
						href="/blog"
						className="sticky w-full h-16 flex flex-col items-start justify-center bg-dark-bg text-text text-xl font-bold border-2 border-text cursor-pointer px-8 rounded-t-3xl"
					>
						Blog
					</Link>
					<div className="p-10">{children}</div>
				</div>
			</div>
		</div>
	);
}
