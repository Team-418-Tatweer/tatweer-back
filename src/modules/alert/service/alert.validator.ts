import { body } from 'express-validator'

export const createAlertValidators = [
    body('title').isString().withMessage('Title must be a string'),
    body('description').isString().withMessage('Description must be a string'),
    body('type')
        .isIn(['info', 'warning', 'error'])
        .withMessage('Type must be either "info", "warning" or "error"'),
    body('severity')
        .isIn(['low', 'medium', 'high'])
        .withMessage('Severity must be either "low", "medium" or "high'),
    body('priority')
        .isIn(['low', 'medium', 'high'])
        .withMessage('Priority must be either "low", "medium" or "high'),
    body('status')
        .isIn(['open', 'closed'])
        .withMessage('Status must be either "open" or "closed'),
]

export const updateAlertValidators = [
    body('title').optional().isString().withMessage('Title must be a string'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),
    body('type')
        .optional()
        .isIn(['info', 'warning', 'error'])
        .withMessage('Type must be either "info", "warning" or "error"'),
    body('severity')
        .optional()
        .isIn(['low', 'medium', 'high'])
        .withMessage('Severity must be either "low", "medium" or "high'),
    body('priority')
        .optional()
        .isIn(['low', 'medium', 'high'])
        .withMessage('Priority must be either "low", "medium" or "high'),
    body('status')
        .optional()
        .isIn(['open', 'closed'])
        .withMessage('Status must be either "open" or "closed'),
]
