import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  IconButton,
  Skeleton,
  Typography,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { useState } from "react";

type UserDetailsProps = {
  details: Details | undefined;
  isLoading: boolean;
  error: Error | null;
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export const UserDetails = ({
  details,
  isLoading,
  error,
}: UserDetailsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <>
      <CardContent sx={{ height: "100%" }}>
        {isLoading && (
          <Skeleton
            animation="wave"
            height={200}
            width="80%"
            variant="rectangular"
          />
        )}
        {error && <div>Error: {error.message}</div>}
        {details && (
          <>
            <Tabs
              value={activeTab}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="About" />
              <Tab label="Bio" />
              <Tab label="Stats" />
            </Tabs>
            <TabPanel value={activeTab} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
              <Typography
                align="left"
                variant="body2"
                sx={{ color: "text.secondary" }}
              >
                {details.bio}
              </Typography>
            </TabPanel>
            <TabPanel value={activeTab} index={2}>
              Item Three
            </TabPanel>
          </>
        )}
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
            variant="contained"
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
