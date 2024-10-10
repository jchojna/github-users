import { Stack, Typography } from "@mui/material";

type UserDetailProps = {
  detail: string | null;
  label: string;
};

const UserDetail = ({ detail, label }: UserDetailProps) => {
  return (
    <Stack direction="row" spacing="10px" sx={{ alignItems: "baseline" }}>
      <Typography variant="body2">{label}</Typography>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        {detail || "-"}
      </Typography>
    </Stack>
  );
};

export default UserDetail;
