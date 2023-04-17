import { Router } from 'express';
import { authenticateToken, validateBody } from '@/middlewares';
import { getPayment } from '@/controllers';
import { paymentSchema } from '@/schemas/payments-schemas';

const paymentsRouter = Router();

paymentsRouter.all('/*', authenticateToken).get('/', getPayment).post('/process', validateBody(paymentSchema));

export { paymentsRouter };
