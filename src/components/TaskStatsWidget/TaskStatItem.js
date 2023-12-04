import { Typography, Paper, Stack, Box } from "@mui/material";

export const TaskStatItem = ({ title, data, subtitle }) => {
  return (
    <Paper elevation={3}>
      <Stack
        direction="column"
        sx={{ marginX: { xs: 1, md: 3 }, marginY: 1 }}
        alignItems="center"
        minWidth={{ xs: "130px", md: "180px" }}
      >
        <Typography variant="subtitle1">{title}</Typography>
        <Typography variant="h5">{data}</Typography>
        <Typography variant="subtitle2">{subtitle}</Typography>
      </Stack>
    </Paper>
  );
};
