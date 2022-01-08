import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  header: {
    background: "#004887",
  },
  fontlg: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "rgb(49 236 255)",
  },
  navlink: {
    marginLeft: "2rem",
    color: "white",
    textDecoration: "none",
  },
});

const Navbar = () => {
  const classes = useStyle();
  return (
    <div>
      <AppBar className={classes.header} position="static">
        <Toolbar>
          <Typography component="h1" className={classes.fontlg}>
            ✒️EdureifyStudents
          </Typography>
          <Link to="/" component="h2" className={classes.navlink}>
            All Students
          </Link>
          <Link to="/add" component="h2" className={classes.navlink}>
            Add Student
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
