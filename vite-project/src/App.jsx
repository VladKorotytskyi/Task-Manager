import { Routes, Route } from "react-router-dom";
import { Layout } from "./Components/Layout/Layout";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/SideBar/Sidebar";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { Projects } from "./Components/Projects/Projects";
import { Users } from "./Components/Users/Users";
import { TaskForm } from "./Components/TaskForm/TaskForm";
import { useState } from "react";
import React from "react";
import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/users" element={<Users />} />
          <Route path="/tasks" element={<TaskForm />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;