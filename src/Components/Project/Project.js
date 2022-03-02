import React from "react";
import {
  Button,
  Typography,
  AppBar,
  Avatar,
  Toolbar,
  Box,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  box: {
    display: "flex",
    alignItems: "center",
    padding: "10px 15px",
    transition: "all 350ms",
    margin: "0 5px",

    "&:hover": {
      cursor: "pointer",
    },
    textColor: {
      color: "#fff",
      fontWeight: "bold",
    },
    navCTR: {
      display: "flex",
    },
    tool: {
      display: "flex",
    },
    space: {
      flex: 1,
    },
    navLink: {
      textDecoration: "none",
      transition: "all 350ms",
      borderRadius: "3px",

      "&.active": {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
      },
    },
  },
});

const Project = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <div>
            <NavLink to="/body" className={classes.navLink}>
              <Box className={classes.box}>
                <HomeIcon className={classes.textColor} />
                <Typography variant="body1" className={classes.textColor}>
                  Home
                </Typography>
              </Box>
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
      <div>This is the project</div>
    </div>
  );
};

export default Project;
