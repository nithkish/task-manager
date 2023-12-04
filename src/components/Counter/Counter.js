import { CircularProgress, Box, Typography, Paper, Stack } from "@mui/material";
import { useTasksStats } from "../../hooks/useTasksStats";
import {
  CounterContainer,
  CounterTextContainer,
  CounterWidgetContainer,
} from "./styled";

export const Counter = () => {
  const { percentByStatus, newTasks, completedTasks, escalatedTasks } =
    useTasksStats();
  return (
    <Paper
      elevation={3}
      sx={{ height: "240px", marginX: { xs: 1 }, marginRight: { md: 3 } }}
    >
      <CounterWidgetContainer>
        <CounterContainer>
          <CircularProgress
            variant="determinate"
            value={percentByStatus(
              completedTasks.length + escalatedTasks.length
            )}
            size={180}
            sx={{ marginTop: { xs: 1, md: 2 }, marginX: 1 }}
          />
          <CounterTextContainer>
            <Stack component="div" alignItems="center">
              <Typography variant="h3">{completedTasks.length + escalatedTasks.length}</Typography>
              <Typography variant="subtitle2">Your score points</Typography>
            </Stack>
          </CounterTextContainer>
        </CounterContainer>
        <Typography
          variant="subtitle1"
          marginX={2}
          marginBottom={{ xs: 1, md: 3 }}
        >
          {newTasks.length} more to reach the daily goal
        </Typography>
      </CounterWidgetContainer>
    </Paper>
  );
};
