import { Metadata } from "next";
import Navigation from "../components/navigation";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full h-full max-h-[100dvh] overflow-hidden bg-teal">
      <Navigation className="bg-teal" />
      <div className="h-[cal(100dvh-6rem)] overflow-y-auto">{children}</div>
    </div>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | Blog",
    default: "Blog",
  },
};
