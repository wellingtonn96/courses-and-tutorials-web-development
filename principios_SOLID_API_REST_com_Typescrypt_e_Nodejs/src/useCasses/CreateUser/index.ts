import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';
import { PostgresUserRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { CreateUserCase } from './CreateUser';
import { CreateUserController } from './CreateUserController';

const mailTrapMailProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUserRepository();

const createUserUseCase = new CreateUserCase(
  postgresUsersRepository,
  mailTrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
