import { Box, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import "./App.css";
import SearchForm from "./components/SearchForm";
import UserCard from "./components/UserCard";
import { fetchUsers } from "./utils/mockedFetch";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const { data, error, fetchNextPage, hasNextPage, isFetching } =
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

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Stack spacing={5}>
      <SearchForm onUpdate={setSearchValue} />
      {isFetching && (
        <Box>
          <CircularProgress />
        </Box>
      )}
      {error && <div>Error</div>}
      {/* {users && !users.length && <div>No users found</div>} */}
      {data?.pages && (
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          }}
        >
          <InfiniteScroll
            loadMore={() => fetchNextPage()}
            hasMore={hasNextPage}
            loader={<div key={0}>Loading more users...</div>}
          >
            {data.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.items.map((user) => {
                  return <UserCard key={user.id} {...user} />;
                })}
              </React.Fragment>
            ))}
          </InfiniteScroll>
        </div>
      )}
    </Stack>
  );
}

export default App;
