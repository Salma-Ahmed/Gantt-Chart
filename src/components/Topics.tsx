import React, { useContext, useState } from "react";
import { observer } from "mobx-react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { TopicStoreContext } from "../stores/TopicsStore";
import uuid from "uuid";

const useStyles = makeStyles({
  select: {
    color: "#fff",
    "&:before": {
      borderColor: "#fff"
    },
    "&:after": {
      borderColor: "#fff"
    }
  },
  icon: {
    fill: "#fff"
  }
});

const Topics: React.FC = observer(
  (): JSX.Element => {
    const topicStore = useContext(TopicStoreContext);
    const [topic, setTopic] = useState(topicStore.currentTopic);
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      topicStore.setCurrentTopic(event.target.value);
      setTopic(topicStore.currentTopic);
    };

    return (
      <FormControl variant="outlined">
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={topic.id}
          onChange={handleChange}
          className={classes.select}
          inputProps={{
            classes: {
              icon: classes.icon
            }
          }}
        >
          {topicStore.topics.map(topic => (
            <MenuItem key={uuid()} value={topic.id}>
              {topic.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);

export default Topics;
