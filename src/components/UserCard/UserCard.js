import { Stack, Typography } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

export const UserCard = ({ userName, userRole }) => {
  return (
    <Stack direction='row' alignItems='center' gap={2}> 
      <AssignmentTurnedInIcon
        sx={{
          p: 1,
          backgroundColor: "#EDEDED", // TODO: grey
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
