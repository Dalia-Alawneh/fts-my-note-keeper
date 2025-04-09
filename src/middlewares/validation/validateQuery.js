import { query } from "express-validator";

export const validateSearchQuery = [
  query('limit')
    .optional()
    .isInt({ min: 1 }).withMessage('limit must be a positive integer'),

  query('page')
    .optional()
    .isInt({ min: 1 }).withMessage('page must be a positive integer'),
];

export const validateNotePagination = [
  query('limit')
    .optional()
    .isInt({ min: 1 }).withMessage('limit must be a positive integer'),

  query('page')
    .optional()
    .isInt({ min: 1 }).withMessage('page must be a positive integer'),
];
