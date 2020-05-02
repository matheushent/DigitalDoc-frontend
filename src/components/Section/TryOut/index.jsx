import React, { useState } from "react";
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from "react-intl";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "@material-ui/core/Button";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import MdiIcon from "@mdi/react";
import { mdiDownload } from "@mdi/js";

import AlertSnackbar from "../../Alert";

import { PDFDownloadLink } from "@react-pdf/renderer";
import PdfDocument from "../../ReportTemplate";

import CaseFetch from "../../../utilities/CaseFetch";

import DOCUMENTSample from "../../../static/samples/IMG-20181031-WA0122.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(15),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    position: "relative",
    color: theme.palette.common.white
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
    backgroundColor: "#424242"
  },
  title: {
    marginTop: theme.spacing(2)
  },
  cardSize: { maxHeight: 300, overflow: "auto", marginTop: theme.spacing(4) },
  typographyMargin: {
    margin: theme.spacing(1)
  },
  buttonCanvas: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4)
  },
  buttonMargin: {
    marginRight: theme.spacing(2)
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    display: "flex",
    flexDirection: "column"
  }
}));

const saveData = (
  blobURL,
  filename,
  setSuccess,
  setCaseResults,
  setLoading
) => {
  let a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href = blobURL;
  a.download = filename;
  a.click();
  document.body.removeChild(a);

  setLoading(false);
  setSuccess(true);
  setCaseResults([]);
};

const TryOutContainer = props => {
  const classes = useStyles();
  const [alert, setAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const [caseResults, setCaseResults] = useState([]);
  const { files, setFiles, intl } = props;

  return (
    <div className={classes.root} id="try-out-section">
      <Typography variant="h3" className={classes.title} gutterBottom>
        <FormattedHTMLMessage id="try-out" />
      </Typography>
      <Typography gutterBottom>
        <FormattedMessage id="add-your-files" />
      </Typography>
      <Typography gutterBottom>
        <FormattedMessage id="if-you-want-to-try" />
        <a href={DOCUMENTSample} download="sample.jpg">
          <MdiIcon path={mdiDownload} size={1} color="white" />
        </a>
        .
      </Typography>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className={classes.cardSize}>
            <List>
              {files.length > 0 ? (
                files.map((file, index) => (
                  <ListItem key={file.name + index}>
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={file.name} />
                    <ListItemSecondaryAction>
                      <IconButton
                        edge="end"
                        aria-label="delete"
                        onClick={() => {
                          let newFiles = files.filter((e, i) => i !== index);
                          setFiles(newFiles);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))
              ) : (
                  <Typography className={classes.typographyMargin}>
                    <FormattedMessage id="you-have-to-add-at-least-one" />
                  </Typography>
                )}
            </List>
          </Card>
          <div className={classes.buttonCanvas}>
            <Button
              className={classes.buttonMargin}
              variant="contained"
              color="secondary"
              disabled={files.length === 10}
              onClick={() => document.getElementById("add-archive").click()}
            >
              <FormattedMessage id="add-archive" />
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={files.length === 0}
              onClick={() => CaseFetch(setPageLoading, files, setCaseResults)}
            >
              <FormattedMessage id="classify" />
            </Button>
          </div>
        </Grid>
      </Grid>
      <div className={classes.background} />
      {/* INPUTS AND ALERTS */}
      {caseResults.length > 0 && (
        <PDFDownloadLink
          document={
            <PdfDocument
              cases={caseResults}
              textInfos={{
                title: intl.formatMessage({ id: "digitaldoc-report" }),
                subTitle: intl.formatMessage({
                  id: "intelligence"
                }),
                timestamp: intl.formatMessage({ id: "timestamp" }),
                link: intl.formatMessage({ id: "link" }),
                filename: intl.formatMessage({ id: "filename" }),
                hash: intl.formatMessage({ id: "hash" })
              }}
            />
          }
          fileName="result.pdf"
          style={{
            display: "none"
          }}
        >
          {({ blob, url, loading, error }) => {
            if (
              caseResults.length > 0 &&
              !loading &&
              pageLoading &&
              blob.size > 1000
            ) {
              saveData(
                url,
                "result.pdf",
                setSuccess,
                setCaseResults,
                setPageLoading
              );
            }
          }}
        </PDFDownloadLink>
      )}
      <input
        style={{ display: "none" }}
        disabled={files.length === 10}
        id="add-archive"
        type="file"
        accept="image/jpeg"
        multiple
        onChange={e => {
          const fileList = e.target.files;
          let file = null;
          var selectedFiles = files;
          for (let i = 0; i < fileList.length; i++) {
            if (fileList[i].type.match(/^image\//)) {
              file = fileList[i];
              let fileName = file.name;
              var idxDot = fileName.lastIndexOf(".") + 1;
              var extFile = fileName
                .substr(idxDot, fileName.length)
                .toLowerCase();
              if (extFile === "jpg" || extFile === "jpeg") {
                selectedFiles = [...selectedFiles, file];
              }
              if (selectedFiles.length >= 10) {
                setAlert(true);
                break;
              }
            }
          }
          setFiles([...selectedFiles]);
          document.getElementById("add-archive").value = "";
        }}
      />
      <AlertSnackbar
        severity="error"
        open={alert}
        message="alert-10-files"
        vertical="top"
        horizontal="center"
        close={() => setAlert(false)}
      />
      <AlertSnackbar
        severity="success"
        open={success}
        message="alert-success"
        vertical="bottom"
        horizontal="left"
        close={() => setSuccess(false)}
      />
      <Backdrop className={classes.backdrop} open={pageLoading}>
        <CircularProgress color="inherit" />
        <Typography variant="button" align="center">
          <FormattedMessage id="files-loading" />
        </Typography>
      </Backdrop>
    </div>
  );
};

export default injectIntl(TryOutContainer);
