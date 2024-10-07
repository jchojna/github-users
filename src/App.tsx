import { Box, Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import UserCard from "./components/UserCard";
import { fetchUsers } from "./utils/fetch";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users", searchValue],
    queryFn: () => fetchUsers(searchValue),
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Stack spacing={5}>
      <SearchForm onUpdate={setSearchValue} />
      {isLoading && (
        <Box>
          <CircularProgress />
        </Box>
      )}
      {error && <div>Error</div>}
      {users && !users.length && <div>No users found</div>}
      {users && !!users.length && (
        <div
          style={{
            display: "grid",
            gap: "20px",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          }}
        >
          {users.map((user) => (
            <UserCard key={user.login} {...user} />
          ))}
        </div>
      )}
    </Stack>
  );
}

export default App;
