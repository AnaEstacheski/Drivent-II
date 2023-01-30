import { prisma } from "@/config";

async function findTicketsByTypes() {
  return prisma.ticketType.findMany();
}

const ticketRepository = {
    findTicketsByTypes
};

export default ticketRepository;
