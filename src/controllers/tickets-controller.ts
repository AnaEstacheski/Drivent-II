import { AuthenticatedRequest } from "@/middlewares";
import ticketService from "@/services/tickets-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getAllTicketsTypes(req: AuthenticatedRequest, res: Response) {

  try {
    const ticketTypes = await ticketService.getTicketTypes();

    return res.status(httpStatus.OK).send(ticketTypes);
  } catch (error) {
    return res.sendStatus(httpStatus.NO_CONTENT);
  }
}

export async function getAllTickets(req: AuthenticatedRequest, res: Response) {
  const { userId } = req;

  try {
    const ticketTypes = await ticketService.getTicketByUserId(userId);

    return res.status(httpStatus.OK).send(ticketTypes);
  } catch (error) {
    return res.sendStatus(httpStatus.NOT_FOUND);
  }
}