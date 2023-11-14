import { Column } from "./column";

export const Columns = () => {
  return (
    <section className="flex mt-10 gap-6 lg:gap-12">
      <Column title="Todo" />
      <Column title="In progress" />
      <Column title="Done" />
    </section>
  );
};
