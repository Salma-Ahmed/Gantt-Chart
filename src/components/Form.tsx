import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  form: {}
});

const Form: React.FC = (): JSX.Element => {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField id="campaign-name" label="Standard" />
    </form>
  );
};

export default Form;
