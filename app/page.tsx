import { Columns } from '@/components/columns';

export default function Home() {
  return (
    <main className='flex h-screen bg-gradient-to-b from-emerald-500 to-emerald-400 py-12'>
      <div className='mx-auto w-full max-w-7xl px-6 text-xl'>
        <Columns />
      </div>
    </main>
  );
}
