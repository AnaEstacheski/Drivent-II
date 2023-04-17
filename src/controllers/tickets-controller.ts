import { Response } from 'express';
import httpStatus from 'http-status';
import { AuthenticatedRequest } from '@/middlewares';
import ticketService from '@/services/tickets-service';

export async function getTicketTypes(req: AuthenticatedRequest, res: Response) {
  try {
    const ticketTypes = await ticketService.getTicketTypes();
    res.status(httpStatus.OK).send(ticketTypes);
    return;
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function getTicketsbyUser(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  if (!userId) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }

  try {
    const tickets = await ticketService.getTicketsbyUser(userId);
    res.status(httpStatus.OK).send(tickets[0]);
    return;
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}

export async function postTicket(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;
  const { ticketTypeId } = req.body;

  if (!ticketTypeId) {
    return res.sendStatus(httpStatus.BAD_REQUEST);
  }

  try {
    const newTicket = await ticketService.postTicket({ userId, ticketTypeId });

    res.status(httpStatus.CREATED).send(newTicket);
    return;
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}
