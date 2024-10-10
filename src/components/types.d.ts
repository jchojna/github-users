type UserCardContentProps = {
  name: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
};

type UserCardHeaderProps = {
  login: string;
  name: string | null;
  avatar_url: string | null;
  hireable: boolean;
  html_url: string;
};

type UserCardActionsProps = {
  blog: string | null;
  twitter_username: string | null;
  html_url: string;
};
