import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";

const UserPlaceholder = () => {
  return (
    <Card
      data-testid="userPlaceholder"
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "15px",
      }}
    >
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={50}
            height={50}
          />
        }
        title={<Skeleton animation="wave" height={25} width="80%" />}
        subheader={<Skeleton animation="wave" height={20} width="40%" />}
      />
      <CardContent>
        <Skeleton
          animation="wave"
          height={200}
          width="100%"
          variant="rectangular"
        />
      </CardContent>
    </Card>
  );
};

export default UserPlaceholder;
