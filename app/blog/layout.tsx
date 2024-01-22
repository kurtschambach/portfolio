import { Metadata } from "next";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col w-full h-full overflow-hidden bg-bg p-4 sm:px-10 md:p-10">
			{children}
		</div>
	);
}

export const metadata: Metadata = {
	title: "Blog",
};
