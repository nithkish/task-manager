import { Typography, Paper } from "@mui/material";
import useLocalStorageState from "use-local-storage-state";

import { useTasksStats } from "../../hooks/useTasksStats";
import { CounterWidgetContainer } from "./styled";
import { CustomCircularProgress } from "./CustomCircularProgress";
import { themes } from "../../themes";

export const Counter = () => {
  const [theme] = useLocalStorageState("theme");
  const { percentByStatus, newTasks, completedTasks, escalatedTasks } =
    useTasksStats();
  return (
    <Paper
      elevation={4}
      sx={{
        color: "inherit",
        backgroundColor: themes[theme].primary.backgroundColor,
        height: "240px",
        margin: { xs: 1 },
        marginRight: { md: 4 },
        minWidth: "256px",
      }}
    >
      <CounterWidgetContainer>
        <CustomCircularProgress
          value={percentByStatus(completedTasks.length + escalatedTasks.length)}
          counterData={completedTasks.length + escalatedTasks.length}
        />
        <Typography variant="subtitle1" marginX={3} marginY={3}>
          {newTasks.length} more to reach the daily goal
        </Typography>
      </CounterWidgetContainer>
    </Paper>
  );
};
