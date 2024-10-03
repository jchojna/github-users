export const fetchUsers = async (searchValue: string) => {
  // const response = await fetch(
  //   `https://api.github.com/search/users?q=${searchValue}`,
  // );
  // return response.json();
  return [
    {
      login: "john",
      avatar_url: "https://avatars.githubusercontent.com/u/1668?v=4",
    },
    {
      login: "john-smilga",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
    },
    {
      login: "johnpapa",
      avatar_url: "https://avatars.githubusercontent.com/u/1202528?v=4",
    },
    {
      login: "john",
      avatar_url: "https://avatars.githubusercontent.com/u/1668?v=4",
    },
    {
      login: "john-smilga",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
    },
    {
      login: "johnpapa",
      avatar_url: "https://avatars.githubusercontent.com/u/1202528?v=4",
    },
    {
      login: "john",
      avatar_url: "https://avatars.githubusercontent.com/u/1668?v=4",
    },
    {
      login: "john-smilga",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
    },
    {
      login: "johnpapa",
      avatar_url: "https://avatars.githubusercontent.com/u/1202528?v=4",
    },
  ];
};
