import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useEffect, useRef, useState } from "react";
import LinearProgressBar from "./LinearProgressBar";
import SearchForm from "./SearchForm";

type AppHeaderProps = {
  onSearchSubmit: (searchValue: string) => void;
};

const AppHeader = ({ onSearchSubmit }: AppHeaderProps) => {
  const theme = useTheme();
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const searchFormRef = useRef<HTMLFormElement | null>();

  useEffect(() => {
    handleSearchChange();
  }, []);

  const handleSearchChange = () => {
    setProgress(0);
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timerRef.current);
          searchFormRef.current?.trigger();
          return 100;
        } else {
          return prevProgress + 1;
        }
      });
    }, 20);
    return () => {
      clearInterval(timerRef.current);
    };
  };

  return (
    <Box
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 1000,
        backdropFilter: "blur(50px)",
        [theme.breakpoints.down("md")]: {
          height: "300px",
        },
      }}
    >
      <SearchForm
        ref={searchFormRef}
        onSearchChange={handleSearchChange}
        onSearchSubmit={onSearchSubmit}
      />
      <Box sx={{ width: "100%" }}>
        <LinearProgressBar value={progress} />
      </Box>
    </Box>
  );
};

export default AppHeader;
