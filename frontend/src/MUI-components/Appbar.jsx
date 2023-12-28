import React from "react";
import {
  Toolbar,
  AppBar,
  Avatar,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

const Appbar = ({ drawerWidth, showDrawer }) => {
  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            showDrawer();
          }}
          sx={{ mr: "9px", display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Link
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { fontSize: "16.5px" },
          }}
          color="inherit"
          href="/"
        >
          Online Store
        </Link>

        <Typography variant="body1" color="white" mr={2}>
          Ayman Tarek
        </Typography>
        <Avatar alt="Ayman Tarek" src="./images/ayman_tarek_74.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
