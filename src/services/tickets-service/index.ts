import { notFoundError } from '@/errors';
import ticketRepository from '@/repositories/ticket-repository';

async function getTicketTypes() {
  const ticketTypes = await ticketRepository.obtainTicketTypes();

  if (!ticketTypes) {
    throw notFoundError();
  }
  return ticketTypes;
}

const ticketService = {
  getTicketTypes,
};

export default ticketService;
