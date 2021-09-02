import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FastfoodTwoToneIcon from "@material-ui/icons/FastfoodTwoTone";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { green } from "@material-ui/core/colors";
import Hidden from "@material-ui/core/Hidden";
import PropTypes from "prop-types";
import withWidth from "@material-ui/core/withWidth";
import { Container } from "@material-ui/core";
import { links } from "./data";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },

  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  title: {
    flexGrow: 1,
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <FastfoodTwoToneIcon className={classes.green} />
          <Typography variant="h6" className={classes.title}>
            Resto.
          </Typography>
          <Hidden only={["sm", "xs"]}>
            <div className={classes.root}>
              {links.map((link) => {
                const { id, url, text } = link;
                return (
                  <Button key={id} href={url} variant="contained">
                    {text}
                  </Button>
                );
              })}
            </div>
          </Hidden>
          <Hidden only={["md", "lg"]}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <IconButton
            // edge="end"
            className={classes.menuButton}
            color="inherit"
            // aria-label="menu"
          >
            <SearchIcon />
          </IconButton>
          <IconButton
            // edge="end"
            // className={classes.menuButton}
            color="inherit"
            // aria-label="menu"
          >
            <FavoriteIcon />
          </IconButton>
          <IconButton
            // edge="end"
            // className={classes.menuButton}
            color="inherit"
            // aria-label="menu"
          >
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
Navbar.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(Navbar);
