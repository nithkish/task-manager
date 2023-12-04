import PersonIcon from "@mui/icons-material/Person";
import { Stack, Typography } from "@mui/material";
import useLocalStorageState from "use-local-storage-state";

import { themes } from "../../themes";

export const NameCard = ({ firstName, lastName }) => {
  const [theme] = useLocalStorageState("theme");
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={2}
      sx={{ p: { xs: 1, md: 2 } }}
    >
      <PersonIcon
        sx={{
          p: 1,
          backgroundColor: themes[theme].primary.focus,
          color: themes[theme].primary.color,
          borderRadius: "10px",
        }}
      />
      <Stack direction="column" alignItems="flex-start">
        <Typography variant="subtitle2" color={themes[theme].primary.color}>
          Insured Person
        </Typography>
        <Typography variant="subtitle1" fontWeight='400' color={themes[theme].primary.color}>
          {`${firstName}, ${lastName}`}
        </Typography>
      </Stack>
    </Stack>
  );
};
