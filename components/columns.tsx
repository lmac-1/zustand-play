import { Column } from "./column";

export const Columns = () => {
  return (
    <section className="flex mt-10 gap-6 lg:gap-12">
      <Column title="Todo" status="TODO" />
      <Column title="In progress" status="IN_PROGRESS" />
      <Column title="Done" status="DONE" />
    </section>
  );
};
