import { Grid2, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import "./App.css";
import SearchForm from "./components/SearchForm";
import UserCard from "./components/UserCard";
import UserPlaceholder from "./components/UserCardPlaceholder";
import { fetchUsers } from "./utils/fetch";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md")) && !isMobile;
  const isDesktop = !isMobile && !isTablet;
  const itemsPerPage = isDesktop ? 6 : isTablet ? 4 : 2;

  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading, isFetching, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["users", searchValue, itemsPerPage],
      queryFn: fetchUsers,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = Math.floor(lastPage.total_count / itemsPerPage);
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
      enabled: !!searchValue,
    });

  return (
    <Stack spacing={5}>
      <SearchForm onUpdate={setSearchValue} />
      {error && <div>Error</div>}
      {data?.pages && !data.pages.length && <div>No users found</div>}
      {data?.pages && (
        <InfiniteScroll loadMore={() => fetchNextPage()} hasMore={hasNextPage}>
          <Grid2 container spacing={2}>
            {data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.items.map(({ id, url }: { id: string; url: string }) => (
                  <Grid2 key={id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <UserCard key={id} url={url} />
                  </Grid2>
                ))}
              </React.Fragment>
            ))}
          </Grid2>
        </InfiniteScroll>
      )}
      {(isLoading || (isFetching && hasNextPage)) && (
        <Grid2 container spacing={2}>
          {Array.from(Array(itemsPerPage)).map((_, i) => (
            <Grid2 key={i} size={{ xs: 12, sm: 6, md: 4 }}>
              <UserPlaceholder />
            </Grid2>
          ))}
        </Grid2>
      )}
    </Stack>
  );
}

export default App;
