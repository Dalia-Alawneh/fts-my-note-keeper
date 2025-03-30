const validateMultipleSchemas = (schemas) => (req, res, next) => {
  for (const { schema, target } of schemas) {
    const { error } = schema.validate(req[target]);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
  }
  next();
};

export default validateMultipleSchemas;
