import { getRepository, Repository } from 'typeorm';

import IUserRepository from '@modules/users/repositories/IUsersRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreaUserDTO';

import User from '../entities/User';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async findByDate(date: Date): Promise<User | undefined> {
    const findAppointment = await this.ormRepository.findOne({
      where: { date },
    });

    return findAppointment;
  }

  public async create({
    provider_id,
    date,
  }: ICreateAppointmentDTO): Promise<User> {
    const appointments = this.ormRepository.create({ provider_id, date });

    await this.ormRepository.save(appointments);

    return appointments;
  }
}

export default AppointmentRepository;
