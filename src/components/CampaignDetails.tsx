import React, { useContext, useState } from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import { TopicStoreContext } from "../stores/TopicsStore";

const useStyles = makeStyles({
  details: {
    minWidth: "350px",
    maxWidth: "100%",
    "& p span:first-of-type": {
      marginRight: "5px"
    }
  }
});

const CampaignDetails: React.FC = observer(
  (): JSX.Element => {
    const topicStore = useContext(TopicStoreContext);
    const [currentCampaign] = useState(topicStore.currentOpenedCampaign);
    const classes = useStyles();

    return (
      <div className={classes.details}>
        <p>
          <span>Start date: </span>
          <span>{currentCampaign.startDate}</span>
        </p>
        <p>
          <span>End date: </span>
          <span>{currentCampaign.endDate}</span>
        </p>
        <p>
          <span>Duration: </span>
          <span>{currentCampaign.endDate}</span>
        </p>
        <p>
          <span>Description: </span>
          {currentCampaign.description}
        </p>
      </div>
    );
  }
);

export default CampaignDetails;
