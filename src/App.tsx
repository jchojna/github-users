import { Container, Grid2, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import UserCard from "./components/UserCard";
import UserCardPlaceholder from "./components/UserCardPlaceholder";
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

  return (
    <Stack spacing={6} width="100%">
      <header>
        <SearchForm onUpdate={setSearchValue} />
      </header>
      <div
        style={{
          display: "grid",
          gap: "20px",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        }}
      >
        {!users &&
          isLoading &&
          Array.from(Array(4)).map((_, index) => (
            <UserCardPlaceholder key={index} />
          ))}
        {users &&
          users.map((user) => (
            <UserCard isUserLoading={isLoading} userError={error} {...user} />
          ))}
      </div>
    </Stack>
  );
}

export default App;
