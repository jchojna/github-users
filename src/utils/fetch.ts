export const fetchUsers = async (searchValue: string) => {
  // const response = await fetch(
  //   `https://api.github.com/search/users?q=${searchValue}`,
  // );
  // return response.json();
  await delay(2000);
  return [
    {
      login: "john",
      avatar_url: "https://avatars.githubusercontent.com/u/1668?v=4",
      url: "https://api.github.com/users/john",
    },
    {
      login: "john-smilga",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      url: "https://api.github.com/users/john-smilga",
    },
    {
      login: "johnpapa",
      avatar_url: "https://avatars.githubusercontent.com/u/1202528?v=4",
      url: "https://api.github.com/users/johnpapa",
    },
    // {
    //   login: "john",
    //   avatar_url: "https://avatars.githubusercontent.com/u/1668?v=4",
    // },
    // {
    //   login: "john-smilga",
    //   avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
    // },
    // {
    //   login: "johnpapa",
    //   avatar_url: "https://avatars.githubusercontent.com/u/1202528?v=4",
    // },
    // {
    //   login: "john",
    //   avatar_url: "https://avatars.githubusercontent.com/u/1668?v=4",
    // },
    // {
    //   login: "john-smilga",
    //   avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
    // },
    // {
    //   login: "johnpapa",
    //   avatar_url: "https://avatars.githubusercontent.com/u/1202528?v=4",
    // },
  ];
};

export const fetchDetails = async (url: string) => {
  // const response = await fetch(url);
  // return response.json();

  await delay(2000);
  return [
    {
      login: "john",
      avatar_url: "https://avatars.githubusercontent.com/u/1668?v=4",
      html_url: "https://github.com/john",
      type: "User",
      name: "John McGrath",
      company: "RMI",
      blog: "",
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
    },
    {
      login: "john-smilga",
      avatar_url: "https://avatars.githubusercontent.com/u/42133389?v=4",
      html_url: "https://github.com/john-smilga",
      site_admin: false,
      name: "John Smilga",
      company: "Coding Addict",
      blog: "www.johnsmilga.com",
      location: "Sarasota, FL",
      email: null,
      hireable: null,
      bio: "Creator of Coding Addict",
      twitter_username: "john_smilga",
      public_repos: 257,
      followers: 19839,
      following: 0,
      created_at: "2018-08-06T06:48:23Z",
      updated_at: "2024-09-23T04:21:39Z",
    },
    {
      login: "johnpapa",
      avatar_url: "https://avatars.githubusercontent.com/u/1202528?v=4",
      html_url: "https://github.com/johnpapa",
      name: "John Papa",
      company: "JohnPapa.net, LLC",
      blog: "http://johnpapa.net",
      location: "Orlando, FL",
      email: null,
      hireable: null,
      bio: "Winter is Coming",
      twitter_username: "john_papa",
      public_repos: 145,
      followers: 15310,
      following: 1,
      created_at: "2011-11-17T17:05:03Z",
      updated_at: "2024-09-28T18:01:47Z",
    },
  ];
};

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
