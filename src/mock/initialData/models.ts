export interface ITask {
  id: string;
  content: string;
}

export interface IColumn {
  id: string;
  title: string;
  taskIds: string[];
}

export interface InitialData {
  tasks: ITask[];
  columns: IColumn[];
  columnOrder: string[];
}
