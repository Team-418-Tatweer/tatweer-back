import { body } from 'express-validator'

export const createInventoryMovementValidators = [
    body('supplier').isMongoId().optional().withMessage('Invalid supplier id'),
    body('orderDate').isDate().optional().withMessage('Invalid order date'),
    body('deliveryDate')
        .isDate()
        .optional()
        .withMessage('Invalid delivery date'),
    body('quantity').isNumeric().notEmpty().withMessage('Invalid quantity'),
    body('costPerUnit')
        .isNumeric()
        .notEmpty()
        .withMessage('Invalid cost per unit'),
    body('status').isString().optional().withMessage('Invalid status'),
    body('Srcinventory')
        .isMongoId()
        .notEmpty()
        .withMessage('Invalid source inventory id'),
    body('Dstinventory')
        .isMongoId()
        .optional()
        .withMessage('Invalid destination inventory id'),
]
