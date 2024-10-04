import { Card, CardContent, CardHeader, Skeleton } from "@mui/material";

const UserCardPlaceholder = () => {
  return (
    <Card sx={{ maxWidth: 400 }} variant="outlined">
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={<Skeleton animation="wave" height={25} width="80%" />}
        subheader={<Skeleton animation="wave" height={20} width="40%" />}
      />
      <CardContent>
        <Skeleton
          animation="wave"
          height={200}
          width="80%"
          variant="rectangular"
        />
      </CardContent>
    </Card>
  );
};

export default UserCardPlaceholder;
