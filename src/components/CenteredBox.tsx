import { Box } from "@mui/material";

const CenteredBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default CenteredBox;
