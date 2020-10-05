import React from "react";
import initialData from "src/mock/initialData";
import { ITask, IColumn } from "src/mock/initialData/models";
import Column from "src/components/Column";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const data = initialData;

  const findColumn = (id: string) => {
    const column: IColumn | undefined = data.columns.find(
      (column) => column.id === id
    );
    return column;
  };

  const findTasks = (taskIds: string[]) => {
    let tasks: ITask[] = [];
    taskIds.forEach((taskId) => {
      const task = data.tasks.find((task) => task.id === taskId);
      if (task) {
        tasks.push(task);
      }
    });
    return tasks;
  };

  const renderColumns = data.columnOrder.map((columnId) => {
    const column = findColumn(columnId);
    let tasks: ITask[] = [];
    if (column) {
      tasks = findTasks(column.taskIds);
      return <Column key={column.id} column={column} tasks={tasks} />;
    }
    return undefined;
  });

  const OnDragEnd = (result: DropResult) => {};

  return (
    <DragDropContext onDragEnd={OnDragEnd}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {renderColumns}
      </div>
    </DragDropContext>
  );
}

export default App;
