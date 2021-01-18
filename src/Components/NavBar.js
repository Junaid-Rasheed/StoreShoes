import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    wordSpacing: '2px'
  },
  title: {
    flexGrow: 1,
    textAlign: "center",
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{textAlign:"center" ,  backgroundColor:"#fafbfc"}}>
          <Link to="/">
            <Typography variant="h6" className={classes.title}>
              Home
            </Typography>
          </Link>
          <Link to="/Product">
            <Typography variant="h6" className={classes.title}>
              Product
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};
