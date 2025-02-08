import { body } from 'express-validator'

export const createActionValidator = [
    body('title').isString().notEmpty(),
    body('alert').isMongoId().notEmpty(),
    body('type').isString().notEmpty(),
    body('description').isString().notEmpty(),
    body('responsibleTeam').isString().notEmpty(),
    body('status').isString().notEmpty(),
]

export const updateActionValidator = [
    body('title').isString().notEmpty(),
    body('alert').isMongoId().notEmpty(),
    body('type').isString().notEmpty(),
    body('description').isString().notEmpty(),
    body('responsibleTeam').isString().notEmpty(),
    body('status').isString().notEmpty(),
]
