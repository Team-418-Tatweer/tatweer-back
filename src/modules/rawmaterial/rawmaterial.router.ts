import { createRawMaterialValidator } from './service/rawmaterial.validator'
import {
    CreateRawMaterial,
    GetRawMaterial,
    GetRawMaterialBySupplier,
    GetRawMaterials,
    UpdateRawMaterial,
    DeleteRawMaterial,
} from './rawmaterial.controller'
import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'

export const rawMaterialRouter = Router()

rawMaterialRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createRawMaterialValidator,
        validator,
        CreateRawMaterial
    )
    .get(checkLogs, GetRawMaterials)

rawMaterialRouter
    .route('/supplier/:id')
    .get(checkLogs, GetRawMaterialBySupplier)

rawMaterialRouter
    .route('/:id')
    .get(checkLogs, GetRawMaterial)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createRawMaterialValidator,
        validator,
        UpdateRawMaterial
    )
    .delete(checkLogs, isLoggedIn, isAdmin, DeleteRawMaterial)
