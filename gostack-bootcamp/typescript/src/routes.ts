import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "wellington",
    password: "123456",
    email: "welto@gmail.com",
    techs: [
      "Node",
      "React",
      "React Native",
      { title: "Javascript", experience: 100 },
    ],
  });
  return response.json({ message: "Hello world" });
}
