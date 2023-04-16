import { prisma } from '@/config';

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findTickets(userId: number) {
  return prisma.ticket.findMany({
    where: { id: userId },
    include: {
      TicketType: true,
    },
  });
}

const ticketRepository = {
  findTicketTypes,
  findTickets,
};

export default ticketRepository;
