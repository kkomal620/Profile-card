import React from "react";
import { createRoot } from "react-dom/client";
// import { ReactDOM } from "react-dom/client";
import "./index.css";

const skill = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },

  {
    skill: "Javascript",
    level: "advanced",
    color: "#EFD81D",
  },

  {
    skill: "web design",
    level: "beginner",
    color: "#C3DCAF",
  },

  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },

  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB",
  },

  {
    skill: "C++",
    level: "advanced",
    color: "#2662EA",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Komal Kumari.jpg" alt="Komal Kumari" />;
}

function Intro() {
  return (
    <div>
      <h1>Komal Kumari</h1>
      <p>
        My name is Komal Kumari student of btech final year . I like to play
        games and do coding in my free time
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skill.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="Skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
