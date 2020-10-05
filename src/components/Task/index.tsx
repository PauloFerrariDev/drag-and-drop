import React from "react";
import { TaskProps } from "./models";
import { Container } from "./styleds";

export default function Task(props: TaskProps) {
  const { task } = props;

  return <Container>{task.content}</Container>;
}
