import { QueryFunctionContext } from "@tanstack/react-query";

export const fetchUsers = async ({
  queryKey,
  pageParam,
}: QueryFunctionContext) => {
  const searchValue = queryKey[1];
  const itemsPerPage = queryKey[2];

  const response = await fetch(
    `https://api.github.com/search/users?q=${searchValue}&page=${pageParam}&per_page=${itemsPerPage}`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Error while fetching users");
  }

  return response.json();
};

export const fetchDetails = async ({ queryKey }: { queryKey: string[] }) => {
  const url = queryKey[1];

  const response = await fetch(url, {
    headers: {
      Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error("Error while fetching user details");
  }

  return response.json();
};
