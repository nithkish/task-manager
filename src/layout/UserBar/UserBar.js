import { Box, Stack, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeSwitch } from "../../components/ThemeSwitch/ThemeSwitch";
import { UserCard } from "../../components/UserCard";

export const UserBar = ({ broken, toggled, setToggled }) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      margin={{ xs: 1, md: 4 }}
    >
      <Stack direction="row">
        {broken && !toggled && (
          <Button onClick={() => setToggled(!toggled)}>
            <MenuIcon />
          </Button>
        )}
        <UserCard userName="Alex Azubi" userRole="Task Manager" />
      </Stack>
      <ThemeSwitch />
    </Box>
  );
};
