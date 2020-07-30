import { Router, response } from 'express';
import { parseISO } from 'date-fns';
import { uuid } from 'uuidv4';

const routes = Router();

interface IAppointment {
  id: string;
  provider: string;
  date: Date;
}

const appointments = <IAppointment[]>[];

routes.get('/appointments', (request, response) => {
  return response.json(appointments);
});

routes.post('/appointments', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parseDate = parseISO(date);

    const appointment: IAppointment = {
      id: uuid(),
      provider,
      date: parseDate,
    };

    appointments.push(appointment);

    return response.json(appointment);
  } catch (error) {
    return response.json(400).json({ error: error.message });
  }
});

export default routes;
