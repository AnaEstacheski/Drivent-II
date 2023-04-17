import { unauthorizedError } from '@/errors';
import paymentRepository from '@/repositories/payments-repository';
import ticketRepository from '@/repositories/ticket-repository';

async function getPaymentByTicketId(userId: number, ticketId: number) {
  const ticket = await ticketRepository.getTicketById(ticketId);
  if (ticket.Enrollment.userId !== userId) {
    throw unauthorizedError();
  }
  const payment = await paymentRepository.findPaymentByTicket(ticketId);
  return payment;
}

const paymentService = {
  getPaymentByTicketId,
};

export default paymentService;
