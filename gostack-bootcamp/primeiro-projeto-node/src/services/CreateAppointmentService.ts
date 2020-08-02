import AppointmentsRepository from '../repositories/AppointmentRepository';
import Appointment from '../models/Appointment';
import { startOfHour } from 'date-fns';

import { getCustomRepository } from 'typeorm';

interface Request {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ provider_id, date }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentWithTheSameDate = await appointmentsRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentWithTheSameDate) {
      throw new Error('This appointment is already booked');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
