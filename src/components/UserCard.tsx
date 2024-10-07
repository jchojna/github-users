import { Avatar, Card, CardHeader, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "../utils/fetch";
import UserPlaceholder from "./UserCardPlaceholder";
import UserDetails from "./UserDetails";

const AVATAR_SIZE = 50;

const UserCard = ({ login, avatar_url, url }: User) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["details", url],
    queryFn: () => fetchDetails(url),
    enabled: !!url,
  });

  return (
    <Card
      sx={{
        maxWidth: 400,
        display: "flex",
        flexDirection: "column",
        padding: "15px",
      }}
    >
      {isLoading && <UserPlaceholder />}
      {error && <div>Error: {error.message}</div>}
      {!isLoading && !error && (
        <>
          <CardHeader
            avatar={
              <Avatar
                alt={login}
                src={avatar_url}
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
                {data?.name ?? login}
              </Typography>
            }
            subheader={
              <Typography
                variant="body1"
                sx={{
                  textAlign: "left",
                }}
              >
                {data?.name ? `@${login}` : null}
                {data?.name && data.hireable && " | "}
                {data?.hireable && "Open to work"}
              </Typography>
            }
          ></CardHeader>
          <UserDetails details={data} isLoading={isLoading} error={error} />
        </>
      )}
    </Card>
  );
};

export default UserCard;
