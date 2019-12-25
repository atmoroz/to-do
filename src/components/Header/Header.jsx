import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import cyan from "@material-ui/core/colors/cyan";

import "./header.css";

const Cyan = cyan[500];

const useStyles = makeStyles(theme => ({
  HeaderRoot: {
    flexGrow: 1
  },
  colorCayan: {
    backgroundColor: Cyan
  },
  headerTitle: {
    padding: "15px 20px 15px 40px"
  }
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <div className="to-do--Header">
      <div className={classes.HeaderRoot}>
        <AppBar position="static" className={classes.colorCayan}>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.headerTitle}
          >
            TODO
          </Typography>
        </AppBar>
      </div>
    </div>
  );
};
