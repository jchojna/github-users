export const fetchUsers = async ({ queryKey, pageParam }) => {
  await delay(1000);
  const users = [];
  const itemsPerPage = queryKey[2];

  for (let i = 1; i <= 5; i++) {
    users.push({
      total_count: 5 * itemsPerPage,
      items: Array.from(Array(itemsPerPage)).map((_, j) => ({
        id: i * itemsPerPage + j,
        url: "test",
      })),
    });
  }
  return users[pageParam - 1];
};

export const fetchDetails = async (url: string) => {
  console.log(url);
  await delay(1000);
  return {
    login: "john",
    avatar_url: "https://avatars.githubusercontent.com/u/1668?v=4",
    html_url: "https://github.com/john",
    type: "User",
    name: "John McGrath",
    company: "RMI",
    blog: "www.johnsmilga.com",
    location: null,
    email: null,
    hireable: true,
    bio: "Product at @RMI. Ex-AWS Sustainability, co-founder @Entelo, dev @NYTimes and @WHOIGit. Interested in climate, renewable energy, journalism, and democracy.",
    twitter_username: "Wordie",
    public_repos: 62,
    followers: 169,
    following: 66,
    created_at: "2008-02-28T23:17:13Z",
    updated_at: "2024-08-16T17:51:23Z",
  };
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
