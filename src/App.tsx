import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <header>
        <SearchForm onUpdate={setSearchValue} />
      </header>
      <main className="container">
        {users &&
          users.map((user) => (
            <div>
              <img src={user.avatar_url} alt={user.login} />
              <p>{user.login}</p>
            </div>
          ))}
      </main>
    </>
  );
}

export default App;
