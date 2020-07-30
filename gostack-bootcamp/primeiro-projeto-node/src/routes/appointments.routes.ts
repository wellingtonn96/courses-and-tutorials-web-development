import { Router, response } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appointmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parseDate = parseISO(date);

    const appointment = appointmentsRepository.create({
      provider,
      date: parseDate,
    });

    return response.json(appointment);
  } catch (error) {
    return response.json(400).json({ error: error.message });
  }
});

export default appointmentsRouter;
