import { Button, Paper, Stack, Typography, Box } from "@mui/material";
import {useNavigate} from 'react-router-dom'

import { InfoCard } from "../InfoCard";

export const TaskInfoWidget = () => {
  const navigate = useNavigate();
  const navigateToTask = ()=>{
    navigate('/')
  }
  return (
    <Box marginX={{ xs: 1, md: 2 }}>
      <Paper elevation={3}>
        <Stack direction="column" marginY={{xs:1,md:3}}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            marginTop={{xs:1,md:3}}
            marginX={2}
          >
            <Typography variant="subtitle2" fontWeight="600">
              Excerpt from Patient's file
            </Typography>
            <Button onClick={navigateToTask}>{`To Tasks List >`}</Button>
          </Stack>
          <InfoCard />
        </Stack>
      </Paper>
    </Box>
  );
};