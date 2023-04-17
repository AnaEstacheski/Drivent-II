import { notFoundError, unauthorizedError } from '@/errors';
import paymentRepository from '@/repositories/payments-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import ticketRepository from '@/repositories/ticket-repository';

async function getPaymentByTicketId(userId: number, ticketId: number) {
  const enrollmet = await enrollmentRepository.findWithAddressByUserId(userId);
  const ticketIdExist = await ticketRepository.getTicketById(ticketId);

  if (!ticketIdExist) {
    throw notFoundError();
  }
  if (enrollmet.id !== ticketIdExist.enrollmentId) {
    throw unauthorizedError();
  }

  const payment = await paymentRepository.findPaymentByTicket(ticketId);
  return payment;
}

const paymentService = {
  getPaymentByTicketId,
};

export default paymentService;
