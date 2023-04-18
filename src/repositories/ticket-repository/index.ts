import { TicketStatus } from '@prisma/client';
import { prisma } from '@/config';

async function findTicketTypes() {
  return prisma.ticketType.findMany();
}

async function findTickets(enrollmentId: number) {
  return prisma.ticket.findFirst({
    where: {
      enrollmentId,
    },
    include: {
      TicketType: true,
    },
  });
}

async function getTicketById(ticketId: number) {
  return prisma.ticket.findFirst({
    where: {
      id: ticketId,
    },
    include: {
      Enrollment: true,
    },
  });
}

async function postTicket({ enrollmentId, ticketTypeId }: NewTicket) {
  return prisma.ticket.create({
    data: { ticketTypeId, enrollmentId, status: TicketStatus.RESERVED },
    include: { TicketType: true },
  });
}

async function updateTicket(ticketId: number) {
  return prisma.ticket.update({
    where: { id: ticketId },
    data: {
      status: TicketStatus.PAID,
    },
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
  getTicketById,
  updateTicket,
};

export default ticketRepository;
