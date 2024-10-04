import { Avatar, Card, CardHeader } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "../utils/fetch";

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
  userError,
}: UserCardProps) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["details", url],
    queryFn: () => fetchDetails(url),
  });

  console.log(isUserLoading);
  console.log(userError);

  return (
    <Card sx={{ maxWidth: 345 }}>
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
      >
        {isUserLoading && <p>Loading...</p>}
      </CardHeader>
    </Card>
  );
};

export default UserCard;
