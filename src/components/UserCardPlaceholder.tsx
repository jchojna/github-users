import { CardContent, CardHeader, Skeleton } from "@mui/material";

const UserPlaceholder = () => {
  return (
    <>
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
    </>
  );
};

export default UserPlaceholder;
