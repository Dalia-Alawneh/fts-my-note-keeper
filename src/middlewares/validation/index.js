import { validationResult } from "express-validator";

const validateSchemas = (schemas) => (req, res, next) => {
  for (const { schema, target } of schemas) {
    const { error } = schema.validate(req[target]);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  }
  next();
};

export const requestExpressValidator = (req, res, next) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(400).json({
      valid: false,
      errors: result.array(),
    });
  }

  next();
};

export default validateSchemas;