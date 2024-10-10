import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import { Button, CardActions, IconButton } from "@mui/material";

const UserCardActions = ({
  twitter_username,
  blog,
  html_url,
}: UserCardActionsProps) => {
  return (
    <CardActions
      sx={{ justifyContent: "space-between" }}
      data-testid="userCardActions"
    >
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
          <IconButton href={blog} target="_blank" aria-label="blog">
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

export default UserCardActions;
