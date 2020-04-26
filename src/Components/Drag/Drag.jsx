import React, { useContext } from 'react'
import { useDrag, useDrop } from 'react-dnd'

// Drag Context
import DragContext from '../../Contexts/DragContext';

const itemTypes = {
  BOX: 'box'
}

export function DraggableBox ({ Icon, Children, dropped, setDropped }) {
  const [drag, setDrag] = useContext(DragContext) 
  const [collectedProps, dragSourceRef] = useDrag({
    item: { type: itemTypes.BOX },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
      
      if (item && dropResult) {
        setDropped(true)
        setDrag({Children, dropped: true})
      }
    }
  })


  return (
    <div
      className="box"
      ref={dragSourceRef}
    >
      {dropped ? "Me Dropa" : <Icon />}  
    </div>
  )
}

export function DropBox ({ dropped, Component, Children }) {
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: itemTypes.BOX,
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver()
    })
  })

  const isActive = canDrop && isOver
  const activateChildren = dropped && Children
  return (
    <div
      className="box"
      ref={dropRef}
    >
      {isActive ? <Component /> : <Component activateChildren={activateChildren} />}
    </div>
  )
}