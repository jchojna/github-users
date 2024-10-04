import { Avatar, Card, CardContent, CardHeader, Skeleton } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "../utils/fetch";
import UserDetails from "./UserDetails";

const AVATAR_SIZE = 60;

type UserCardProps = {
  login: string;
  avatar_url: string;
  url: string;
  isUserLoading: boolean;
  userError: Error | null;
};

const UserCard = ({
  login,
  avatar_url,
  url,
  isUserLoading,
  // userError,
}: UserCardProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["details", url],
    queryFn: () => fetchDetails(url),
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
      <CardHeader
        avatar={
          <Avatar
            alt={login}
            src={avatar_url}
            sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
          />
        }
        title={login}
        subheader="September 14, 2016"
      ></CardHeader>
      <UserDetails details={data} isLoading={isLoading} error={error} />
    </Card>
  );
};

export default UserCard;
