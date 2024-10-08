import { Card } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "../utils/fetch";
import UserCardActions from "./UserCardActions";
import UserCardContent from "./UserCardContent";
import UserCardHeader from "./UserCardHeader";
import UserPlaceholder from "./UserCardPlaceholder";

const UserCard = ({ url }: { url: string }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["details", url],
    queryFn: fetchDetails,
    enabled: !!url,
  });

  if (isLoading) {
    return <UserPlaceholder />;
  }

  if (error) {
    return <div data-testid="userCardError">Error: {error.message}</div>;
  }

  if (data) {
    return (
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "15px",
        }}
      >
        <UserCardHeader {...data} />
        <UserCardContent {...data} />
        <UserCardActions {...data} />
      </Card>
    );
  }
};

export default UserCard;
