import React, { useContext } from "react";
import { useDrag, useDrop } from "react-dnd";

// Drag Context
import DragContext from "../../Contexts/DragContext";

const itemTypes = {
  BOX: "box",
};
const arr = [];
export function DraggableBox({ Icon, Children, dropped, setDropped }) {
  const [drag, setDrag] = useContext(DragContext);
  const [collectedProps, dragSourceRef] = useDrag({
    item: { type: itemTypes.BOX },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        setDropped(true);
        // Lógica para concatenar múltiplos componentes
        let pos = arr
          .map(item => {
            return item.displayName;
          })
          .indexOf(Children.displayName);
        
        // Verifica se já existe o componente dentro do array
        if(pos === -1) {
          arr.push(Children)
        }
      }

      setDrag({arr, dropped: true})
    },
  });

  return (
    <div className="box" ref={dragSourceRef}>
      {dropped ? "Me Dropa" : <Icon />}
    </div>
  );
}

export function DropBox({ dropped, Component, Children }) {
  const [{ canDrop, isOver }, dropRef] = useDrop({
    accept: itemTypes.BOX,
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  });

  const isActive = canDrop && isOver;
  let childrens = dropped && Children;

  return (
    <div className="box" ref={dropRef}>
      {isActive ? <Component childrens={childrens} /> : <Component childrens={childrens} />}
    </div>
  );
}
