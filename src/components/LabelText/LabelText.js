import { Typography, Stack } from "@mui/material";
import useLocalStorageState from "use-local-storage-state";
import { themes } from "../../themes";

export const LabelText = ({ label, data }) => {
  const [theme] = useLocalStorageState("theme");
  return (
    <Stack direction="column" alignItems='flex-start' sx={{ p: { xs: 1, md: 2 }}}>
      <Typography color={themes[theme].primary.labelTextColor}>
        {label}
      </Typography>
      <Typography>{data}</Typography>
    </Stack>
  );
};
