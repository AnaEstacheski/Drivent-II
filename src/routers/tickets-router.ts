import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getTicketTypes, getTicketsbyUser, postTicket } from '@/controllers';
import { postTicketSchema } from '@/schemas/tickets-schemas';

const ticketsRouter = Router();

ticketsRouter
  .all('/*', authenticateToken)
  .get('/types', getTicketTypes)
  .get('', getTicketsbyUser)
  .post('', validateBody(postTicketSchema), postTicket);

export { ticketsRouter };
