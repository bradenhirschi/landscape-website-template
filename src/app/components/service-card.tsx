import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 text-black justify-start space-x-4">
      <div className="bg-emerald-700 aspect-square w-min rounded-xl p-2">
        {icon}
      </div>
      <div>
        <h4 className="italic font-bold mb-2">{title}</h4>
        <p className="text-xl text-gray-700 mb-2">{description}</p>
        <a href="#" className="inline-block">
          <span className="italic text-xl underline font-semibold">
            Explore Project
          </span>
          <span className="inline-block ml-1">
            <ArrowRight size={16} />
          </span>
        </a>
      </div>
    </div>
  );
}
