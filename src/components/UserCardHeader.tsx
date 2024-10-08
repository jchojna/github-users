import { Avatar, CardHeader, Typography } from "@mui/material";

const AVATAR_SIZE = 50;

type UserCardHeaderProps = {
  login: string;
  avatar_url: string | null;
  name: string | null;
  hireable: boolean;
};

const UserCardHeader = ({
  login,
  avatar_url,
  name,
  hireable,
}: UserCardHeaderProps) => {
  return (
    <CardHeader
      data-testid="userCardHeader"
      avatar={
        <Avatar
          alt={login}
          src={avatar_url ?? ""}
          sx={{
            width: AVATAR_SIZE,
            height: AVATAR_SIZE,
            boxShadow: "0 0 0 2px #1976d2",
            border: "2px solid #fff",
          }}
        />
      }
      title={
        <Typography
          variant="h3"
          color="primary"
          sx={{
            fontSize: "1.1rem",
            fontWeight: "600",
            textAlign: "left",
          }}
        >
          {name ?? login}
        </Typography>
      }
      subheader={
        <Typography
          variant="body1"
          sx={{
            textAlign: "left",
          }}
        >
          {name ? `@${login}` : null}
          {name && hireable && " | "}
          {hireable && "Open to work"}
        </Typography>
      }
    ></CardHeader>
  );
};

export default UserCardHeader;
