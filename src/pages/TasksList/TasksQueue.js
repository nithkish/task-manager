import {  Stack } from "@mui/material";
import { TaskRow } from "../../components/TaskRow";

export const TasksQueue = ({tasks}) => {
  return (
    <Stack direction="column" gap={1} sx={{my:2}}>
      {tasks.map((task) => (
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
