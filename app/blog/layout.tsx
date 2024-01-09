import { Metadata } from 'next'

export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col w-full h-full overflow-hidden bg-bg p-4 sm:px-10 md:p-10">
			<div className="w-full h-full overflow-y-scroll scrollbar-thin scrollbar-track-bg scrollbar-thumb-text pr-2 rounded-3xl">
				<div className="bg-dark-bg rounded-3xl w-full h-fit">{children}</div>
			</div>
		</div>
	);
}
 
export const metadata: Metadata = {
  title: 'Blog',
}
