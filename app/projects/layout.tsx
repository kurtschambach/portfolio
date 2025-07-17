import { Metadata } from "next";
import Navigation from "@/components/navigation";

export default function ProjectsLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <div className="relative h-full max-h-[100dvh] overflow-y-auto bg-green">
      <Navigation className="bg-green" />
      {children}
    </div>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | Project",
    default: "Projects",
  },
};
