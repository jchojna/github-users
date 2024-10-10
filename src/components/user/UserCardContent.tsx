import { CardContent, Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import { useState } from "react";
import { getFormattedDate } from "../../utils/dates";
import TabPanel from "../TabPanel";
import UserDetail from "./UserDetail";

const UserCardContent = ({
  name,
  company,
  location,
  email,
  bio,
  public_repos,
  followers,
  following,
  created_at,
}: UserCardContentProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <CardContent
      sx={{ height: "100%", padding: 0 }}
      data-testid="userCardContent"
    >
      <Tabs
        value={activeTab}
        onChange={handleChange}
        indicatorColor="primary"
        variant="fullWidth"
        aria-label="User card tabs"
      >
        <Tab label="About" />
        {bio && <Tab label="Bio" />}
        <Tab label="Stats" />
      </Tabs>

      {/* About tab panel */}
      <TabPanel value={activeTab} index={0}>
        <Stack
          useFlexGap
          spacing="8px"
          sx={{ flexWrap: "wrap", alignItems: "flex-start" }}
        >
          <UserDetail detail={name} label="Name" />
          <UserDetail detail={company} label="Company" />
          <UserDetail detail={location} label="Location" />
          <UserDetail detail={email} label="Email" />
          <UserDetail detail={getFormattedDate(created_at)} label="Joined:" />
        </Stack>
      </TabPanel>

      {/* Bio tab panel */}
      {bio && (
        <TabPanel value={activeTab} index={1}>
          <Typography
            align="left"
            variant="body2"
            sx={{ color: "text.secondary" }}
          >
            {bio}
          </Typography>
        </TabPanel>
      )}

      {/* Stats tab panel */}
      <TabPanel value={activeTab} index={bio ? 2 : 1}>
        <Stack
          direction="row"
          useFlexGap
          spacing="8px"
          sx={{ flexWrap: "wrap" }}
        >
          <Chip label={`${public_repos} public repos`} />
          <Chip label={`${followers} followers`} />
          <Chip label={`${following} following`} />
        </Stack>
      </TabPanel>
    </CardContent>
  );
};

export default UserCardContent;
