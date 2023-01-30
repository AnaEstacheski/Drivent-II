import { Router } from "express";
import { authenticateToken } from "@/middlewares";
import { getAllTicketsTypes, getAllTickets} from "@/controllers";

const ticketsRouter = Router();

ticketsRouter
  .all("/*", authenticateToken)
  .get("/types", getAllTicketsTypes)
  .get("", getAllTickets);

export { ticketsRouter };
