import { Task } from "./task";

export const Column = ({ title }: { title: string }) => {
  return (
    <section className="h-[600px] flex-1">
      <h2 className="text-white font-bold ml-1 font-2xl">{title}</h2>
      <div className="h-full w-full rounded-xl bg-white/50 p-4 mt-3.5"></div>
    </section>
  );
};
