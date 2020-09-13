import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersController from '../controllers/UsersController';
import UpdateAvatarController from '../controllers/UserAvatarController';

const usersRouter = Router();
const usersController = new UsersController();
const updateAvatarController = new UpdateAvatarController();

const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  updateAvatarController.update
);

export default usersRouter;
