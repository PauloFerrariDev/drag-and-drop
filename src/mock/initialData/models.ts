export interface IAlternative {
  id: string;
  content: string;
}

export interface IQuestion {
  id: string;
  title: string;
  alternativeIds: string[];
}

export interface InitialData {
  alternatives: IAlternative[];
  questions: IQuestion[];
  questionsOrder: string[];
}
