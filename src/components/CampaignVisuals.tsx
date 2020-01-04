import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ICampaign from "../interfaces/campaign.interface";
import { observer } from "mobx-react";
import { TopicStoreContext } from "../stores/TopicsStore";
import Draggable from "react-draggable";

const useStyles = makeStyles({
  visuals: {
    fontSize: "12px",
    height: "40px",
    padding: "5px 0",
    position: "relative",
    "&:nth-child(even)": {
      backgroundColor: "#f0f0f0",
      "border-top": "1px solid #f0f0f0"
    }
  },
  draggable: {
    height: "30px",
    borderRadius: "3px",
    position: "relative",
    cursor: "pointer"
  }
});

const CampaignVisuals: React.FC<{ campaign: ICampaign }> = observer(
  ({ campaign }): JSX.Element => {
    const classes = useStyles();
    const topicStore = useContext(TopicStoreContext);

    const moment = require("moment");

    const startDate = campaign.startDate;
    const endDate = campaign.endDate;
    const duration = moment(endDate).diff(moment(startDate), "days");
    const width = `${(duration + 1) * 60}px`;
    /**diff between earliest date and campaign startdate to use for left property */
    const diff = moment(startDate).diff(
      moment(topicStore.chartStartDate),
      "days"
    );
    const [left, setLeft] = useState(`${diff * 60}px`);

    const handleDrag = (e: any, position: any) => {
      console.log(position);
      let newStartdate: string;
      let newEnddate: string;
      if (position.deltaX === 60) {
        newStartdate = moment(startDate)
          .add(1, "day")
          .format("MM/DD/YYYY");
        newEnddate = moment(endDate)
          .add(1, "day")
          .format("MM/DD/YYYY");
        topicStore.changeCampaignDates(campaign.id, newStartdate, newEnddate);
      } else if (position.deltaX === -60) {
        newStartdate = moment(startDate)
          .subtract(1, "day")
          .format("MM/DD/YYYY");
        newEnddate = moment(endDate)
          .subtract(1, "day")
          .format("MM/DD/YYYY");
        topicStore.changeCampaignDates(campaign.id, newStartdate, newEnddate);
      } else {
      }
    };

    useEffect(() => {
      setLeft(`${diff * 60}px`);
    }, [campaign]);
    return (
      <div className={classes.visuals}>
        <Draggable axis="x" grid={[60, 0]} bounds="parent" onDrag={handleDrag}>
          <div
            className={classes.draggable}
            style={{
              backgroundColor: campaign.color,
              width: width,
              left: left
            }}
          ></div>
        </Draggable>
      </div>
    );
  }
);

export default CampaignVisuals;
