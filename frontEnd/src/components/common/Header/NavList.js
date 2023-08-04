import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import RouteOutlinedIcon from "@mui/icons-material/RouteOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";

const NavList = (open) => {
  const navList = [
    { id: 1, name: "Dashboard", icon: <DashboardOutlinedIcon /> },
    { id: 2, name: "Route", icon: <RouteOutlinedIcon /> },
    { id: 4, name: "Forum", icon: <ForumOutlinedIcon /> },
    { id: 5, name: "Trash", icon: <DeleteOutlinedIcon /> },
  ];
  return (
    <List>
      {navList.map((list) => (
        <ListItem key={list.id} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default NavList;
