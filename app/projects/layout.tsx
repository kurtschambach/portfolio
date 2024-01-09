import { Metadata } from "next";

export default function ProjectsLayout({
	children,
}: { children: React.ReactNode }) {
	return <div className="relative h-fit bg-bg">{children}</div>;
}

export const metadata: Metadata = {
	title: 'Projects',
  }