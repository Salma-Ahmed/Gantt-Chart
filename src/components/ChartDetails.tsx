import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ICampaign from "../interfaces/campaign.interface";
import Moment from "react-moment";
import { observer } from "mobx-react";
import { TopicStoreContext } from "../stores/TopicsStore";

const useStyles = makeStyles({
  campaign: {
    padding: "5px 10px",
    fontSize: "14px",
    height: "40px",
    fontFamily: "inherit",
    fontWeight: "bold",
    cursor: "pointer",

    "&:nth-child(even)": {
      backgroundColor: "#f0f0f0",
      borderTop: "1px solid #f0f0f0"
    }
  }
});

const ChartDetails: React.FC<{ campaign: ICampaign }> = observer(
  ({ campaign }): JSX.Element => {
    const classes = useStyles();
    const topicStore = useContext(TopicStoreContext);
    const moment = require("moment");
    const noOfDays = moment(campaign.endDate).diff(
      moment(campaign.startDate),
      "days"
    );

    const handleClick = () => {
      topicStore.currentOpenedCampaign = campaign;
      topicStore.isForm = false;
      topicStore.isModalOpen = true;
    };

    return (
      <div
        className={classes.campaign}
        onClick={handleClick}
        style={{ color: campaign.color }}
      >
        <Grid container spacing={0}>
          <Grid item xs={4}>
            {campaign.title}
          </Grid>
          <Grid item xs={3}>
            <Moment format="MMM DD">{campaign.startDate}</Moment>
          </Grid>
          <Grid item xs={3}>
            <Moment format="MMM DD">{campaign.endDate}</Moment>
          </Grid>
          <Grid item xs={2}>
            <div>{`${noOfDays + 1} days`}</div>
          </Grid>
        </Grid>
      </div>
    );
  }
);

export default ChartDetails;
