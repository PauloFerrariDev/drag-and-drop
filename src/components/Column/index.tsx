import React from "react";
import { ColumnProps } from "./models";
import { Title } from "./styleds";
import TaskList from "../TaskList";
import {
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

export default function Column(props: ColumnProps) {
  const { column, tasks } = props;

  const getDroppableStyle = (isDraggingOver: boolean): {} => ({
    background: isDraggingOver ? "lightblue" : "#eee",
    margin: 8,
    padding: 8,
    width: 300,
    minHeight: 400,
    borderRadius: 2,
    border: "1px solid lightgrey",
    boxSizing: "border-box",
  });

  return (
    <>
      <Droppable droppableId={column.id}>
        {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={getDroppableStyle(snapshot.isDraggingOver)}
          >
            <Title>{column.title}</Title>
            <TaskList tasks={tasks} />
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
}
