import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  titles: {
    height: "30px",
    padding: "5px 10px",
    fontSize: "14px"
  }
});

const ChartTitles: React.FC = (): JSX.Element => {
  const classes = useStyles();
  return (
    <div className={classes.titles}>
      <Grid container spacing={0}>
        <Grid item xs={4}>
          Campaign
        </Grid>
        <Grid item xs={3}>
          Start date
        </Grid>
        <Grid item xs={3}>
          End date
        </Grid>
        <Grid item xs={2}>
          Duration
        </Grid>
      </Grid>
    </div>
  );
};

export default ChartTitles;
