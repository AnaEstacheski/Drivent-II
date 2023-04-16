import { notFoundError } from '@/errors';
import ticketRepository from '@/repositories/ticket-repository';
import enrollmentRepository from '@/repositories/enrollment-repository';

async function getTicketTypes() {
  const ticketTypes = await ticketRepository.findTicketTypes();

  if (!ticketTypes) {
    throw notFoundError();
  }
  return ticketTypes;
}

async function getTicketsbyUser(userId: number) {
  const ticket = await ticketRepository.findTickets(userId);
  if (!ticket) {
    throw notFoundError();
  }

  return ticket;
}

const ticketService = {
  getTicketTypes,
  getTicketsbyUser,
};

export default ticketService;
