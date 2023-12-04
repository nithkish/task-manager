import { Typography, Paper, Stack, Box } from "@mui/material";
import useLocalStorageState from "use-local-storage-state";

import { themes } from "../../themes";

export const TaskStatItem = ({ title, data, subtitle }) => {
  const [theme] = useLocalStorageState("theme");

  return (
    <Paper
      elevation={3}
      sx={{
        color: "inherit",
        backgroundColor: themes[theme].primary.backgroundColor,
      }}
    >
      <Stack
        direction="column"
        sx={{ marginX: { xs: 1, md: 3 }, marginY: 1 }}
        alignItems="center"
        minWidth={{ xs: "130px", md: "180px" }}
      >
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="h5" color={themes[theme].primaryDark.color}>{data}</Typography>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </Stack>
    </Paper>
  );
};
