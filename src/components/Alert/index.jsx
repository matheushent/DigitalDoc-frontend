import React from "react";
import { FormattedMessage } from "react-intl";
import Snackbar from "@material-ui/core/Snackbar";

import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AlertSnackbar = props => {
  const { open, close, severity, message } = props;
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={6000}
      severity={severity}
      open={open}
      onClose={close}
    >
      <Alert onClose={close} severity={severity}>
        <FormattedMessage id={message} />
      </Alert>
    </Snackbar>
  );
};

export default AlertSnackbar;
