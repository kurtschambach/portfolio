import "@/style/global.css";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import ToggleFavicon from "@/components/toggle-favicon";
import GithubRepo from "@/components/github-repo";

export const metadata: Metadata = {
  title: {
    template: "%s | a3chron",
    default: "a3chron",
  },
  description:
    "Hi, my name is Kurt Schambach. I'm a Software Developer at Titanom Technologies, working on some of my own Projects in free time",
  keywords: [
    "Kurt",
    "Schambach",
    "Kurt Schambach",
    "Developer",
    "Software",
    "Titanom Technologies",
    "Technologie",
    "Portfolio",
    "PlantOrg",
    "DevApps",
    "Reinforcement Learning",
    "RL",
    "Neuronal Network",
    "Neural Network",
    "NN",
  ],
  authors: [{ name: "Kurt Schambach" }],
  openGraph: {
    title: "a3chron",
    description:
      "Hi, my name is Kurt Schambach. I'm a Software Developer at Titanom Technologies, working on some of my own Projects in free time",
    url: "https://a3chron.vercel.app/",
    emails: "kurt.schambach@gmail.com",
    siteName: "a3chron - Kurt Schambach - Portfolio",
    images: [
      {
        url: "https://a3chron.vercel.app/a3chron.png",
        width: 1200,
        height: 600,
        alt: "a3chron logo",
      },
    ],
    locale: "de-DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    shortcut: "/a3-active.png",
  },
  verification: {
    google: "waG0eqk7cOJVSMbB42gHQIR-bDsRmy5ABoQWNFI8UKQ",
  },
  metadataBase: new URL("https://a3chron.vercel.app/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-base ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <Analytics />
        <ToggleFavicon />
        <GithubRepo />
        <div className="flex flex-col w-[100dvw] h-[100dvh] bg-base text-text">
          <h1 className="text-2xl">Website under construction</h1>
          <p>I am currently working on a bigger rework</p>
          <p className="text-xs">I could have done it on a branch, but I didn't, don't ask me why - enjoy this page instead</p>
        </div>
      </body>
    </html>
  )
  return (
    <html lang="en" className="font-plex">
      <body
        className={`bg-base flex flex-col items-center ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        <Analytics />
        <ToggleFavicon />
        <GithubRepo />
        <div className="flex flex-col w-[100dvw] h-[100dvh] bg-base">
          <div className="lg:hidden fixed inset-0 z-50 bg-base text-text flex items-center justify-center p-4 text-center">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-4">
                Mobile View Coming Soon
              </h1>
              <p className="text-lg">
                I&apos;m currently working on optimizing this website for mobile
                devices. Please view this site on a larger screen for the best
                experience.
              </p>
            </div>
          </div>
          <div className="hidden lg:block w-full h-full">{children}</div>
        </div>
      </body>
    </html>
  );
}
