import * as Joi from "joi";

export const RegisterUserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
});

export const LoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

export const CreateImage = Joi.object({
  image: Joi.string().required(),
  userId: Joi.number().required(),
});
