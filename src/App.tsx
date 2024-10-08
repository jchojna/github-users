import { Grid2, Stack } from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import "./App.css";
import SearchForm from "./components/SearchForm";
import UserCard from "./components/UserCard";
import UserPlaceholder from "./components/UserCardPlaceholder";
import { fetchUsers } from "./utils/mockedFetch";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["users", searchValue],
      queryFn: fetchUsers,
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = Math.floor(lastPage.total_count / 4);
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
                {group.items.map(({ id, url }) => {
                  return (
                    <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
                      <UserCard key={id} url={url} />
                    </Grid2>
                  );
                })}
              </React.Fragment>
            ))}
          </Grid2>
        </InfiniteScroll>
      )}
      {isLoading && (
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <UserPlaceholder />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <UserPlaceholder />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <UserPlaceholder />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <UserPlaceholder />
          </Grid2>
        </Grid2>
      )}
    </Stack>
  );
}

export default App;
