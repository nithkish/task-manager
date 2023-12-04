import { Card, Box, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { NameCard } from "./NameCard";
import { LabelText } from "../LabelText";
import { TaskContext } from "../../App";

export const InfoCard = () => {
  const { contractNumber } = useParams();

  const { tasks } = useContext(TaskContext);

  const currentTask = tasks.find(
    (task) => task.contractNumber == contractNumber
  );

  return (
    <Box sx={{ margin: { xs: 1, md: 2 }, maxWidth: "500px" }}>
      <Card variant="outlined">
        {currentTask ? (
          <Stack direction="column">
            <Stack direction="row" justifyContent="space-between">
              <NameCard
                firstName={currentTask.firstName}
                lastName={currentTask.lastName}
              />
              <LabelText label={"Contract Number"} data={contractNumber} />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <LabelText label={"Gender"} data={currentTask.sex} />
              <LabelText label={"D.O.B"} data={currentTask.dob} />
              <LabelText label={"Status"} data={currentTask.status} />
            </Stack>
            <LabelText label={"Telephone"} data={currentTask.phone} />
            <LabelText label={"Address"} data={currentTask.address} />
          </Stack>
        ) : (
          <Typography variant="h5">Record not found!</Typography>
        )}
      </Card>
    </Box>
  );
};
