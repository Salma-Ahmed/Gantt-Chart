import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ICampaign from "../interfaces/campaign.interface";
import Moment from "react-moment";
import { observer } from "mobx-react";

const useStyles = makeStyles({
  campaign: {
    padding: "5px 10px",
    fontSize: "14px",
    height: "40px",
    fontFamily: "inherit",
    fontWeight: "bold",

    "&:nth-child(even)": {
      backgroundColor: "#f0f0f0",
      borderTop: "1px solid #f0f0f0"
    }
  }
});

const CampaignDetails: React.FC<{ campaign: ICampaign }> = observer(
  ({ campaign }): JSX.Element => {
    const classes = useStyles();
    return (
      <div className={classes.campaign} style={{ color: campaign.color }}>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            {campaign.title}
          </Grid>
          <Grid item xs={3}>
            <Moment format="MMM DD">{campaign.startDate}</Moment>
          </Grid>
          <Grid item xs={3}>
            <Moment format="MMM DD">{campaign.endDate}</Moment>
          </Grid>
          <Grid item xs={3}>
            <Moment
              duration={campaign.startDate}
              date={campaign.endDate}
              unit="days"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
);

export default CampaignDetails;
