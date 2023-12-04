import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { useState } from "react";

import { SideBar } from "../SideBar";
import { UserBar } from "../UserBar";
import { TaskStatsWidget } from "../../components/TaskStatsWidget/TaskStatsWidget";
import { Counter } from "../../components/Counter";

export function AppLayout() {
  const [toggled, setToggled] = useState(false); //Need to share this state for mobile responsiveness
  const [broken, setBroken] = useState(false);

  return (
    <Stack
      direction="row"
      sx={{
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Box sx={{ minHeight: "100vh" }}>
        <SideBar
          toggled={toggled}
          setToggled={setToggled}
          setBroken={setBroken}
          broken={broken}
        />
      </Box>
      <Stack
        sx={{
          flex: 1,
          minHeight: "100vh",
          overflowX: "hidden",
          overflowY: "auto",
        }}
        gap={1}
        direction="column"
      >
        <UserBar broken={broken} toggled={toggled} setToggled={setToggled} />
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
        >
          <Stack direction="column" gap={3} flex={2}>
            <Outlet />
            <TaskStatsWidget />
          </Stack>
          <Counter />
        </Stack>
      </Stack>
    </Stack>
  );
}
