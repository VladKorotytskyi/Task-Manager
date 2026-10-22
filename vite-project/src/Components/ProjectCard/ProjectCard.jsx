import React from "react";
import { useSelector } from "react-redux";
import { selectTasksByProjectId } from "../../redux/tasks/tasksSelectors";
import * as S from "./ProjectCard.styled";

export const ProjectCard = ({ project }) => {
  const projectTasks = useSelector((state) =>
    selectTasksByProjectId(state, project.id)
  );

  return (
    <S.Card>
      <S.Title>{project.title}</S.Title>
      <S.Description>{project.description}</S.Description>
      <h3>Tasks ({projectTasks.length})</h3>
      <S.TaskList>
        {projectTasks.map((task) => (
          <S.TaskItem key={task.id}>
            <span>{task.title}</span>
            <span>[{task.status}]</span>
          </S.TaskItem>
        ))}
      </S.TaskList>
    </S.Card>
  );
};