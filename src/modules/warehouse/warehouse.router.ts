import { createWarehouseValidators } from './service/warehouse.validator'
import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'
import {
    CreateWarehouse,
    GetWarehouse,
    GetWarehouses,
    UpdateWarehouse,
    DeleteWarehouse,
} from './warehouse.controller'

export const warehouseRouter = Router()

warehouseRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createWarehouseValidators,
        validator,
        CreateWarehouse
    )
    .get(checkLogs, GetWarehouses)

warehouseRouter
    .route('/:id')
    .get(checkLogs, GetWarehouse)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createWarehouseValidators,
        validator,
        UpdateWarehouse
    )
    .delete(checkLogs, isLoggedIn, isAdmin, DeleteWarehouse)
