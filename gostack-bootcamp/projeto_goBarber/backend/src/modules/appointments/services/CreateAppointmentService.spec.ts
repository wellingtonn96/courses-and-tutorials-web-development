import { AppError } from '@shared/errors/AppError';
import { FakeAppointmentRepository } from '../infra/typeorm/repositories/fakes/FakeAppointmentsRepository';

import CreateAppointmentsService from './CreateAppointmentService';

describe(`CreateAppointment`, () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointment = new CreateAppointmentsService(
      fakeAppointmentRepository
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123123');
  });

  it('shuld not be able to create tow appointments on the same time', async () => {
    const fakeAppointmentRepository = new FakeAppointmentRepository();
    const createAppointment = new CreateAppointmentsService(
      fakeAppointmentRepository
    );

    const appointment = await createAppointment.execute({
      date: new Date(2020, 5, 10, 11),
      provider_id: '123123',
    });

    expect(
      createAppointment.execute({
        date: new Date(2020, 5, 10, 11),
        provider_id: '123123',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
