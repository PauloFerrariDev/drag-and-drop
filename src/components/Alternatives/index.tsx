import React from "react";
import { AlternativesProps } from "./models";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";

const questionItems = "abcdefghijklmnopqrstuvwxyz";

export default function Alternatives(props: AlternativesProps) {
  const { alternatives } = props;

  const getDraggableStyle = (
    draggableStyle: any,
    isDragging: boolean
  ): React.CSSProperties => ({
    userSelect: "none",
    padding: 10,
    margin: "0 0 12px 0",
    backgroundColor: isDragging ? "lightgreen" : "#fff",
    ...draggableStyle,
  });

  return (
    <>
      {alternatives.map((alternative, index) => (
        <Draggable
          key={alternative.id}
          draggableId={alternative.id}
          index={index}
        >
          {(
            draggableProvided: DraggableProvided,
            draggableSnapshot: DraggableStateSnapshot
          ) => (
            <div
              {...draggableProvided.draggableProps}
              {...draggableProvided.dragHandleProps}
              ref={draggableProvided.innerRef}
              style={getDraggableStyle(
                draggableProvided.draggableProps.style,
                draggableSnapshot.isDragging
              )}
            >
              {`${questionItems.charAt(index)}) ${alternative.content}`}
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
}
