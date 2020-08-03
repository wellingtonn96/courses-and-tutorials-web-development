import { getRepository } from 'typeorm';
import User from '../models/User';
import path from 'path';
import uploadConfig from '../config/upload';
import fs from 'fs';

interface Request {
  user_id: string;
  avatarFilename: string;
}

class UpdateAvatarService {
  public async execute({ user_id, avatarFilename }: Request): Promise<User> {
    const userRepository = getRepository(User);

    const user = await userRepository.findOne(user_id);

    if (!user) {
      throw new Error('Only authenticated users can change avatar');
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExistis = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExistis) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }

    user.avatar = avatarFilename;

    await userRepository.save(user);

    return user;
  }
}

export { UpdateAvatarService };
