import { Box, Typography,Stack } from "@mui/material";
import { CircularProgressbar } from "react-circular-progressbar";
import useLocalStorageState from "use-local-storage-state";

import { themes } from "../../themes";
import {
    CounterContainer,
    CounterTextContainer,
  } from "./styled";

export const CustomCircularProgress = ({ value,counterData }) => {
  const [theme] = useLocalStorageState("theme");
  const idCSS = "progress";

  const GradientSVG = () => {
    return (
      <svg style={{ height: 0 }}>
        <defs>
          <linearGradient id={idCSS} gradientTransform={"rotate(90)"}>
            <stop offset="16.29%" stopColor={themes[theme].primary.focus} />
            <stop offset="75.56%" stopColor={themes[theme].primary.color} />
          </linearGradient>
        </defs>
      </svg>
    );
  };

  return (
    <CounterContainer>
      <Box sx={{ height: "180px", width: "180px" }}>
        <GradientSVG />
        <CircularProgressbar
          strokeWidth={8}
          value={value}
          styles={{
            path: { stroke: `url(#${idCSS})`, height: "100%" },
            trail: {
              stroke: themes[theme].primary.focus,
            },
          }}
        />
      </Box>
      <CounterTextContainer>
        <Stack component="div" alignItems="center">
          <Typography variant="h3" fontWeight='600' color={themes[theme].primary.color}>
            {counterData}
          </Typography>
          <Typography variant="subtitle2">Your score points</Typography>
        </Stack>
      </CounterTextContainer>
    </CounterContainer>
  );
};
