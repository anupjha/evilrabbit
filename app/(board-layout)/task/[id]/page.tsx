import TaskDetail from "@/app/(board-layout)/task/[id]/components/TaskDetail/TaskDetail";

interface BoardProps {
  params: { id: string };
}

export default async function Task({ params }: BoardProps) {
  return (
    <main className="flex flex-col grow bg-zinc-200">
      <TaskDetail taskId={params.id} />
    </main>
  );
}
