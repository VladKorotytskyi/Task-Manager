import React from "react";
import { useSelector } from "react-redux";
import { selectProjectById } from "../../redux/projects/projectsSelectors";
import { selectTasksByUserId } from "../../redux/tasks/tasksSelector";

export const UserCard = ({ user }) => {
  const project = useSelector((state) =>
    selectProjectById(state, user?.projectId)
  );

  const userTasks = useSelector((state) =>
    selectTasksByUserId(state, user?.id)
  );

  if (!user) return null;

  return (
    <div className="user-card">
      <h2>Name: {user.name}</h2>
      <p>
        <strong>Project:</strong>{" "}
        {project ? project.title : "No project assigned"}
      </p>
      <p>
        <strong>Status:</strong> {project ? project.status : "N/A"}
      </p>
      <p>
        <strong>Priority:</strong> {project ? project.priority : "N/A"}
      </p>

      <div>
        <button type="button">Edit</button>
        <button type="button">Delete</button>
        <button type="button">Details</button>
      </div>
    </div>
  );
};