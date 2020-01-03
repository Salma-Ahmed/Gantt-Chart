import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TopicStoreContext } from "../stores/TopicsStore";
import { observer } from "mobx-react";
import uuid from "uuid";
import CampaignDetails from "./CampaignDetails";
import CampaignVisulas from "./CampaignVisuals";
import Grid from "@material-ui/core/Grid";
import ChartTitles from "./ChartTiltes";
import Timeline from "./Timeline";

const useStyles = makeStyles({
  chart: {
    border: "1px solid #dedede",
    margin: "10px"
  },
  scrollable: {
    overflowX: "scroll"
  },
  details: {
    borderRight: "1px solid lightgray",
    height: "100%"
  }
});

const Chart: React.FC = observer(
  (): JSX.Element => {
    const classes = useStyles();
    const topicStore = useContext(TopicStoreContext);
    const [topic, setTopic] = useState(topicStore.currentTopic);

    useEffect(() => {
      setTopic(topicStore.currentTopic);
    });

    return (
      <div className={classes.chart}>
        <Grid container spacing={0}>
          <Grid container direction="column" item xs={3}>
            <div className={classes.details}>
              <ChartTitles />
              {topic.campaigns.map(campaign => (
                <CampaignDetails key={uuid()} campaign={campaign} />
              ))}
            </div>
          </Grid>
          <Grid
            className={classes.scrollable}
            container
            direction="column"
            item
            xs={9}
          >
            <div>
              <Timeline />
              {topic.campaigns.map(campaign => (
                <CampaignVisulas key={uuid()} campaign={campaign} />
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
);

export default Chart;
