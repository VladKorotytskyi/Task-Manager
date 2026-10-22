import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterSearch,
  setFilterStatus,
  setFilterPriority,
  setFilterProject,
  setFilterUser,
} from "../../redux/tasks/tasksSlice";
import {
  selectFilterSearch,
  selectFilterStatus,
  selectFilterPriority,
  selectFilterProject,
  selectFilterUser,
} from "../../redux/tasks/tasksSelectors";
import { selectAllProjects } from "../../redux/projects/projectsSelectors";
import { selectAllUsers } from "../../redux/users/usersSelectors";
import * as S from "./TaskFilters.styled";

export const TaskFilters = () => {
  const dispatch = useDispatch();
  const search = useSelector(selectFilterSearch);
  const status = useSelector(selectFilterStatus);
  const priority = useSelector(selectFilterPriority);
  const projectId = useSelector(selectFilterProject);
  const userId = useSelector(selectFilterUser);

  const projects = useSelector(selectAllProjects);
  const users = useSelector(selectAllUsers);

  return (
    <S.FiltersWrapper>
      <S.SearchInput
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => dispatch(setFilterSearch(e.target.value))}
      />

      <S.Select
        value={status}
        onChange={(e) => dispatch(setFilterStatus(e.target.value))}
      >
        <option value="all">All Statuses</option>
        <option value="todo">To Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Done / Completed</option>
      </S.Select>

      <S.Select
        value={priority}
        onChange={(e) => dispatch(setFilterPriority(e.target.value))}
      >
        <option value="all">All Priorities</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </S.Select>

      <S.Select
        value={projectId}
        onChange={(e) => dispatch(setFilterProject(e.target.value))}
      >
        <option value="all">All Projects</option>
        {projects.map((project) => (
          <option key={project.id} value={project.id}>
            {project.title}
          </option>
        ))}
      </S.Select>

      <S.Select
        value={userId}
        onChange={(e) => dispatch(setFilterUser(e.target.value))}
      >
        <option value="all">All Users</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </S.Select>
    </S.FiltersWrapper>
  );
};