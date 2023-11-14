'use client';
import { useMemo } from 'react';
import { useTaskStore } from '@/lib/store';
import { Task } from './task';

export const Column = ({
  title,
  status
}: {
  title: string;
  status: string;
}) => {
  const tasks = useTaskStore(state => state.tasks);

  // useMemo means that we only recalculate the filtered tasks when the tasks or status changes
  const filteredTasks = useMemo(
    () => tasks.filter(task => task.status === status),
    [tasks, status]
  );

  return (
    <section className='h-[600px] flex-1'>
      <h2 className='font-2xl ml-1 font-bold text-white'>{title}</h2>
      <div className='mt-3.5 h-full w-full rounded-xl bg-white/50 p-4'>
        {filteredTasks.map(task => (
          <Task key={task.id} {...task} />
        ))}
      </div>
    </section>
  );
};
