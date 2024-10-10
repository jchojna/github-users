import {
  LinearProgress,
  LinearProgressProps,
  Stack,
  Typography,
} from "@mui/material";

import { CONSTS } from "../utils/constants";
import { getRemainingSeconds } from "../utils/time";

const LinearProgressBar = (props: LinearProgressProps & { value: number }) => {
  const secondsRemaining = getRemainingSeconds(
    CONSTS.value.delayInSec,
    props.value,
  );

  return (
    <Stack spacing={1}>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          opacity: props.value > 0 && props.value < 100 ? 1 : 0,
        }}
      >{`Remanining ${secondsRemaining}s`}</Typography>
      <LinearProgress
        variant="determinate"
        sx={{ height: 5, width: "100%" }}
        {...props}
      />
    </Stack>
  );
};

export default LinearProgressBar;
