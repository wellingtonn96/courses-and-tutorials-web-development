import { Router } from 'express';
import { app } from './app';
import { createUserController } from './useCasses/CreateUser';

const routes = Router();

routes.post('/users', (request, response) => {
  return createUserController.handle(request, response);
});

export { routes };
