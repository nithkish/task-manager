import { Button, Stack } from "@mui/material";
import useLocalStorageState from "use-local-storage-state";

import { themes } from "../../themes";
export const TaskActions = ({ onClick }) => {
  const [theme] = useLocalStorageState("theme");
  return (
    <Stack
      direction="row"
      justifyContent="flex-end"
      gap={4}
      margin={{ xs: 1, md: 3 }}
    >
      <Button onClick={onClick}>✕ Skip</Button>
      <Button
        onClick={onClick}
        sx={{
          color: themes[theme].primary.color,
          backgroundColor: themes[theme].primary.buttonTextColor,
          maxWidth: "200px",
        }}
        variant="outlined"
      >
        Escalate
      </Button>
      <Button
        onClick={onClick}
        sx={{
          backgroundColor: themes[theme].primary.color,
          color: themes[theme].primary.buttonTextColor,
          maxWidth: "200px",
        }}
        variant="contained"
      >
        ✔ Done
      </Button>
    </Stack>
  );
};
