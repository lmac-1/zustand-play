'use client';
import { useEffect, useMemo } from 'react';
import { Status, useTaskStore } from '@/lib/store';
import { Task } from './task';

export const Column = ({
  title,
  status
}: {
  title: string;
  status: Status;
}) => {
  // When we use useTaskStore, it needs to be a client component
  const tasks = useTaskStore(state => state.tasks);

  // useMemo means that we only recalculate the filtered tasks when the tasks or status changes
  const filteredTasks = useMemo(
    () => tasks.filter(task => task.status === status),
    [tasks, status]
  );

  const updateTask = useTaskStore(state => state.updateTask);
  const draggedTask = useTaskStore(state => state.draggedTask);
  const dragTask = useTaskStore(state => state.dragTask);

  useEffect(() => {
    // This will hydrate the component once mounted on the UI
    useTaskStore.persist.rehydrate();
  }, []);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!draggedTask) return;
    updateTask(draggedTask, status);
    dragTask(null);
  };
  return (
    <section className='h-[600px] flex-1'>
      <h2 className='font-2xl ml-1 font-bold text-white'>{title}</h2>
      <div
        className='mt-3.5 h-full w-full rounded-xl bg-white/50 p-4'
        onDrop={handleDrop}
        // disable the default behaviour
        onDragOver={e => e.preventDefault()}
      >
        <div className='flex flex-col gap-4'>
          {filteredTasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </section>
  );
};
