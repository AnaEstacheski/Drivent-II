import { Router } from 'express';
import { authenticateToken } from '@/middlewares';
import { getTicketTypes, getTicketsbyUser } from '@/controllers';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken).get('/types', getTicketTypes).get('', getTicketsbyUser).post('');

export { ticketsRouter };
