import React, { useContext, useState } from "react";
// Estilo Component
import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
// Card Component
import Card from "./Card";

// Drag Context
import DragContext from "../../Contexts/DragContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 220,
    marginRight: 20
  },
  avatar: {
    backgroundColor: red[500],
  }
}));

function CardContainer(props) {
  const [drag, setDrag] = useContext(DragContext);
  const classes = useStyles()

  const dragCards = drag.cards

  const addCard = () => {
    dragCards.push({component: CardContainer, content: []})
    let dragId = dragCards.map((item, index) => {
      item.id = index + 1
      return item
    })
    
    setDrag({cards: dragId, key: drag.key})
  }

  return (
  <div key={props.id}>
    <Card {...props} classes={classes} addCard={addCard} />
  </div>
  );
}

export default CardContainer;
