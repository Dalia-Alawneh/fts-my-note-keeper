const errorHandler = (err, req, res, next) => {
  console.error("Server Error:", err);

  let statusCode = err.statusCode || 500;
  let message = err.message || "Internal Server Error";

  if (err.name === "ValidationError") {
    statusCode = 400;
    message = Object.values(err.errors).map((error) => error.message).join(", ");
  }

  res.status(statusCode).json({
    message,
    error: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

export default errorHandler;
