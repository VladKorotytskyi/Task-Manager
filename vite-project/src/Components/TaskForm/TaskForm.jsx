import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, updateTask } from "../../redux/tasks/tasksThunks";
import { selectAllProjects } from "../../redux/projects/projectsSelectors";
import { selectAllUsers } from "../../redux/users/usersSelectors";
import * as S from "./TaskForm.styled";

export const TaskForm = ({ editTask, onCancel }) => {
  const dispatch = useDispatch();
  const projects = useSelector(selectAllProjects);
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("medium");
  const [projectId, setProjectId] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (editTask) {
      setTitle(editTask.title || "");
      setDescription(editTask.description || "");
      setStatus(editTask.status || "todo");
      setPriority(editTask.priority || "medium");
      setProjectId(editTask.projectId || "");
      setUserId(editTask.userId || "");
    }
  }, [editTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const taskData = {
      title,
      description,
      status,
      priority,
      projectId: projectId || (projects[0] ? projects[0].id : "1"),
      userId: userId || (users[0] ? users[0].id : "1"),
    };

    if (editTask) {
      dispatch(updateTask({ id: editTask.id, ...taskData }));
      if (onCancel) onCancel();
    } else {
      dispatch(addTask(taskData));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <S.FormWrapper onSubmit={handleSubmit}>
      <S.FormTitle>{editTask ? "Edit Task" : "Create Task"}</S.FormTitle>
      
      <S.FormGroup>
        <S.Label>Title</S.Label>
        <S.Input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>Description</S.Label>
        <S.TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>Status</S.Label>
        <S.Select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="todo">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </S.Select>
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>Priority</S.Label>
        <S.Select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </S.Select>
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>Project</S.Label>
        <S.Select
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
        >
          <option value="">Select Project</option>
          {projects.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </S.Select>
      </S.FormGroup>

      <S.FormGroup>
        <S.Label>Assigned User</S.Label>
        <S.Select value={userId} onChange={(e) => setUserId(e.target.value)}>
          <option value="">Select User</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </S.Select>
      </S.FormGroup>

      <S.ButtonGroup>
        <S.SubmitButton type="submit">
          {editTask ? "Save Changes" : "Create Task"}
        </S.SubmitButton>
        {editTask && onCancel && (
          <S.CancelButton type="button" onClick={onCancel}>
            Cancel
          </S.CancelButton>
        )}
      </S.ButtonGroup>
    </S.FormWrapper>
  );
};