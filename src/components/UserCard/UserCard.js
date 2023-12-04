import { Stack, Typography } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import useLocalStorageState from "use-local-storage-state";

import { themes } from "../../themes";

export const UserCard = ({ userName, userRole }) => {

  const [theme] = useLocalStorageState("theme");
  return (
    <Stack direction='row' alignItems='center' gap={2}> 
      <AssignmentTurnedInIcon
        sx={{
          p: 1,
          backgroundColor: themes[theme].secondary.backgroundColor,
          borderRadius: "10px",
        }}
      />
      <Stack direction="column" alignItems='flex-start'>
        <Typography variant="h6">{userName}</Typography>
        <Typography variant="subtitle2" color="#0074E8">
          {/* TODO :primary main */}
          {userRole}
        </Typography>
      </Stack>
    </Stack>
  );
};
