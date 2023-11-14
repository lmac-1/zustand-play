import { cn } from "@/lib/utils";

export const Task = ({
  id,
  title,
  description,
  status,
}: {
  id: string;
  title: string;
  description?: string;
  status: "TODO" | "IN_PROGRESS" | "DONE";
}) => {
  return (
    <div
      className={cn("rounded-lg bg-white/75 text-gray-900 px-3 py-2", {
        "border-2 border-sky-500": status === "TODO",
        "border-2 border-amber-500": status === "IN_PROGRESS",
        "border-2 border-emerald-500": status === "DONE",
      })}
    >
      <h3 className="font-medium text-gray-700">{title}</h3>
      <p className="text-sm font-light text-gray-500">{description}</p>
    </div>
  );
};
