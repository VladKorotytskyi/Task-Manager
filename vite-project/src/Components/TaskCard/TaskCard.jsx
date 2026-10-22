import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/tasks/tasksThunks";
import * as S from "./TaskCard.styled";

export const TaskCard = ({ task, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      dispatch(deleteTask(task.id));
    }
  };

  return (
    <S.Card>
      <S.Title>{task.title}</S.Title>
      <S.Description>{task.description}</S.Description>
      <S.InfoGroup>
        <span>
          <strong>Project:</strong> {task.project ? task.project.title : "N/A"}
        </span>
        <span>
          <strong>Assigned to:</strong> {task.user ? task.user.name : "Unassigned"}
        </span>
        <S.Badge type="status">{task.status}</S.Badge>
        <S.Badge type="priority" val={task.priority}>
          {task.priority}
        </S.Badge>
      </S.InfoGroup>
      <S.Actions>
        {onEdit && <S.Button onClick={() => onEdit(task)}>Edit</S.Button>}
        <S.Button variant="delete" onClick={handleDelete}>
          Delete
        </S.Button>
      </S.Actions>
    </S.Card>
  );
};