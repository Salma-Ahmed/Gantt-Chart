import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ICampaign from "../interfaces/campaign.interface";

const useStyles = makeStyles({
  visuals: {
    fontSize: "12px",
    height: "40px",
    padding: "5px 0",
    "&:nth-child(even)": {
      backgroundColor: "#f0f0f0",
      "border-top": "1px solid #f0f0f0"
    }
  },
  draggable: {
    height: "30px",
    borderRadius: "3px"
  }
});

const CampaignVisuals: React.FC<{ campaign: ICampaign }> = ({
  campaign
}): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.visuals}>
      <div
        className={classes.draggable}
        style={{ backgroundColor: campaign.color, width: "100px" }}
      ></div>
    </div>
  );
};

export default CampaignVisuals;
