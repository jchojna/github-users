import {
  LinearProgress,
  LinearProgressProps,
  Stack,
  Typography,
} from "@mui/material";

const LinearProgressBar = (props: LinearProgressProps & { value: number }) => {
  return (
    <Stack spacing={1}>
      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          opacity: props.value > 0 && props.value < 100 ? 1 : 0,
        }}
      >{`Remanining ${(2 - props.value / 50).toFixed(2)}s`}</Typography>
      <LinearProgress
        variant="determinate"
        sx={{ height: 5, width: "100%" }}
        {...props}
      />
    </Stack>
  );
};

export default LinearProgressBar;
