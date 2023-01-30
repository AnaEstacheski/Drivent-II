import { notFoundError } from "@/errors";
import ticketRepository from "@/repositories/ticket-repository";

async function getTicketTypes() {
    const getTicket = await ticketRepository.findTicketsByTypes();
    if (!getTicket) {
        throw notFoundError();
    }

    return getTicket;
}

const ticketService = {
    getTicketTypes
};

export default ticketService;
