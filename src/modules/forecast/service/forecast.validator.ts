import { body } from 'express-validator'

export const createForecastValidators = [
    body('type').isString().notEmpty(),
    body('targetEntity').isString().notEmpty(),
    body('targetID').isString().notEmpty(),
    body('forecastedValue').isNumeric().notEmpty(),
    body('confidenceLevel').isNumeric().notEmpty(),
    body('timePeriod').isString().notEmpty(),
    body('dateGenerated').isString().notEmpty(),
    body('status').isString().notEmpty(),
]

export const updateForecastValidators = [
    body('type').isString().optional(),
    body('targetEntity').isString().optional(),
    body('targetID').isString().optional(),
    body('forecastedValue').isNumeric().optional(),
    body('confidenceLevel').isNumeric().optional(),
    body('timePeriod').isString().optional(),
    body('dateGenerated').isString().optional(),
    body('status').isString().optional(),
]
