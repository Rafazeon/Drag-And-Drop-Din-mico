import React from "react";
// Estilo Component
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
// Card Component
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: red[500],
  }
}));

function CardContainer(props) {
  const classes = useStyles()
  return <Card {...props} classes={classes} />;
}

export default CardContainer;
