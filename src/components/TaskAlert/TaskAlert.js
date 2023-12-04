import { Stack, Typography } from "@mui/material";
import useLocalStorageState from "use-local-storage-state";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

import { ALERT_TEXT } from "../../constants/alertText";
import { themes } from "../../themes";

export const TaskAlert = () => {
  const [theme] = useLocalStorageState("theme");
  return (
    <Stack
      direction="column"
      sx={{ background: themes[theme].primary.softBlue }}
    >
      <Stack direction="row" alignItems="center" sx={{p:1}}>
        <AssignmentTurnedInIcon
          sx={{ p: 1, color: themes[theme].primaryDark.color }}
        />
        <Typography
          variant="h5"
          sx={{ color: themes[theme].primaryDark.color }}
        >
          Please check the patient's age
        </Typography>
      </Stack>
      <Typography variant="subtitle2" sx={{px:2,py:1}}>{ALERT_TEXT}</Typography>
    </Stack>
  );
};
