import { useCallback, useContext, useMemo } from "react";
import { TaskContext } from "../App";

export const useTasksStats = () => {
  const { tasks } = useContext(TaskContext);

  const completedTasks = useMemo(
    () => tasks.filter((task) => task.status === "Done"),
    [tasks]
  );

  const escalatedTasks = useMemo(
    () => tasks.filter((task) => task.status === "Escalated"),
    [tasks]
  );

  const newTasks = useMemo(
    () => tasks.filter((task) => task.status === "New"),
    [tasks]
  );

  const percentByStatus = useCallback(
    (taskLength) => Math.round((taskLength / tasks.length) * 100),
    [tasks]
  );

  return {
    tasks,
    completedTasks,
    escalatedTasks,
    newTasks,
    percentByStatus,
  };
};
