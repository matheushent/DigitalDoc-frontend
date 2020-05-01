import React from "react";
import { FormattedMessage } from "react-intl";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import MdiIcon from "@mdi/react";
import { mdiBrain, mdiCloudUpload, mdiFileOutline } from "@mdi/js";

import BackgroundImage from "../../../static/Background/76.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(15),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    position: "relative"
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
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.white,
    opacity: 0.4,
    zIndex: -1
  },
  gridItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  description: {
    width: "100%",
    padding: theme.spacing(1)
  },
  marginBottom: {
    marginBottom: theme.spacing(6)
  }
}));

const HowItWorsContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="how-it-works-section">
      <Typography className={classes.marginBottom} align="center" variant="h5">
        <b>
          <FormattedMessage id="we-use-ai" />
        </b>
      </Typography>
      <Grid
        container
        justify="center"
        spacing={4}
        className={classes.gridContainer}
      >
        <Grid item xs={12} md={3}>
          <div className={classes.gridItem}>
            <MdiIcon path={mdiCloudUpload} size={5} color="#424242" />
            <Typography>
              <FormattedMessage id="how-it-works-first-step" />
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.gridItem}>
            <MdiIcon path={mdiBrain} size={5} color="#424242" />
            <Typography>
              <FormattedMessage id="how-it-works-second-step" />
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={3}>
          <div className={classes.gridItem}>
            <MdiIcon path={mdiFileOutline} size={5} color="#424242" />
            <Typography>
              <FormattedMessage id="how-it-works-third-step" />
            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className={classes.backdrop} />
      <div className={classes.background} />
    </div>
  );
};

export default HowItWorsContainer;
