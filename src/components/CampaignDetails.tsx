import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ICampaign from "../interfaces/campaign.interface";
import Moment from "react-moment";

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

const CampaignDetails: React.FC<{ campaign: ICampaign }> = ({
  campaign
}): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.campaign} style={{ color: campaign.color }}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          {campaign.title}
        </Grid>
        <Grid item xs={4}>
          <Moment format="ll">{campaign.startDate}</Moment>
        </Grid>
        <Grid item xs={4}>
          <Moment duration={campaign.startDate} date={campaign.endDate} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CampaignDetails;
