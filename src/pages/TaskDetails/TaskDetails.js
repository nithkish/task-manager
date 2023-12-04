import { Stack, Paper, Box } from "@mui/material";
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { TaskAlert } from "../../components/TaskAlert";
import { TaskInfoWidget } from "../../components/TaskInfoWidget";
import { TaskActions } from "../../components/TaskActions";
import { TaskContext } from "../../App";
import { ConfirmModal } from "../../components/ConfirmModal";

export const TaskDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { contractNumber } = useParams();

  const navigate = useNavigate();

  const { tasks } = useContext(TaskContext);

  const currentTaskIndex = tasks.findIndex(
    (task) => task.contractNumber == contractNumber
  );

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClick = () => {
    let index = 0;
    if (currentTaskIndex !== tasks.length - 1) index = currentTaskIndex + 1;
    navigate(`../taskdetails/${tasks[index].contractNumber}`, {
      replace: true,
    });
    setIsOpen(false);
  };

  return (
    <>
      <Box marginX={{ xs: 1, md: 4 }}>
        <Paper>
          <Stack direction="column">
            <TaskAlert />
            <TaskInfoWidget currentTask={tasks[currentTaskIndex]} />
            <TaskActions onClick={handleButtonClick} />
          </Stack>
        </Paper>
      </Box>
      <ConfirmModal
        isOpen={isOpen}
        onCancel={() => setIsOpen(false)}
        onProceed={handleClick}
      />
    </>
  );
};
