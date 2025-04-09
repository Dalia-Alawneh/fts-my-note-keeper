import { validationResult } from "express-validator";

export const checkValidation = (req) => {
  const result = validationResult(req);
  if (result.isEmpty()) {
    return { valid: true };
  }

  return {
    valid: false,
    errors: result.array(),
  };
};