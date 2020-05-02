import React from "react";
import { FormattedMessage } from "react-intl";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: theme.spacing(4),
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
    backgroundPosition: "center",
    backgroundColor: "#bdbdbd"
  },
  title: {
    marginTop: theme.spacing(2)
  }
}));

const ContactContainer = props => {
  const classes = useStyles();

  return (
    <div className={classes.root} id="contact-section">
      <Typography
        variant="h5"
        align="center"
        className={classes.title}
        gutterBottom
      >
        <FormattedMessage id="get-in-touch" />
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        <FormattedMessage id="contact-us" />
      </Typography>
      <Typography variant="h4" align="center" gutterBottom>
        <FormattedMessage id="contact-by-email" />
      </Typography>
    </div>
  );
};

export default ContactContainer;
