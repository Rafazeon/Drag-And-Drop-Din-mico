import React from "react";
import CardImage from "@material-ui/core/CardMedia";
// Estilo Component
import { withStyles } from "@material-ui/styles";

const img =
  "https://natgeo.imgix.net/factsheets/thumbnails/01-balance-of-nature.adapt.jpg?auto=compress,format&w=1600&h=900&fit=crop";

const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
}

function CardMedia(props) {
  const { classes } = props
  return (
    <CardImage
      className={classes.media}
      image={img}
      title="Paella dish"
    />
  );
}

export default withStyles(styles)(CardMedia);
