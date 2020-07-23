import { createParamDecorator } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  async (data, req): Promise<User> => {
    const [results] = req.args;

    return results.user;
  },
);
