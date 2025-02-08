import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'
import { createInventoryMovementValidators } from './service/imovement.validator'
import {
    CreateMovement,
    GetMovement,
    GetMovements,
    GetMovementsByInventory,
    GetMovementsByStatus,
    UpdateMovement,
    DeleteMovement,
} from './imovement.controller'

export const inventoryMovementRouter = Router()

inventoryMovementRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createInventoryMovementValidators,
        validator,
        CreateMovement
    )
    .get(checkLogs, GetMovements)
inventoryMovementRouter
    .route('/status/:status')
    .get(checkLogs, GetMovementsByStatus)
inventoryMovementRouter
    .route('/inventory/:inventoryID')
    .get(checkLogs, GetMovementsByInventory)
inventoryMovementRouter
    .route('/:id')
    .get(checkLogs, GetMovement)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createInventoryMovementValidators,
        validator,
        UpdateMovement
    )
    .delete(checkLogs, isLoggedIn, isAdmin, DeleteMovement)
