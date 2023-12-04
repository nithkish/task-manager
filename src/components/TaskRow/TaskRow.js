import { HeadlineWrapper, NameText, Text } from "./styled";
import useLocalStorageState from "use-local-storage-state";
import { Stack } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

export const TaskRow = ({ contract, name, status }) => {
  const [theme] = useLocalStorageState("theme");
  return (
    <HeadlineWrapper theme={theme}>
      <Stack direction="row" gap={1}>
        <AssignmentTurnedInIcon />
        <Text>{contract}</Text>
      </Stack>
      <Stack direction="row" flex={1}>
        <NameText>{name}</NameText>
        <Text>{status}</Text>
      </Stack>
    </HeadlineWrapper>
  );
};
