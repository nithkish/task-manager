import { Stack, Paper, Box } from "@mui/material";
import { TaskAlert } from "../../components/TaskAlert";
import { TaskInfoWidget } from "../../components/TaskInfoWidget";
import { MissingInfoWidget } from "../../components/MissingInfoWidget";
import { TaskActions } from "../../components/TaskActions";

export const TaskDetails = () => {
  return (
    <Box marginX={{ xs: 1, md: 4 }}>
      <Paper>
        <Stack direction="column">
          <TaskAlert />
          <TaskInfoWidget />
          {/* <MissingInfoWidget /> */}
          <TaskActions />
        </Stack>
      </Paper>
    </Box>
  );
};
