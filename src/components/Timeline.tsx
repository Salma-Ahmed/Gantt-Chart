import React, { useContext } from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import { TopicStoreContext } from "../stores/TopicsStore";
import Moment from "react-moment";
import uuid from "uuid";

const useStyles = makeStyles({
  timeline: {
    display: "flex",
    height: "30px"
  },
  day: {
    width: "60px",
    height: "100%",
    borderRight: "1px solid lightgray",
    borderBottom: "1px solid lightgray",
    fontSize: "12px",
    textAlign: "center",
    color: "gray",
    lineHeight: "30px"
  }
});

const Timeline: React.FC = observer(
  (): JSX.Element => {
    const classes = useStyles();
    const topicStore = useContext(TopicStoreContext);

    /**Intialize dates arrays */
    const startDates: Array<string> = [];
    const endDates: Array<string> = [];

    topicStore.currentTopic.campaigns.forEach(campaign => {
      startDates.push(campaign.startDate);
      endDates.push(campaign.endDate);
    });

    /**Intialize earliestDate and latestdate */
    let earliestDate: string = startDates[0];
    let latestDate: string = endDates[0];

    const moment = require("moment");

    /**get earliest date and latest date */
    for (let i = 0; i < startDates.length; i++) {
      if (moment(startDates[i]).isBefore(moment(earliestDate))) {
        earliestDate = startDates[i];
      }
    }

    for (let i = 0; i < endDates.length; i++) {
      if (moment(endDates[i]).isAfter(moment(latestDate))) {
        latestDate = endDates[i];
      }
    }

    /**count number of days based on earliest and latest dates */
    const days = moment(latestDate).diff(moment(earliestDate), "days");
    const daysItems = [];

    for (let i = 0; i <= days; i++) {
      const date = moment(earliestDate)
        .add(i, "day")
        .toDate();
      daysItems.push(
        <div key={uuid()} className={classes.day}>
          <Moment format="MMM DD">{date}</Moment>
        </div>
      );
    }

    topicStore.chartStartDate = earliestDate;
    topicStore.chartEnDate = latestDate;

    return <div className={classes.timeline}>{daysItems}</div>;
  }
);

export default Timeline;
