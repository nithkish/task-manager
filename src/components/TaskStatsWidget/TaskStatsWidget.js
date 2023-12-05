import { Stack, Box } from "@mui/material";
import { TaskStatItem } from "./TaskStatItem";
import { useStatConfig } from "../../hooks/useStatsConfig";

export const TaskStatsWidget = () => {
  const tasksStats = useStatConfig();

  return (
    <Box marginX={{ xs: 1, md: 2 }} marginBottom={3}>
      <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap={1}>
        {tasksStats.map((stat) => (
          <TaskStatItem
            key={stat.key}
            title={stat.title}
            subtitle={stat.subtitle}
            data={stat.data}
          />
        ))}
      </Stack>
    </Box>
  );
};
