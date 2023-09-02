import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

export const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="temporary"/>
      <p>
        <li className="item">
          <b>Skills</b>
          <span>JavaScript, Managing a Raspberry Pi, Git</span>
        </li>
        <li className="item">
          <b>Description</b>
          <span>
            This smart mirror is a two-way mirror with a display installed in
            the the back
          </span>
          <span>
            Powered by a Raspberry Pi, it uses modules coded in JavaScript to
            customize the mirror with many features
          </span>
        </li>
      </p>
    </div>
  );
};
