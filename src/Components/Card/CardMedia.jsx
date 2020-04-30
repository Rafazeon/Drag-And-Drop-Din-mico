import React from "react";
import CardImage from "@material-ui/core/CardMedia";
// Estilo Component
import { withStyles } from "@material-ui/styles";

const styles = {
  media: {
    height: 0,
    width: '100%',
    paddingTop: "56.25%", // 16:9
    backgroundSize: "cover"
  },
}

function CardMedia(props) {
  const { classes, img } = props

  return (
    <CardImage
      className={classes.media}
      image={img}
      title="Paella dish"
    />
  );
}

export default withStyles(styles)(CardMedia);
