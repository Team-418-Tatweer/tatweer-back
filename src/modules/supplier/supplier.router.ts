import { createSupplierValidators } from './service/supplier.validator'
import {
    CreateSupplier,
    GetSupplier,
    GetSuppliers,
    GetSuppliersByReliability,
    UpdateSupplier,
    DeleteSupplier,
} from './supplier.controller'
import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'

export const supplierRouter = Router()

supplierRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createSupplierValidators,
        validator,
        CreateSupplier
    )
    .get(checkLogs, GetSuppliers)

supplierRouter
    .route('/reliability/:reliabilityScore')
    .get(checkLogs, GetSuppliersByReliability)

supplierRouter
    .route('/:id')
    .get(checkLogs, GetSupplier)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createSupplierValidators,
        validator,
        UpdateSupplier
    )
    .delete(checkLogs, isLoggedIn, isAdmin, DeleteSupplier)
