import React, { useState } from "react";
import initialData from "src/mock/initialData";
import { ITask, IColumn, InitialData } from "src/mock/initialData/models";
import Column from "src/components/Column";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const [data, setData] = useState<InitialData>(initialData);

  const findColumn = (id: string): IColumn | undefined => {
    const column: IColumn | undefined = data.columns.find(
      (column) => column.id === id
    );
    return column;
  };

  const findTasks = (taskIds: string[]): ITask[] => {
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

  const reorder = (
    taskIds: string[],
    startIndex: number,
    endIndex: number
  ): string[] => {
    const taskIdsTemp = [...taskIds];
    const [removedTaskId] = taskIdsTemp.splice(startIndex, 1);
    taskIdsTemp.splice(endIndex, 0, removedTaskId);
    return taskIdsTemp;
  };

  const OnDragEnd = (result: DropResult): void => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const column = data.columns.find(
        (column) => column.id === source.droppableId
      );
      if (column) {
        const taskIds = reorder(
          column.taskIds,
          source.index,
          destination.index
        );

        const columns = data.columns.map((column) => {
          if (column.id === source.droppableId) {
            column.taskIds = taskIds;
          }
          return column;
        });

        setData((prevData) => ({ ...prevData, columns }));
        console.log("data:", data);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={OnDragEnd}>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {renderColumns}
      </div>
    </DragDropContext>
  );
}

export default App;
