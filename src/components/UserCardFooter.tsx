import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import { Button, CardActions, IconButton } from "@mui/material";

type UserDetailsProps = Pick<Details, "twitter_username" | "blog" | "html_url">;

export const UserDetails = ({
  twitter_username,
  blog,
  html_url,
}: UserDetailsProps) => {
  return (
    <CardActions sx={{ justifyContent: "space-between" }}>
      <div>
        {twitter_username && (
          <IconButton
            href={`https://x.com/${twitter_username}`}
            target="_blank"
            aria-label="twitter"
          >
            <XIcon />
          </IconButton>
        )}
        {blog && (
          <IconButton
            href={`https://${blog}`}
            target="_blank"
            aria-label="blog"
          >
            <AutoStoriesIcon />
          </IconButton>
        )}
      </div>
      <Button href={html_url} target="_blank" startIcon={<GitHubIcon />}>
        View Profile
      </Button>
    </CardActions>
  );
};

export default UserDetails;
