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
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw notFoundError();
  }
  const ticket = await ticketRepository.findTickets(enrollment.id);
  if (!ticket) {
    throw notFoundError();
  }

  return ticket;
}

async function postTicket({ userId, ticketTypeId }: NewTicket) {
  const enrollment = await enrollmentRepository.findWithAddressByUserId(userId);
  if (!enrollment) {
    throw notFoundError();
  }

  const ticket = ticketRepository.postTicket({ enrollmentId: enrollment.id, ticketTypeId });
  if (!ticket) {
    throw notFoundError();
  }
  return ticket;
}

type NewTicket = {
  userId: number;
  ticketTypeId: number;
};

const ticketService = {
  getTicketTypes,
  getTicketsbyUser,
  postTicket,
};

export default ticketService;
