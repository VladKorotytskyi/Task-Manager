import { Routes, Route, Link } from "react-router-dom";

export const Sidebar = ({ isOpen}) => {
  if (!isOpen) return null;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/tasks">Tasks</Link>
        </li>
      </ul>
    </nav>
  );
};
