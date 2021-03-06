import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import Topics from "./Topics";
import logo from "../logo.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    topic: {
      marginRight: theme.spacing(2)
    },
    logo: {
      width: "50px",
      marginRight: "10px"
    }
  })
);

const Bar: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src={logo} alt="logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            Gantt Chart
          </Typography>
          <Typography className={classes.topic} color="inherit">
            Select Topic
          </Typography>
          <Topics />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Bar;
