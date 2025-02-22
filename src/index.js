import React from "react";
import { createRoot } from "react-dom/client";
// import { ReactDOM } from "react-dom/client";
import "./index.css";

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
      <Skill Skill="React" color="blue" />
      <Skill Skill="HTML+CSS" color="orangered" />
      <Skill Skill="JS" color="yellow" />
      <Skill Skill="C++" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="Skill" style={{ backgroundColor: props.color }}>
      <span>{props.Skill}</span>
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
