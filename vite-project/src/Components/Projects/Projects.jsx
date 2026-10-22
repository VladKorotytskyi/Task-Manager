import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../redux/projects/projectsThunks";
import { selectAllProjects, selectProjectsStatus } from "../../redux/projects/projectsSelectors";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import * as S from "./Projects.styled";

export const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(selectAllProjects);
  const status = useSelector(selectProjectsStatus);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (status === "loading") return <S.Container>Loading projects...</S.Container>;

  return (
    <S.Container>
      <S.HeaderTitle>Projects</S.HeaderTitle>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </S.Container>
  );
};