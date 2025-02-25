import { Metadata } from "next";

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col w-full h-full overflow-hidden bg-bg py-4">
			{children}
		</div>
	);
}

export const metadata: Metadata = {
	title: {
		template: '%s | Blog',
		default: 'Blog',
	}
};
