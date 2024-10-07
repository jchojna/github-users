import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import {
  Button,
  CardActions,
  CardContent,
  IconButton,
  Skeleton,
} from "@mui/material";

import UserCardTabs from "./UserCardTabs";

type UserDetailsProps = {
  details: Details | undefined;
  isLoading: boolean;
  error: Error | null;
};

export const UserDetails = ({
  details,
  isLoading,
  error,
}: UserDetailsProps) => {
  return (
    <>
      <CardContent sx={{ height: "100%", padding: 0 }}>
        {isLoading && (
          <Skeleton
            animation="wave"
            height={200}
            width="80%"
            variant="rectangular"
          />
        )}
        {error && <div>Error: {error.message}</div>}
        {details && <UserCardTabs {...details} />}
      </CardContent>
      {details && (
        <CardActions sx={{ justifyContent: "space-between" }}>
          <div>
            {details.twitter_username && (
              <IconButton
                href={`https://x.com/${details.twitter_username}`}
                target="_blank"
                aria-label="twitter"
              >
                <XIcon />
              </IconButton>
            )}
            {details.blog && (
              <IconButton
                href={`https://${details.blog}`}
                target="_blank"
                aria-label="blog"
              >
                <AutoStoriesIcon />
              </IconButton>
            )}
          </div>
          <Button
            href={details.html_url}
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            View Profile
          </Button>
        </CardActions>
      )}
    </>
  );
};

export default UserDetails;
