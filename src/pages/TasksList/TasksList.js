import { Box, Paper, Stack, Typography } from "@mui/material";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { TasksQueue } from "./TasksQueue";
import { useTasksList } from "../../hooks/useTasksList";
import { TasksHead } from "./TasksHead";
import { StyledButton } from "./styled";
import { themes } from "../../themes";


export const TasksList = () => {
  const [theme] = useLocalStorageState("theme");
  const [filter, setfilter] = useState("All");
  const [search, setSearch] = useState("");
  

  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`./taskdetails/${tasks[0].contractNumber}`);
  };
  const handleFilterChange = (e) => {
    setfilter(e.target.value);
  };

  const tasks = useTasksList(filter, search);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Box marginX={{ xs: 1, md: 4 }}>
      <Paper
        elevation={2}
        sx={{ color: "inherit", backgroundColor: themes[theme].primary.backgroundColor }}
      >
        <Stack direction="column" marginX={{ xs: 1, md: 4 }}>
          <Typography variant="h6" marginTop={1}>
            Tasks List
          </Typography>
          <TasksHead
            filter={filter}
            handleFilterChange={handleFilterChange}
            handleSearch={handleSearch}
          />
          <TasksQueue tasks={tasks} />
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
