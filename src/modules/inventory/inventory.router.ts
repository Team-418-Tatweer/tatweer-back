import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'
import { createInventoryValidators } from './service/inventory.validator'
import {
    CreateInventory,
    GetInventories,
    GetInventory,
    UpdateInventory,
    DeleteInventory,
    GetInventoriesByItemID,
} from './inventory.controller'

export const inventoryRouter = Router()

inventoryRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createInventoryValidators,
        validator,
        CreateInventory
    )
    .get(checkLogs, GetInventories)

inventoryRouter.route('/item/:itemID').get(checkLogs, GetInventoriesByItemID)

inventoryRouter
    .route('/:id')
    .get(checkLogs, GetInventory)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createInventoryValidators,
        validator,
        UpdateInventory
    )
    .delete(checkLogs, isLoggedIn, isAdmin, DeleteInventory)
