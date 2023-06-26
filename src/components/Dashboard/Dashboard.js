import * as React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Group from "@mui/icons-material/Group";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Home from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SellIcon from "@mui/icons-material/Sell";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import Dashboard from "./Home";
import Recipient_List from "./Recipient_List";
import Manage_Pages from "./Manage_Pages";

import Donorlist from "./DonorList";
import Create_Recipient from "./Create_Recipient";
import Create_Donor from "./Create_Donor";
import Contact_Query from "./Contact_Query";

const drawerWidth = 240;



const ResponsiveDrawer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding onClick={() => navigate("/admin/dashboard/")}>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          onClick={() => navigate("/admin/dashboard/Create_Donor")}
        >
          <ListItemButton>
            <ListItemIcon>
            <SellIcon />
            </ListItemIcon>
            <ListItemText>Create Donor</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => navigate("DonorList")}>
          <ListItemButton>
            <ListItemIcon>
            <Group />
            </ListItemIcon>
            <ListItemText>Donor List </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => navigate("/admin/dashboard/Create_Recipient")}
        >
          <ListItemButton>
            <ListItemIcon>
            <SellIcon />
            </ListItemIcon>
            <ListItemText>Add Recipient</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => navigate("/admin/dashboard/Recipient_List")}
        >
          <ListItemButton>
            <ListItemIcon>
            <Group />
            </ListItemIcon>
            <ListItemText>Recipient List</ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem
          disablePadding
          onClick={() => navigate("/admin/dashboard/Manage_Pages ")}
        >
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText>Manage Pages </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          onClick={() => navigate("/admin/dashboard/Contact_Query ")}
        >
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText> Check Contact Query</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => navigate("/")}>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Go To Home Page</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ backgroundColor: "#de1f26" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            Blood Bank Management System Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          <Route path="Create_Donor" element={<Create_Donor />}></Route>
          <Route path="Create_Recipient" element={<Create_Recipient />}></Route>
          <Route path="recipient_list" element={<Recipient_List />}></Route>
          <Route path="DonorList" element={<Donorlist />}></Route>
          <Route path="Manage_Pages" element={<Manage_Pages />}></Route>
          <Route path="Contact_Query" element={<Contact_Query />}></Route>
        </Routes>
      </Box>
    </Box>
  );
};
export default ResponsiveDrawer;
