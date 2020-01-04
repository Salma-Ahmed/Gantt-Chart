import React, { useContext, useState, useEffect } from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { observer } from "mobx-react";
import { TopicStoreContext } from "../stores/TopicsStore";
import Form from "./Form";
import CampaignDetails from "./CampaignDetails";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const Modal: React.FC = observer(
  (): JSX.Element => {
    const topicStore = useContext(TopicStoreContext);
    const [open, setOpen] = useState(topicStore.isModalOpen);
    const [isForm, setIsForm] = useState(topicStore.isForm);
    const [currentCampaignTitle, setTitle] = useState("");
    const [currentCampaignColor, setColor] = useState("");

    const handleClose = () => {
      topicStore.isModalOpen = false;
    };

    useEffect(() => {
      setOpen(topicStore.isModalOpen);
      setIsForm(topicStore.isForm);
      setTitle(topicStore.currentOpenedCampaign?.title);
      setColor(topicStore.currentOpenedCampaign?.color);
    });

    return (
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            {isForm ? (
              "New Campaign"
            ) : (
              <span style={{ color: currentCampaignColor }}>
                {currentCampaignTitle}
              </span>
            )}
          </DialogTitle>
          <DialogContent dividers>
            {isForm && <Form />}
            {!isForm && <CampaignDetails />}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
);
export default Modal;
