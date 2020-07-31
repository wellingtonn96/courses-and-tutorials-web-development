import { IUserRepository } from '../../repositories/IUsersRepository';
import { ICreateUserRequestDTO } from './CreateUserDTO';
import { User } from '../../entities/User';
import { IMailProvider } from '../../providers/EmailProvider';

export class CreateUserCase {
  constructor(
    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}
  async execute(data: ICreateUserRequestDTO) {
    const userAlredyExistis = await this.usersRepository.findByEmail(
      data.email
    );

    if (userAlredyExistis) {
      throw new Error('User alredy exists.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendEmail({
      to: {
        name: data.email,
        email: data.email,
      },
      from: {
        name: 'Equipe do Meu App',
        email: 'equipe@meuapp.com',
      },
      subject: 'Seja bem-vido a plataforma',
      body: '<p>Voçê já podefazer login em nossa plataforma.</p>',
    });
  }
}
