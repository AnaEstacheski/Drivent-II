import { prisma } from "@/config";

async function findTicketsByTypes() {
  return prisma.ticketType.findMany();
}

async function findTicketsByEnrollmentId(enrollmentId: number) {
    return prisma.ticket.findFirst({
        where: {
            enrollmentId,
        },
        include:{
            TicketType: true
        }
    });
}
const ticketRepository = {
    findTicketsByTypes,
    findTicketsByEnrollmentId
};

export default ticketRepository;
