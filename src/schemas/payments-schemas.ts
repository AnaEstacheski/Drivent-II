import Joi from 'joi';

const cardSchema = Joi.object({
  issuer: Joi.string(),
  number: Joi.string().length(16),
  name: Joi.string(),
  expirationDate: Joi.string(),
  cvv: Joi.string().length(3),
});

export const paymentSchema = Joi.object({
  ticketId: Joi.number().integer().min(0),
  cardData: cardSchema,
});
