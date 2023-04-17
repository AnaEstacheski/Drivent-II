import Joi from 'joi';

export const postTicketSchema = Joi.object({
  ticketTypeId: Joi.number().integer().min(1).required(),
});
