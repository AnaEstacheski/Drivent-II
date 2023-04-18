import Joi from 'joi';

const cardSchema = Joi.object({
  issuer: Joi.string().required(),
  number: Joi.string().required(),
  name: Joi.string().required(),
  expirationDate: Joi.string().required(),
  cvv: Joi.string().length(3).required(),
});

export const paymentSchema = Joi.object({
  ticketId: Joi.number().integer().min(0).required(),
  cardData: cardSchema.required(),
});
