import Link from "next/link";
import { Block } from "../block";
import { Code2, ExternalLink, Github } from "lucide-react";
import { allProjects } from "contentlayer/generated";

const ProjectsSection = () => {
  const featured = allProjects.find(
    (project) => project.slug === "nextjs-auth-template",
  )!;
  const top2 = allProjects.find((project) => project.slug === "portfolio")!;
  const top3 = allProjects.find((project) => project.slug === "pred-prey-rd")!;

  const featuredProjects = [featured, top2, top3].filter((p) => p);

  return (
    <Block className="bg-teal selection:text-teal">
      <div className="w-dvw 2xl:w-384 h-fit min-h-dvh p-24 flex flex-col item-center justify-center">
        <h1 className="uppercase text-6xl text-teal bg-crust mb-24 w-fit p-1 px-2">
          #4 Projects
        </h1>
        <div className="grid grid-cols-1 gap-8">
          <div>
            <h1 className="text-4xl font-bold flex items-center gap-3">
              Check out my{" "}
              <Link href="/projects" className="underline text-crust">
                Projects
              </Link>
            </h1>
            <p className="text-2xl font-semibold mt-12 w-2/3 mb-12">
              I have several little projects, few of which are not work in
              progress, but nevertheless you can have a look at them:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                image={project.image}
                slug={project.slug}
                repo={project.repo}
                url={project.url}
              />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/projects"
              className="bg-crust text-teal py-3 px-8 rounded-lg font-bold hover:bg-opacity-90 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </Block>
  );
};

function ProjectCard({
  title,
  description,
  image,
  slug,
  repo,
  url,
}: {
  title: string;
  description: string;
  image?: string;
  slug: string;
  repo?: string;
  url?: string;
}) {
  return (
    <div className="bg-crust rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-96 max-h-96">
      <div className="h-48 bg-base flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <Code2 size={64} className="text-teal opacity-50" />
        )}
      </div>
      <div className="p-6 flex flex-col h-48">
        <h3 className="text-xl font-bold text-teal">{title}</h3>
        <p className="text-subtext mt-2 line-clamp-2">{description}</p>
        <div className="grow" />
        <div className="mt-6 flex gap-4">
          <Link
            href={`/projects/${slug}`}
            className="bg-teal text-crust py-2 px-4 rounded font-medium hover:bg-opacity-90 transition-colors text-sm"
          >
            Details
          </Link>
          {repo && (
            <Link
              href={repo}
              target="_blank"
              className="flex items-center gap-1 text-teal hover:underline text-sm"
            >
              <Github size={16} />
              Repo
            </Link>
          )}
          {url && (
            <Link
              href={url}
              target="_blank"
              className="flex items-center gap-1 text-teal hover:underline text-sm"
            >
              <ExternalLink size={16} />
              Live
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
