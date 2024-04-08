import { ExpandedTask } from "@/types/types";
import { getLabelsForBoard } from "@/lib/FetchData";
import AddToCardLabels from "./Labels/AddToCardLabels";
import AddToCardDates from "./Dates/AddToCardDates";
import AddChecklist from "./Checklist/AddChecklist";
import { IconUser } from "@tabler/icons-react";

export default async function TaskDetailAddToCard({ task }: { task: ExpandedTask }) {
  const labels = await getLabelsForBoard(task?.column.boardId);

  return (
    <div className="mb-5">
      <h4 className="text-sm text-zinc-700 font-semibold mb-1">Add to card</h4>
      <ul className="text-sm space-y-2">
        <AddToCardLabels labels={labels} task={task} boardId={task.column.boardId} />
        <AddChecklist taskId={task.id} boardId={task.column.boardId} />
        <AddToCardDates task={task} dateType="startDate" />
        <AddToCardDates task={task} dateType="dueDate" />
      </ul>
    </div>
  );
}
