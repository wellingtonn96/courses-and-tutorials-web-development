import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./App.css";

import Header from "./components/Header";
/**
 Components
 Propriedades
 Estado
 **/

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((response) => {
      setProjects(response.data);
    });
  }, []);
  // useState retorna um array com 2 posições

  //
  //1. Variável com o seu valor inicial
  //2. Função para atualizarmos esse valor

  async function handleAddProject() {
    // setProjects([...projects, `Novo projecto ${Date.now()}`]);

    const response = await api.post("projects", {
      title: `Novo projecto ${Date.now()}`,
      owner: "Wellington",
    });

    setProjects([...projects, response.data]);
  }

  return (
    <>
      <Header title="Projetos">
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
      </Header>

      <button type="button" onClick={handleAddProject}>
        Adicionar projetos
      </button>
    </>
  );
}
export default App;
