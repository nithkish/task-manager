import useLocalStorageState from "use-local-storage-state";
import { Stack } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { useNavigate } from "react-router-dom";

import { HeadlineWrapper, NameText, Text, CustomButton } from "./styled";

export const TaskRow = ({ contract, name, status }) => {
  const [theme] = useLocalStorageState("theme");

  const navigate = useNavigate();
  const navigateToDetails = () => {
    navigate(`./taskdetails/${contract}`);
  };
  return (
    <CustomButton theme={theme} onClick={navigateToDetails}>
      <HeadlineWrapper>
        <Stack direction="row" gap={1}>
          <AssignmentTurnedInIcon />
          <Text>{contract}</Text>
        </Stack>
        <Stack direction="row" flex={1} justifyContent='space-between'>
          <NameText>{name}</NameText>
          <Text>{status}</Text>
        </Stack>
      </HeadlineWrapper>
    </CustomButton>
  );
};
