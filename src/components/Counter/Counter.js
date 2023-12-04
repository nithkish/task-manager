import { Typography, Paper } from "@mui/material";
import { useTasksStats } from "../../hooks/useTasksStats";
import { CounterWidgetContainer } from "./styled";
import { CustomCircularProgress } from "./CustomCircularProgress";

export const Counter = () => {
  const { percentByStatus, newTasks, completedTasks, escalatedTasks } =
    useTasksStats();
  return (
    <Paper
      elevation={4}
      sx={{ height: "240px", marginX: { xs: 1 }, marginRight: { md: 3 } }}
    >
      <CounterWidgetContainer>
        <CustomCircularProgress
          value={percentByStatus(completedTasks.length + escalatedTasks.length)}
          counterData={completedTasks.length + escalatedTasks.length}
        />
        <Typography variant="subtitle1" marginX={3} marginY={{ xs: 1, md: 3 }}>
          {newTasks.length} more to reach the daily goal
        </Typography>
      </CounterWidgetContainer>
    </Paper>
  );
};
