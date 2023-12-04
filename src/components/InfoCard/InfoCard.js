import { Card, Box, Stack, Typography } from "@mui/material";
import useLocalStorageState from "use-local-storage-state";

import { NameCard } from "./NameCard";
import { LabelText } from "../LabelText";
import { themes } from "../../themes";

export const InfoCard = ({ currentTask }) => {
  const [theme] = useLocalStorageState("theme");
  return (
    <Box sx={{ margin: { xs: 1, md: 2 }, maxWidth: "500px" }}>
      <Card
        variant="outlined"
        sx={{ color:'inherit', backgroundColor: themes[theme].primary.softBg }}
      >
        {currentTask ? (
          <Stack direction="column">
            <Stack direction="row" justifyContent="space-between">
              <NameCard
                firstName={currentTask.firstName}
                lastName={currentTask.lastName}
              />
              <LabelText
                label={"Contract Number"}
                data={currentTask.contractNumber}
              />
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
