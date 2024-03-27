import {
  DiGo,
  DiJsBadge,
  DiPython,
  DiMysql,
  DiLinux,
} from "react-icons/di";

import {
  SiKotlin,
  SiSpring,
} from "react-icons/si"


import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "go", name: "GoLang", icon: <DiGo /> },
  { id: "kotlin", name: "Kotlin", icon: <SiKotlin /> },
  { id: "python", name: "Python", icon: <DiPython /> },
  { id: "spring", name: "Spring", icon: <SiSpring /> },
  { id: "mysql", name: "MySQL", icon: <DiMysql /> },
  { id: "linux", name: "Linux", icon: <DiLinux /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
