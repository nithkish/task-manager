import {
  Stack,
  Typography,
  TextField,
  Box,
  Paper,
  Button,
} from "@mui/material";
import useLocalStorageState from "use-local-storage-state";
import { themes } from "../../themes";

export const MissingInfoWidget = () => {
    const [theme] = useLocalStorageState("theme");
  return (
    <Box marginX={{ xs: 1, md: 2 }}>
      <Paper elevation={3}>
        <Stack direction="column">
          <Typography
            variant="subtitle2"
            fontWeight="600"
            marginTop={{ xs: 1, md: 2 }}
            marginX={2}
          >
            Add missing Information
          </Typography>
          <Stack direction="row" marginY={{ xs: 1, md: 2 }} marginX={2} gap={1}>
            <TextField
              disabled
              label="Enter Missing Information"
              variant="filled"
              sx={{flex:'1'}}
            />
            <Button
            
              sx={{
                backgroundColor: themes[theme].primary.color,
                color: themes[theme].primary.buttonTextColor,
                maxWidth: "200px",

              }}
            >Save</Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};
