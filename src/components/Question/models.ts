import { IQuestion, IAlternative } from "src/mock/initialData/models";

export interface QuestionProps {
  question: IQuestion;
  alternatives: IAlternative[];
  index: number;
}
