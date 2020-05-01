import React from "react";

import { connect } from "react-redux";
import { updateLanguage } from "../../reducers/app/actions";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import LanguageFlag from "../../static/language.png";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: "rgba(0,0,0,0)",
    boxShadow: "none"
  },
  titleAndButton: {
    display: "flex",
    "&:hover": {
      cursor: "pointer"
    }
  },
  onlyDesktop: {
    display: "flex",
    marginLeft: theme.spacing(0.75)
  },
  primaryColor: { color: theme.palette.primary.main },
  toolBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  menu: {
    display: "flex",
    flexGrow: 2,
    justifyContent: "flex-end"
  },
  menuItem: {
    margin: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
      color: theme.palette.primary.main
    }
  },
  languageFlag: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1),
    "& img": {
      width: theme.spacing(3),
      "&:hover": {
        cursor: "pointer"
      }
    }
  }
}));

const AppBarComponent = props => {
  const classes = useStyles();
  const { language, changeLanguage } = props;

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.menu}>
          <div className={classes.languageFlag}>
            <img
              alt="Change language"
              onClick={() => {
                const newLanguage = language === "en" ? "pt" : "en";
                changeLanguage(newLanguage);
                localStorage.setItem("language", newLanguage);
              }}
              src={LanguageFlag}
            />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  language: state.app.language
});

const mapDispatchToProps = dispatch => ({
  changeLanguage: newLanguage => dispatch(updateLanguage(newLanguage))
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBarComponent);
