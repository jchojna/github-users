import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";

import LinearProgressBar from "./LinearProgressBar";
import SearchForm from "./SearchForm";

type AppHeaderProps = {
  onSearchSubmit: (searchValue: string) => void;
  isMinimized: boolean;
};

const AppHeader = ({ onSearchSubmit, isMinimized }: AppHeaderProps) => {
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(
    undefined,
  );
  const searchFormRef = useRef<HTMLFormElement | null>();

  useEffect(() => {
    // do not trigger progress bar on start
    clearInterval(timerRef.current);
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
        alignItems: "center",
        backdropFilter: "blur(50px)",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        flexDirection: "column",
        height: isMinimized ? "150px" : "50vh",
        justifyContent: "center",
        left: 0,
        position: "fixed",
        top: 0,
        transition: "height 0.3s",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
        <SearchForm
          ref={searchFormRef}
          onSearchChange={handleSearchChange}
          onSearchSubmit={onSearchSubmit}
        />
      </Box>
      <Box sx={{ width: "100%" }}>
        <LinearProgressBar value={progress} />
      </Box>
    </Box>
  );
};

export default AppHeader;
