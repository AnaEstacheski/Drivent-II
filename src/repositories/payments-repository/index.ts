import { prisma } from '@/config';

async function findPaymentByTicket(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      ticketId,
    },
  });
}

const paymentRepository = {
  findPaymentByTicket,
};

export default paymentRepository;
