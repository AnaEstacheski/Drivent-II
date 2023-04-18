import { unauthorizedError, notFoundError } from '@/errors';
import paymentRepository from '@/repositories/payments-repository';
import ticketRepository from '@/repositories/ticket-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';
import { CardData } from '@/protocols';

async function getPaymentByTicketId(userId: number, ticketId: number) {
  const ticket = await ticketRepository.getTicketById(ticketId);
  if (ticket.Enrollment.userId !== userId) {
    throw unauthorizedError();
  }
  const payment = await paymentRepository.findPaymentByTicket(ticketId);
  return payment;
}

async function postPayment(ticketId: number, cardData: CardData, userId: number) {
  const ticket = await ticketRepository.findTickets(ticketId);
  if (!ticket) {
    throw notFoundError();
  }

  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (enrollment.id !== ticket.enrollmentId) {
    throw unauthorizedError();
  }

  const paymentData = {
    ticketId,
    value: ticket.TicketType.price,
    cardIssuer: cardData.issuer,
    cardLastDigits: cardData.number.toString().slice(-4),
  };

  const payment = await paymentRepository.createPayment(ticketId, paymentData);
  await ticketRepository.updateTicket(ticketId);
  return payment;
}

const paymentService = {
  getPaymentByTicketId,
  postPayment,
};

export default paymentService;
