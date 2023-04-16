import { prisma } from '@/config';

async function obtainTicketTypes() {
  return prisma.ticketType.findMany();
}

const ticketRepository = {
  obtainTicketTypes,
};

export default ticketRepository;
