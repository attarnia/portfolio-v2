// components/Projects.tsx
"use client";
import ProjectCard2 from "./ProjectCard2";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const projects = [
  {
    title: "Idea Plus",
    image: "/projects/idea-plus.png",
    tech: ["Next.js", "Tailwind", "shadcn-ui"],
    demo: "https://idea-plus.ir/",
    description: "not available",
  },
  {
    title: "Baghban",
    image: "/projects/bagban.png",
    tech: ["Next.js", "Tailwind"],
    demo: "https://omdehforoosh.com/",
    description: "",
  },
  {
    title: "hatef project",
    image: "/projects/hatef.png",
    tech: ["Next.js", "Tailwind", "laravel.php"],
    demo: "https://hatef-project-v2.vercel.app/",
    description: "",
  },
  {
    title: "post pilot",
    image: "/projects/post.png",
    tech: ["Next.js", "Tailwind", "gemini ai api "],
    demo: "https://post-pilot-eight.vercel.app/",
    description: "",
  },
];

function Projects() {
  const scope = useSectionReveal();

  return (
    <section ref={scope} className="my-24" id="projects">
      <div>
        <div className="section-heading text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#E6E6E6]">
            My Projects
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#A1A1AA]">
            A selection of projects I have developed
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div className="reveal-item" key={project.title}>
              <ProjectCard2
                img={project.image}
                title={project.title}
                description={project.description}
                tech={project.tech}
                demo={project.demo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
