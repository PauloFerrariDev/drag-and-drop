import React from "react";
import { TaskListProps } from "./models";
import {
  Draggable,
  DraggableProvided,
  DraggableStateSnapshot,
} from "react-beautiful-dnd";

export default function TaskList(props: TaskListProps) {
  const { tasks } = props;

  const getDraggableStyle = (draggableStyle: any, isDragging: boolean): {} => ({
    userSelect: "none",
    padding: 8,
    margin: "0 0 8px 0",
    background: isDragging ? "lightgreen" : "#fafafa",
    ...draggableStyle,
  });

  return (
    <>
      {tasks.map((task, index) => (
        <Draggable key={task.id} draggableId={task.id} index={index}>
          {(
            providedDraggable: DraggableProvided,
            snapshotDraggable: DraggableStateSnapshot
          ) => (
            <div
              ref={providedDraggable.innerRef}
              {...providedDraggable.draggableProps}
              {...providedDraggable.dragHandleProps}
              style={getDraggableStyle(
                providedDraggable.draggableProps.style,
                snapshotDraggable.isDragging
              )}
            >
              {task.content}
            </div>
          )}
        </Draggable>
      ))}
    </>
  );
}
