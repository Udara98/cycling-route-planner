import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import styled from "@emotion/styled";

const Header = styled(AppBar)`
  z-index: 1201;
  background-color: #e3f2fd;
  color: #283593;
  height: 55px;
  -webkit-box-shadow: inset 0 -1px 0 0 #dadce0;
`;

export default function HeaderBar({ open, handleDrawer }) {
  return (
    <Box
      sx={{ width: 1, position: "fixed", zIndex: "4880", edge: "start" }}
      open={open}
    >
      <Header position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={handleDrawer} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton size="large" color="inherit">
              <DirectionsBikeIcon />
            </IconButton>
            <Typography variant="h6" component="div">
              CylingLK
            </Typography>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Header>
    </Box>
  );
}
