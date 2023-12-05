import { Stack, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { themes } from "../../themes";

export const HeadlineWrapper = styled(Stack)(() => ({
  gap:8,
  size:"small", 
  flexDirection: "row",
  alignItems: "center",
  padding: "8px 16px",
  borderRadius: "8px",
  overflow: "hidden",
  justifyContent: "space-between",
  width:'100%'
}));

export const NameText = styled(Typography)(() => ({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}));

export const Text = styled(Typography)(() => ({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  borderRadius:'10px',
  textTransform: "none",
  padding: "0",
  lineHeight: 1.5,
  color:'inherit',
  backgroundColor: themes[theme].taskrow.backgroundColor,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  ":hover": {
    backgroundColor: themes[theme].taskrow.hoverBg,
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
}));
