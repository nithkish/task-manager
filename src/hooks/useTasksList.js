import { useMemo } from "react";
import { useTasksStats } from "./useTasksStats";

export const useTasksList = (filter, search) => {
  const { tasks, completedTasks, escalatedTasks, newTasks } = useTasksStats();

  let filteredTasks = [];
  switch (filter) {
    case "All": {
      filteredTasks = tasks;
      break;
    }
    case "New": {
      filteredTasks = newTasks;
      break;
    }
    case "Escalated": {
      filteredTasks = escalatedTasks;
      break;
    }
    case "Done": {
      filteredTasks = completedTasks;
      break;
    }
  }

  if (search.length < 3) return filteredTasks;

  return filteredTasks.filter(
    (filter) =>
      filter.contractNumber.toString().includes(search.toLowerCase()) ||
      (filter.firstName + filter.lastName)
        .toLowerCase()
        .includes(search.toLowerCase())
  );
};
