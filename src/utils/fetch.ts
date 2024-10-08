export const fetchUsers = async ({ queryKey, pageParam, itemsPerPage }) => {
  const [, searchValue] = queryKey;

  const response = await fetch(
    `https://api.github.com/search/users?q=${searchValue}&page=${pageParam}&per_page=3`,
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

export const fetchDetails = async ({ queryKey }) => {
  const [, url] = queryKey;

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
