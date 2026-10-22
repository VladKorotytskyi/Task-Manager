import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProjects } from "./redux/projects/projectsThunks";
import { fetchUsers } from "./redux/users/usersThunks";
import { fetchTasks } from "./redux/tasks/tasksThunks";
import { selectFilteredTasks } from "./redux/tasks/tasksSelectors";
import { LayoutWrapper, MainContent, PageContent, TasksPageContainer, TasksPageTitle} from "./App.styled";

import { Header } from "./Components/Header/Header";
import {SideBar} from "./Components/SideBar/SideBar";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Projects } from "./Components/Projects/Projects";
import { Users } from "./Components/Users/Users";
import { TaskFilters } from "./Components/TaskFilters/TaskFilters";
import { TaskForm } from "./Components/TaskForm/TaskForm";
import { TaskCard } from "./Components/TaskCard/TaskCard";

const TasksPage = () => {
  const [editingTask, setEditingTask] = useState(null);
  const tasks = useSelector(selectFilteredTasks);

  return (
    <TasksPageContainer>
      <TasksPageTitle>Tasks</TasksPageTitle>
      
      <TaskForm 
        editTask={editingTask} 
        onCancel={() => setEditingTask(null)} 
      />

      <TaskFilters />

      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard 
            key={task.id} 
            task={task} 
            onEdit={(t) => setEditingTask(t)} 
          />
        ))
      ) : (
        <p>No tasks found.</p>
      )}
    </TasksPageContainer>
  );
};

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
    dispatch(fetchUsers());
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <LayoutWrapper>
      <Header />
      <MainContent>
        <SideBar />
        <PageContent>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </PageContent>
      </MainContent>
    </LayoutWrapper>
  );
}