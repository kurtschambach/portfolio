export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className="relative min-h-screen bg-gradient-to-tl from-black via-zinc-900/30 to-black">
			{children}
		</div>
	);
}
