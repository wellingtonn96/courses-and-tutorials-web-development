import { AppError } from '@shared/errors/AppError';
import FakeUserRepository from '../repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

describe(`CreateUsers`, () => {
  it('should be able to create a new user', async () => {
    const fakeAppointmentRepository = new FakeUserRepository();
    const createUser = new CreateUserService(fakeAppointmentRepository);

    const user = await createUser.execute({
      email: 'welto@gmail.com',
      name: 'wellington',
      password: '@123#',
    });

    expect(user).toHaveProperty('id');
  });

  it('Should not be able to create a new user with an email already existing', async () => {
    const fakeAppointmentRepository = new FakeUserRepository();
    const createUser = new CreateUserService(fakeAppointmentRepository);

    await createUser.execute({
      email: 'welto@gmail.com',
      name: 'wellingtosn',
      password: '@123#',
    });

    expect({
      email: 'welto@gmail.com',
      name: 'wellingtosn',
      password: '@123#',
    }).rejects.toBeInstanceOf(AppError);
  });
});
