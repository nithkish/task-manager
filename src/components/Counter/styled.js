import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themes } from "../../themes";

export const CounterTextContainer = styled(Box)(({ theme }) => ({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const CounterContainer = styled(Box)(() => ({
  position: "relative",
  display: "inline-flex",
}));

export const CounterWidgetContainer = styled(Stack)(() => ({
  direction: "column",
  alignItems: "center",
}));
