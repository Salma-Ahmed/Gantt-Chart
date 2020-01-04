import React, { useContext, useState, ChangeEvent } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { observer } from "mobx-react";
import { TopicStoreContext } from "../stores/TopicsStore";
import ICampaign from "../interfaces/campaign.interface";

const useStyles = makeStyles({
  bottomSpace: {
    marginBottom: "20px"
  },
  submitBtn: {
    textTransform: "capitalize",
    float: "right"
  },
  datePicker: {
    border: 0,
    borderBottom: "1px solid",
    outline: "none"
  },
  label: {
    fontSize: "12px",
    margin: "5px 0"
  }
});

const Form: React.FC = observer(
  (): JSX.Element => {
    const moment = require("moment");
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const topicStore = useContext(TopicStoreContext);
    const [minDate] = useState(
      moment(topicStore.chartStartDate).format("YYYY-MM-DD")
    );
    const [maxDate] = useState(
      moment(topicStore.chartEnDate).format("YYYY-MM-DD")
    );
    const [startDate, setStartDate] = useState(
      moment(topicStore.chartStartDate).format("YYYY-MM-DD")
    );
    const [endDate, setEndDate] = useState(
      moment(topicStore.chartEnDate).format("YYYY-MM-DD")
    );

    const onSubmit = (data: any) => {
      const newCampaign: ICampaign = {
        id: topicStore.currentTopic.campaigns.length + 1,
        title: data.title,
        startDate: moment(data.startDate).format("MM/DD/YYYY"),
        endDate: moment(data.endDate).format("MM/DD/YYYY"),
        description: data.description,
        color: data.color
      };

      topicStore.isModalOpen = false;
      topicStore.currentTopic.campaigns.push(newCampaign);
    };

    const changeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
      setStartDate(e.target.value);
    };

    const changeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
      setEndDate(e.target.value);
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)} noValidate autoComplete="off">
        <Grid container>
          <Grid
            container
            direction="column"
            item
            xs={12}
            className={classes.bottomSpace}
          >
            <TextField
              id="standard-basic"
              name="title"
              label="Title"
              inputRef={register({ required: true })}
            />
          </Grid>
          <Grid
            container
            justify="space-between"
            item
            xs={12}
            className={classes.bottomSpace}
          >
            <Grid container direction="column" item xs={3}>
              <label className={classes.label}>Start date</label>
              <input
                type="date"
                name="startDate"
                min={minDate}
                max={maxDate}
                value={startDate}
                placeholder="Start date"
                onChange={changeStartDate}
                ref={register({ required: true })}
                className={classes.datePicker}
              />
            </Grid>
            <Grid container direction="column" item xs={3}>
              <label className={classes.label}>End date</label>
              <input
                type="date"
                name="endDate"
                min={minDate}
                max={maxDate}
                value={endDate}
                onChange={changeEndDate}
                ref={register({ required: true })}
                className={classes.datePicker}
              />
            </Grid>
            <Grid container direction="column" item xs={3}>
              <label className={classes.label}>End date</label>
              <input
                type="color"
                name="color"
                ref={register({ required: true })}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            item
            xs={12}
            className={classes.bottomSpace}
          >
            <TextField
              id="desc"
              name="description"
              label="Description"
              inputRef={register({ required: true })}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          autoFocus
          color="primary"
          className={classes.submitBtn}
        >
          Add Campaign
        </Button>
      </form>
    );
  }
);

export default Form;
