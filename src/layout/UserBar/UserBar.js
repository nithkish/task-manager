import { Box } from "@mui/material";
import { ThemeSwitch } from "../../components/ThemeSwitch/ThemeSwitch";
import { UserCard } from "../../components/UserCard";

export const UserBar = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      margin={{ xs: 1, md: 4 }}
    >
      <UserCard userName="Alex Azubi" userRole="Task Manager" />
      <ThemeSwitch />
    </Box>
  );
};
