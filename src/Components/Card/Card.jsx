import React from 'react';
import CardBlock from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// Drag Component
import { DraggableBox } from '../Drag/Drag';

const Childrens = (id, childs) => {
  // Passo o id para remover o child do componente certo
  if(childs) {
    return childs.map((Component, index) => {
      return <DraggableBox id={id} Icon={false} Children={Component} key={index} />
    })
  }
}

function Card(props) {
  const { classes, id, childrens, addCard } = props
  return (
    <CardBlock className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
        action={
          <IconButton onClick={() => addCard()} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bem Vindo"
        subheader="Chatbot InOne"
      />

      {Childrens(id, childrens)}
      
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </CardBlock>
  );
}

export default Card