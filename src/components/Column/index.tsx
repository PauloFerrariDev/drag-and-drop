import React from "react";
import { ColumnProps } from "./models";
import { Container, Title, TaskList } from "./styleds";
import Task from "src/components/Task";

export default function Column(props: ColumnProps) {
  const { column, tasks } = props;

  return (
    <Container>
      <Title>{column.title}</Title>
      <TaskList>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>
    </Container>
  );
}
