import Image from "next/image";

interface ServicesCardProps {
  icon: string;
  title: string;
  description: string;
}

function ServicesCard({ icon, title, description }: ServicesCardProps) {
  return (
    <div className="rounded-[1.5rem] border border-border/70 bg-surface/80 p-6 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
        <Image src={icon} alt={title} width={32} height={32} />
      </div>

      <h3 className="mb-2 text-lg font-medium text-foreground">{title}</h3>

      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export default ServicesCard;
