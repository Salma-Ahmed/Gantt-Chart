import React, { useContext, useEffect } from "react";
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
    const earliestDate = topicStore.chartStartDate;
    const latestDate = topicStore.chartEnDate;

    const moment = require("moment");

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

    return <div className={classes.timeline}>{daysItems}</div>;
  }
);

export default Timeline;
