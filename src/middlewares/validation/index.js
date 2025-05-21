import { validationResult } from "express-validator";

const validateSchemas = (schemas) => (req, res, next) => {
  for (const { schema, target } of schemas) {
    const { error } = schema.validate(req[target], { abortEarly: false });
    if (error) {
      const fieldErrors = {};
      error.details.forEach(detail => {
        const field = detail.path.join('.');
        fieldErrors[field] = detail.message;
      });
      return res.status(400).json({ fieldErrors });
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