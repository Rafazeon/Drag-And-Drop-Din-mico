import React from 'react';
import CardBlock from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Childrens = childs => {
  if(childs) {
    return childs.map((Component, index) => {
      return <Component key={index} />
    })
  }
}

function Card(props) {
  const { classes, childrens } = props
  
  return (
    <CardBlock className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            B
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bem Vindo"
        subheader="Chatbot InOne"
      />

      {Childrens(childrens)}
      
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