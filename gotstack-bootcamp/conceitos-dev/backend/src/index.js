const express = require("express");
const { uuid, isUuid } = require("uuidv4");

const app = express();

app.use(express.json());

/** 
 *Metodos HTTP
 
 GET: buscar informações do backend
 POST: Criar uma informações no backend
 PUT() ou PATCH(Para atualizar um metodo muito especifico): Alterar informações no backend
 DELETE deletar uma informação no backend
 **/

/**
  Tipos de parametros
  
  Query Params; Filtros e paginação
  Route Params; 
  Request Body;


  * */

/*
 * Middleware;
 * Interceptador de requisições que pode interronper a requisição ou mudar dados da requisição
 *
 */

function logRequest(req, res, next) {
  const { method, url } = req;

  const logLabel = `[${method.toUpperCase()} ${url}]`;

  console.time(logLabel);

  console.timeEnd(logLabel);
  return next();
}

function validateProjectId(request, response, next) {
  const { id } = request.params;

  if (!isUuid(id)) {
    return response.status(400).json({ error: `Invalid project ID.` });
  }

  return next();
}

//passo 1 - 2

app.use(logRequest);
app.use("/projects/:id", validateProjectId);

const projects = [];

app.get("/projects", (req, res) => {
  const { title } = req.query;

  const results = title
    ? projects.filter((item) => item.title.includes(title))
    : projects;

  return res.json(results);
});

app.post("/projects", (req, res) => {
  const { title, owner } = req.body;

  const project = { id: uuid(), title, owner };

  projects.push(project);

  return res.json(project);
});

app.put("/projects/:id", (req, res) => {
  const { owner, title } = req.body;
  const { id } = req.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: "project not found!" });
  }

  const project = {
    id,
    title,
    owner,
  };

  projects[projectIndex] = project;

  return res.json(project);
});

app.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(400).json({ error: "project not found!" });
  }

  const results = projects.splice(projectIndex, 1);

  return res.status(204).json(results);
});

app.listen(3333, () => {
  console.log(`Back-end started!`);
});
