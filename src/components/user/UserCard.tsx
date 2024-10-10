import { Card } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import errorImage from "../../assets/error.svg";
import { fetchDetails } from "../../utils/fetch";
import CenteredBox from "../CenteredBox";
import Message from "../Message";
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
    return (
      <Card data-testid="userCardError" sx={{ p: 10 }}>
        <CenteredBox>
          <Message image={errorImage} message={error.message} />
        </CenteredBox>
      </Card>
    );
  }

  if (data) {
    return (
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "15px",
          height: "100%",
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
