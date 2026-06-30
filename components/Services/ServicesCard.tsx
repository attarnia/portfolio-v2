import Image from "next/image";

interface ServicesCardProps {
  icon: string;
  title: string;
  description: string;
}

function ServicesCard({ icon, title, description }: ServicesCardProps) {
  return (
    <div className="rounded-xl bg-[#262626] p-6 transition hover:translate-y-1 hover:shadow-lg hover:shadow-black/30">
      <div className="mb-4">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>

      <h3 className="mb-2 text-lg font-medium text-[#E6E6E6]">{title}</h3>

      <p className="text-sm leading-relaxed text-[#A1A1AA]">{description}</p>
    </div>
  );
}

export default ServicesCard;
