import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TopicStoreContext } from "../stores/TopicsStore";
import { observer } from "mobx-react";
import uuid from "uuid";
import ChartDetails from "./ChartDetails";
import ChartGraph from "./ChartGraph";
import Grid from "@material-ui/core/Grid";
import ChartTitles from "./ChartTiltes";
import Timeline from "./Timeline";
import Modal from "./Modal";
import Button from "@material-ui/core/Button";

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
  },
  addButton: {
    border: "2px solid #3f51b5",
    borderRadius: "5px",
    minWidth: "40px",
    height: "40px",
    margin: "10px 10px",
    textTransform: "capitalize"
  }
});

const Chart: React.FC = observer(
  (): JSX.Element => {
    const classes = useStyles();
    const topicStore = useContext(TopicStoreContext);
    const [topic, setTopic] = useState(topicStore.currentTopic);

    const openModal = () => {
      topicStore.isForm = true;
      topicStore.isModalOpen = true;
    };

    useEffect(() => {
      setTopic(topicStore.currentTopic);
    }, [topicStore.currentTopic]);

    return (
      <div className={classes.chart}>
        <Grid container spacing={0}>
          <Grid container direction="column" item xs={3}>
            <div className={classes.details}>
              <ChartTitles />
              {topic.campaigns.map(campaign => (
                <ChartDetails key={uuid()} campaign={campaign} />
              ))}
              <Button
                variant="outlined"
                color="primary"
                onClick={openModal}
                className={classes.addButton}
              >
                Add Campaign
              </Button>
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
                <ChartGraph key={uuid()} campaign={campaign} />
              ))}
            </div>
          </Grid>
        </Grid>

        <Modal />
      </div>
    );
  }
);

export default Chart;
