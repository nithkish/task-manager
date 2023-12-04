import {  Stack } from "@mui/material";
import { TASK_LIST } from "../../constants/taskList";
import { TaskRow } from "../../components/TaskRow";

export const TasksQueue = () => {
  return (
    <Stack direction="column" gap={1} sx={{my:2}}>
      {TASK_LIST.map((task) => (
        <TaskRow
          name={task.firstName + " " + task.lastName}
          contract={task.contractNumber}
          status={task.status}
          key={task.contractNumber}
        />
      ))}
    </Stack>
  );
};
