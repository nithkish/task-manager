import { Modal, Box, Button, Typography, Stack, Backdrop } from "@mui/material";

import useLocalStorageState from "use-local-storage-state";

import { themes } from "../../themes";

export const ConfirmModal = ({ isOpen, onCancel, onProceed }) => {
  const [theme] = useLocalStorageState("theme");

  const boxStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {xs:250,md:400},
    bgcolor: themes[theme].body.backgroundColor,
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={isOpen}
      onClose={onCancel}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Box sx={boxStyle}>
        <Stack direction="column" gap={5} >
          <Stack direction="column" gap={2} alignItems='start'>
            <Typography variant="h6" fontWeight='600'>Confirm Action!</Typography>
            <Typography variant="subtitle2">
              Would you like to proceed with this action?
            </Typography>
          </Stack>
          <Stack
            direction="row"
            gap={4}
            justifyContent='flex-end'
            sx={{ margin: 1 }}
          >
            <Button
              sx={{
                backgroundColor: themes[theme].primary.buttonTextColor,
                color: themes[theme].primary.color,
                maxWidth: "200px",
              }}
              variant="outlined"
              onClick={onCancel}
            >
              Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: themes[theme].primary.color,
                color: themes[theme].primary.buttonTextColor,
                maxWidth: "200px",
              }}
              variant="contained"
              onClick={onProceed}
            >
              Proceed
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Modal>
  );
};
