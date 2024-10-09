import { Stack, Typography } from "@mui/material";
import CenteredBox from "./CenteredBox";

type MessageProps = {
  image: string;
  message: string;
};

const Message = ({ image, message }: MessageProps) => {
  return (
    <CenteredBox>
      <Stack spacing={3}>
        <img src={image} alt={message} style={{ height: "10vh" }} />
        <Typography>{message}</Typography>
      </Stack>
    </CenteredBox>
  );
};

export default Message;
