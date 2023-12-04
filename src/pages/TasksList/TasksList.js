import { Box, Paper, Stack, Typography } from "@mui/material";
import useLocalStorageState from "use-local-storage-state";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { TasksQueue } from "./TasksQueue";
import { TaskContext } from "../../App";
import { StyledButton } from "./styled";

export const TasksList = () => {
  const [theme] = useLocalStorageState("theme");
  const { tasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`./taskdetails/${tasks[0].contractNumber}`);
  };

  return (
    <Box marginX={{ xs: 1, md: 4 }}>
      <Paper elevation={2}>
        <Stack direction="column" marginX={{ xs: 1, md: 4 }}>
          <Typography variant="h6" marginTop={1}>
            Tasks List
          </Typography>
          <TasksQueue />
          <StyledButton
            sx={{ marginBottom: { xs: 1, md: 3 } }}
            theme={theme}
            variant="contained"
            onClick={navigateToDetails}
          >
            Start Queue
          </StyledButton>
        </Stack>
      </Paper>
    </Box>
  );
};
