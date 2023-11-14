import { Task } from "./task";

const tasks = [
  {
    id: "1234",
    title: "Our first task",
    description: "Some description",
    status: "DONE",
  },
];

export const Column = ({
  title,
  status,
}: {
  title: string;
  status: string;
}) => {
  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <section className="h-[600px] flex-1">
      <h2 className="text-white font-bold ml-1 font-2xl">{title}</h2>
      <div className="h-full w-full rounded-xl bg-white/50 p-4 mt-3.5">
        {filteredTasks.map((task) => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </section>
  );
};
