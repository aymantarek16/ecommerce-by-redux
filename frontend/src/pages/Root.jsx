import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Appbar from "../MUI-components/Appbar";
import Drawerr from "../MUI-components/Drawerr";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const drawerWidth = 240;
const Root = () => {
  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );
  const darkTheme = createTheme({
    palette: {
      // @ts-ignore
      mode,
      ...(mode === "light"
        ? {
            // palette values for light mode
            ayman: {
              main: "grey",
              white: "white",
            },
          }
        : {
            // palette values for dark mode
            ayman: {
              main: "teal",
            },
          }),
    },
  });
  const [noneORblock, setnoneORblock] = useState("none");
  const [drawerType, setdrawerType] = useState("permanent");

  const showDrawer = () => {
    setdrawerType("temporary");
    setnoneORblock("block");
  };

  const hideDrawer = () => {
    setdrawerType("permanent");
    setnoneORblock("none");
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <div>
        <Appbar {...{ drawerWidth, showDrawer }} />
        <Drawerr
          {...{ drawerWidth, setmyMOde, noneORblock, drawerType, hideDrawer }}
        />

        <Box
          //  className="border"
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            display: " flex",
            justifyContent: "center",
            mt: "66px",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
