import { Payment } from '@prisma/client';
import { prisma } from '@/config';

async function findPaymentByTicket(ticketId: number) {
  return prisma.payment.findFirst({
    where: {
      ticketId,
    },
  });
}

async function createPayment(ticketId: number, paymentData: PaymentParams) {
  return prisma.payment.create({
    data: {
      ticketId,
      ...paymentData,
    },
  });
}

export type PaymentParams = Omit<Payment, 'id' | 'createdAt' | 'updatedAt'>;

const paymentRepository = {
  findPaymentByTicket,
  createPayment,
};

export default paymentRepository;
