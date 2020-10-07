import React, { useState } from "react";
import initialData from "src/mock/initialData";
import {
  IQuestion,
  IAlternative,
  InitialData,
} from "src/mock/initialData/models";
import Question from "src/components/Question";
import {
  DragDropContext,
  DropResult,
  Droppable,
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

export default function App() {
  const [data, setData] = useState<InitialData>(initialData);

  const findQuestion = (id: string): IQuestion | undefined => {
    const question: IQuestion | undefined = data.questions.find(
      (question) => question.id === id
    );
    return question;
  };

  const findAlternatives = (alternativeIds: string[]): IAlternative[] => {
    let alternatives: IAlternative[] = [];
    alternativeIds.forEach((alternativeId) => {
      const alternative = data.alternatives.find(
        (alternative) => alternative.id === alternativeId
      );
      if (alternative) {
        alternatives.push(alternative);
      }
    });
    return alternatives;
  };

  const renderQuestions = data.questionsOrder.map((questionId, index) => {
    const question = findQuestion(questionId);
    let alternatives: IAlternative[] = [];
    if (question) {
      alternatives = findAlternatives(question.alternativeIds);
      return (
        <Question
          key={question.id}
          question={question}
          alternatives={alternatives}
          index={index}
        />
      );
    }
    return undefined;
  });

  const OnDragEnd = (result: DropResult): void => {
    const { source, destination, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (type === "question") {
      const questionsOrder = [...data.questionsOrder];
      questionsOrder.splice(source.index, 1);
      questionsOrder.splice(destination.index, 0, draggableId);
      setData((prevData) => ({ ...prevData, questionsOrder }));
      console.log("data:", data);
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const question = data.questions.find(
        (question) => question.id === source.droppableId
      );
      if (question) {
        const alternativeIds = [...question.alternativeIds];
        alternativeIds.splice(source.index, 1);
        alternativeIds.splice(destination.index, 0, draggableId);
        const questions = data.questions.map((question) => {
          if (question.id === source.droppableId) {
            question.alternativeIds = alternativeIds;
          }
          return question;
        });
        setData((prevData) => ({ ...prevData, questions }));
        console.log("data:", data);
        return;
      }
    }
  };

  const getDroppableStyle = (isDraggingOver: boolean): React.CSSProperties => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "50vw",
    margin: "auto",
    padding: "12px 24px",
    backgroundColor: isDraggingOver ? "lightblue" : "white",
    position: "relative",
  });

  return (
    <DragDropContext onDragEnd={OnDragEnd}>
      <div
        style={{
          width: "100vw",
          padding: "24px 0",
          backgroundColor: "#ddd",
        }}
      >
        <Droppable
          droppableId="main-container"
          direction="vertical"
          type="question"
        >
          {(provided: DroppableProvided, snapshot: DroppableStateSnapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getDroppableStyle(snapshot.isDraggingOver)}
            >
              {renderQuestions}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
