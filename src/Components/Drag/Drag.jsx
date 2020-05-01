import React, { useCallback, useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";
import update from "immutability-helper";
// Estilo Component
import { makeStyles } from "@material-ui/core/styles";

// Drag Context
import DragContext from "../../Contexts/DragContext";

const itemTypes = {
  BOX: "box",
};

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    cursor: 'pointer'
  },

  root: {
    maxWidth: 220,
    marginRight: 20
  },
  
  avatar: {
    backgroundColor: '#f44336'
  }
}));

export function DraggableBox({ id, Icon, Children }) {
  const classes = useStyles()
  const ref = useRef(null);
  const [{ isDragging }, drag] = useDrag({
    item: { type: itemTypes.BOX, Children, child: !Icon, id },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  drag(ref);

  return (
    <div className={classes.box} ref={ref}>
       {Icon ? <Icon /> : Children}
    </div>
  )
}

export function DropBox() {
  const classes = useStyles()
  const [drag, setDrag] = useContext(DragContext);
  
  const dragCards = drag.cards

  const changeTaskId = useCallback(
      // Esse id pertence a task quando arrasta um children
      (id, children, child) => {
        let task = dragCards.find(task => task.id === id);
        const taskIndex = dragCards.indexOf(task);
        let tasks = task.content.concat(children)
        task = { ...task, content: tasks };
        let newTasks = update(dragCards, {
          [taskIndex]: { $set: task }
        });

        if(!child) {
          setDrag({cards: newTasks, key: drag.key});
        }

      },
      [dragCards]
  );

  const removeTaskId = (id, children) => {
    let dragCards = drag.cards.find(item => item.id === id)
    
      if(dragCards.content.indexOf(children) !== -1) {
        dragCards.content.splice(children, 1)
      }  

    let tasks = drag.cards.map(item => {
      if(item.id === dragCards.id) {
        item = dragCards
      }
      return item
    }) 

    setDrag({cards: tasks, key: drag.key})
    
  }

  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: itemTypes.BOX,
    drop(item) {
    // Com esse código fixei a duplicação que fazia ao 
    // passar um children a outra task

      if(item.id !== drag.key) {
        item.child = false
        if(item.id) {
          removeTaskId(item.id, item.Children)
        }
      }

      changeTaskId(drag.key, item.Children, item.child)     

      if(item.child && item.id !== drag.key) {
          removeTaskId(item.id, item.Children)
      }
    }
  });

  drop(ref);

  const Components = () => {
    return dragCards.map((item, index) => {
      return (
      <div onDragLeaveCapture={() => setDrag({cards: drag.cards, key: item.id})}>
        <item.component classes={classes} id={item.id} childrens={item.content} /> 
      </div>
      ) 
    })
  }

  return <div className={classes.box} ref={ref}> {Components()}</div>;
};
