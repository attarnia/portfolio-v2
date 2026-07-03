import Image from "next/image";
interface Props {
  img: string;
  title: string;
  tech: string;
  demo: string;
}
function ProjectCard({ img, title, tech, demo }: Props) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-surface border border-border">
      <a href={demo} target="_blank">
        <div className="aspect-4/3 relative">
          <Image
            src={img}
            alt="Project name"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-end">
          <div className="p-4">
            <h3 className="text-lg font-medium text-foreground">{title}</h3>
            <p className="text-sm text-muted mt-1">{tech}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ProjectCard;
