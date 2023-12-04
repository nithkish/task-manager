import { useContext, useMemo } from "react";
import { useTasksStats } from "./useTasksStats";
import { TaskContext } from "../App";

export const useStatConfig = () => {
  const { tasks } = useContext(TaskContext);
  const { escalatedTasks, newTasks, completedTasks, percentByStatus } =
    useTasksStats();
  const total = tasks.length;

  const generateDataString = (taskLength) => `${taskLength}/${total}`;
  return useMemo(
    () => [
      {
        key: 1,
        title: "Total Tasks",
        data: `${total}`,
      },
      {
        key: 2,
        title: "New",
        data: `${generateDataString(newTasks.length)}`,
        subtitle: `${percentByStatus(newTasks.length)}% of the total`,
      },
      {
        key: 3,
        title: "Escalated",
        data: `${generateDataString(escalatedTasks.length)}`,
        subtitle: `${percentByStatus(escalatedTasks.length)}% of the total`,
      },
      {
        key: 4,
        title: "Done",
        data: `${generateDataString(completedTasks.length)}`,
        subtitle: `${percentByStatus(completedTasks.length)}% of the total`,
      },
    ],
    [tasks]
  );
};
