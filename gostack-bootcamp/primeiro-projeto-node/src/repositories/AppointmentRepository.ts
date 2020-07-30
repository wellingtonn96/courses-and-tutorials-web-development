import { uuid } from 'uuidv4';

interface IAppointment {
  id: string;
  provider: string;
  date: Date;
}

interface CreateAppointmentDTO {
  provider: string;
  date: Date;
}

class AppointmentRepository {
  private appointments: IAppointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): IAppointment[] {
    return this.appointments;
  }

  public create({ provider, date }: CreateAppointmentDTO): IAppointment {
    const appointment = {
      id: uuid(),
      provider,
      date,
    };

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentRepository;
