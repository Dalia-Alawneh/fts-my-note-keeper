import Joi from "joi";
import { Types } from "mongoose";

export const validateObjectId = (value, helper) => {
  if (Types.ObjectId.isValid(value)) {
    return true
  } else {
    return helper.message("id is invalid");
  }
}

export const noteSchema = Joi.object().keys({
  title: Joi.string().min(3).max(50).required(),
  content: Joi.string().max(100),
  color: Joi.string().pattern(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).optional(),
});

export const noteIdSchema = Joi.object().keys({
  id: Joi.string().custom(validateObjectId).required(),
});

export const partialNoteSchema = Joi.object().keys({
  title: Joi.string().min(3).max(50),
  content: Joi.string().max(100),
});
