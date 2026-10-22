import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../redux/projects/projectsThunks";
import { fetchUsers } from "../../redux/users/usersThunks";
import { selectDashboardStatistics } from "../../redux/tasks/tasksSelectors";
import * as S from "./Dashboard.styled";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const stats = useSelector(selectDashboardStatistics);

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <S.Container>
      <S.Title>Dashboard</S.Title>
      <S.Grid>
        <S.Card>
          <S.CardTitle>Total Tasks</S.CardTitle>
          <S.CardValue>{stats.totalTasks}</S.CardValue>
        </S.Card>
        <S.Card>
          <S.CardTitle>To Do</S.CardTitle>
          <S.CardValue>{stats.todoTasks}</S.CardValue>
        </S.Card>
        <S.Card>
          <S.CardTitle>In Progress</S.CardTitle>
          <S.CardValue>{stats.inProgressTasks}</S.CardValue>
        </S.Card>
        <S.Card>
          <S.CardTitle>Done</S.CardTitle>
          <S.CardValue>{stats.doneTasks}</S.CardValue>
        </S.Card>
        <S.Card>
          <S.CardTitle>High Priority</S.CardTitle>
          <S.CardValue>{stats.highPriorityTasks}</S.CardValue>
        </S.Card>
        <S.Card>
          <S.CardTitle>Users</S.CardTitle>
          <S.CardValue>{stats.totalUsers}</S.CardValue>
        </S.Card>
        <S.Card>
          <S.CardTitle>Projects</S.CardTitle>
          <S.CardValue>{stats.totalProjects}</S.CardValue>
        </S.Card>
      </S.Grid>
    </S.Container>
  );
};