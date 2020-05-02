import React from "react";
import { FormattedMessage, FormattedHTMLMessage } from "react-intl";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import MdiIcon from "@mdi/react";
import { mdiCamera, mdiCloudUpload } from "@mdi/js";

import ScrollIt from "../../../utilities/ScrollIt";
import BackgroundImage from "../../../static/Background/white-red-and-blue-flower-petals-3993212.jpg";

const scrollTo = divID => {
  ScrollIt(document.querySelector(`#${divID}`).offsetTop, 500, "easeOutQuad");
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    position: "relative",
    minHeight: "100vh"
  },
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -2,
    backgroundImage: `url(${BackgroundImage})`,
    backgroundPosition: "center"
  },
  marginBottom: {
    marginBottom: theme.spacing(10)
  },
  gridContainer: {
    width: "100%"
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    borderRadius: 10,
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.5)"
    }
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "&children": {
      marginLeft: theme.spacing(1)
    }
  }
}));

const HeroContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        <MdiIcon
          color="white"
          size={3}
          path="M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L6.04,7.5L12,10.85L17.96,7.5L12,4.15Z"
        />
        <Typography variant="h3">
          <b>
            <FormattedHTMLMessage id="digitaldoc" />
          </b>
        </Typography>
      </div>
      <Typography variant="h4" className={classes.marginBottom}>
        <FormattedMessage id="intelligence" />
      </Typography>
      <Grid
        container
        justify="center"
        spacing={4}
        className={classes.gridContainer}
      >
        <Grid
          item
          xs={12}
          md={2}
          onClick={() => scrollTo("how-it-works-section")}
        >
          <div className={classes.gridItem}>
            <MdiIcon path={mdiCamera} size={4} color="white" />
            <Typography variant="button">
              <FormattedMessage id="how-it-works?" />
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={2} onClick={() => scrollTo("try-out-section")}>
          <div className={classes.gridItem}>
            <MdiIcon path={mdiCloudUpload} size={4} color="white" />
            <Typography variant="button">
              <FormattedMessage id="try-out" />
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.backdrop} />
      <div className={classes.background} />
    </div>
  );
};

export default HeroContainer;
