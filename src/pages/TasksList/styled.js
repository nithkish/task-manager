import { Button, styled } from "@mui/material";
import { themes } from "../../themes";

export const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: themes[theme].primary.color,
  color: themes[theme].primary.buttonTextColor,
  maxWidth: "200px",
  alignSelf: "end",
}));
