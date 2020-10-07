import React from "react";
import { QuestionProps } from "./models";
import { Wording } from "./styleds";
import Alternatives from "../Alternatives";
import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";

export default function Question(props: QuestionProps) {
  const { question, alternatives, index } = props;

  const getDraggableStyle = (
    draggableStyle: any,
    isDragging: boolean
  ): React.CSSProperties => ({
    userSelect: "none",
    margin: "12px 0",
    backgroundColor: isDragging ? "lightgreen" : "#f3f3f3",
    ...draggableStyle,
  });

  const getDroppableStyle = (isDraggingOver: boolean): React.CSSProperties => ({
    backgroundColor: isDraggingOver ? "lightblue" : "transparent",
    width: "100%",
    padding: "16px 24px 12px",
    border: "1px solid lightgrey",
    boxSizing: "border-box",
  });

  return (
    <Draggable key={question.id} draggableId={question.id} index={index}>
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
          <Droppable
            droppableId={question.id}
            direction="vertical"
            type="alternative"
          >
            {(
              provided: DroppableProvided,
              snapshot: DroppableStateSnapshot
            ) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getDroppableStyle(snapshot.isDraggingOver)}
              >
                <Wording>{`${index + 1}) ${question.title}`}</Wording>
                <Alternatives alternatives={alternatives} />
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}
