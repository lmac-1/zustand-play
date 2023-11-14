import { Columns } from "@/components/columns";

export default function Home() {
  return (
    <main className="h-screen flex bg-gradient-to-b from-emerald-500 to-emerald-400">
      <div className="mx-auto w-full max-w-7xl px-6 text-xl">
        <Columns />
      </div>
    </main>
  );
}
