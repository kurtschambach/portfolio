import Link from "next/link";
import React from "react";

type Props = {
  project: {
    title: string;
    description: string;
    repository?: string;
    url?: string;
    image?: string;
  };
};

export const Header: React.FC<Props> = ({ project }) => {
  const links: { label: string; href: string }[] = [];
  if (project.repository) {
    links.push({
      label: "GitHub",
      href: `https://github.com/${project.repository}`,
    });
  }
  if (project.url) {
    links.push({
      label: "Website",
      href: project.url,
    });
  }

  return (
    <div className="bg-mantle/80 w-full h-full">
      <div className="container mx-auto relative isolate overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight h-fit sm:text-6xl text-hover">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-text">
              {project.description}
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <Link
                  target="_blank"
                  key={link.label}
                  href={link.href}
                  className="text-white/80"
                >
                  {link.label} <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
