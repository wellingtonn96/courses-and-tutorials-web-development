import User from '@modules/users/infra/typeorm/entities/User';
import bcrypt, { hash } from 'bcryptjs';
import { AppError } from '@shared/errors/AppError';
import IUsersRepository from '../repositories/IUsersRepository';
import { injectable, inject } from 'tsyringe';

interface Request {
  name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUsersRepository
  ) {}
  async execute({ name, email, password }: Request): Promise<User> {
    const checkUserExists = this.userRepository.findByEmail(email);

    console.log(checkUserExists);

    if (checkUserExists) {
      throw new AppError('Email address already used', 401);
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
