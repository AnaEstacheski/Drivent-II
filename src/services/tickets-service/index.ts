import { notFoundError } from "@/errors";
import ticketRepository from "@/repositories/ticket-repository";
import enrollmentRepository from "@/repositories/enrollment-repository";
import { enrollmentsRouter } from "@/routers";

async function getTicketTypes() {
    const getTicket = await ticketRepository.findTicketsByTypes();
    if (!getTicket) {
        throw notFoundError();
    }

    return getTicket;
}

async function getTicketByUserId(userId: number) {
    const getEnrollmentId = await enrollmentRepository.findWithAddressByUserId(userId);
    if(!getEnrollmentId) {
        throw notFoundError();
    }
    const ticket = await ticketRepository.findTicketsByEnrollmentId(getEnrollmentId.id);
    if(!ticket) {
        throw notFoundError();
    }
    return ticket;
}

const ticketService = {
    getTicketTypes,
    getTicketByUserId
};

export default ticketService;
