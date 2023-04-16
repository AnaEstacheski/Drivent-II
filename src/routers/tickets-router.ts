import { Router } from 'express';
import { authenticateToken } from '@/middlewares';

const ticketsRouter = Router();

ticketsRouter.all('/*', authenticateToken).get('/types').get('').post('');

export { ticketsRouter };
