import { TicketStatus } from '@prisma/client';
import { prisma } from '@/config';

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findTickets(userId: number) {
  return prisma.ticket.findMany({
    where: {
      Enrollment: { userId },
    },
    include: {
      TicketType: true,
    },
  });
}

async function postTicket({ enrollmentId, ticketTypeId }: NewTicket) {
  return prisma.ticket.create({
    data: { ticketTypeId, enrollmentId, status: TicketStatus.RESERVED },
    include: { TicketType: true },
  });
}

type NewTicket = {
  enrollmentId: number;
  ticketTypeId: number;
};

const ticketRepository = {
  findTicketTypes,
  findTickets,
  postTicket,
};

export default ticketRepository;
