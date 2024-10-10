import GitHubIcon from "@mui/icons-material/GitHub";
import { Box, Container, Grid2, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Fragment, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import "./App.css";
import errorImage from "./assets/error.svg";
import emptyStateImage from "./assets/no_data.svg";
import AppHeader from "./components/AppHeader";
import CenteredBox from "./components/CenteredBox";
import Message from "./components/Message";
import UserCard from "./components/user/UserCard";
import UserPlaceholder from "./components/user/UserCardPlaceholder";
import useUsers from "./hooks/useUsers";
import { CONSTS } from "./utils/constants";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "lg"));
  const itemsPerPage = isMobile ? 1 : isTablet ? 2 : 3;

  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, isFetching, error, fetchNextPage, hasNextPage } =
    useUsers(searchValue, itemsPerPage);

  const gridSizes = { xs: 12, sm: 6, md: 4 };
  const areUsers = !!data?.pages[0].total_count;
  const isHeaderMinimized = areUsers || !!isLoading;
  const isSkeletonLoading = isLoading || (isFetching && hasNextPage);

  return (
    <Stack spacing={5} sx={{ height: "100%" }}>
      <AppHeader
        onSearchSubmit={setSearchValue}
        isMinimized={isHeaderMinimized}
      />
      <Box
        sx={{
          pt: isHeaderMinimized ? "200px" : "50vh",
          pb: "50px",
          minHeight: "90%",
          mt: 0,
          transition: "padding-top 0.3s",
        }}
      >
        <Container sx={{ height: "100%" }}>
          {searchValue.length === 0 && (
            <CenteredBox>
              <GitHubIcon sx={{ fontSize: 150 }} />
            </CenteredBox>
          )}
          {error && <Message image={errorImage} message={error.message} />}
          {data?.pages && !areUsers && (
            <Message
              image={emptyStateImage}
              message={CONSTS.label.usersEmptyState}
            />
          )}
          {areUsers && (
            <InfiniteScroll
              loadMore={() => fetchNextPage()}
              hasMore={hasNextPage}
            >
              {/* Show users cards */}
              <Grid2 container spacing={2}>
                {data.pages.map((group, i) => (
                  <Fragment key={i}>
                    {group.items.map(
                      ({ id, url }: { id: string; url: string }) => (
                        <Grid2 key={id} size={gridSizes}>
                          <UserCard key={id} url={url} />
                        </Grid2>
                      ),
                    )}
                  </Fragment>
                ))}
              </Grid2>
            </InfiniteScroll>
          )}

          {/* Show loading skeleton cards */}
          {isSkeletonLoading && (
            <Grid2 container spacing={2}>
              {Array.from(Array(itemsPerPage)).map((_, i) => (
                <Grid2 key={i} size={gridSizes}>
                  <UserPlaceholder />
                </Grid2>
              ))}
            </Grid2>
          )}
        </Container>
      </Box>
    </Stack>
  );
}

export default App;
