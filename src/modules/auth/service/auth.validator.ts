import { body } from 'express-validator'

export const loginValidators = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').notEmpty().withMessage('Password is required'),
]

export const registerValidators = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long'),
    body('name')
        .isLength({ min: 3 })
        .withMessage('Name must be at least 3 characters long'),
]

export const updateUserValidators = [
    body('email').optional().isEmail().withMessage('Invalid email'),
    body('name')
        .optional()
        .isLength({ min: 3 })
        .withMessage('First name must be at least 3 characters long'),
]

export const updateRoleValidator = [
    body('role')
        .isIn(['admin', 'user', 'hr', 'manager'])
        .withMessage('Invalid role'),
]
