import { createProductMaterialValidator } from './service/pmaterial.validator'
import {
    CreatePmaterial,
    GetPmaterial,
    GetPmaterialByMaterial,
    GetPmaterialByProduct,
    GetPmaterials,
    UpdatePmaterial,
    DeletePmaterial,
} from './pmaterial.controller'
import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'

export const pmaterialRouter = Router()

pmaterialRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createProductMaterialValidator,
        validator,
        CreatePmaterial
    )
    .get(checkLogs, GetPmaterials)

pmaterialRouter.route('/material/:id').get(checkLogs, GetPmaterialByMaterial)
pmaterialRouter.route('/product/:id').get(checkLogs, GetPmaterialByProduct)

pmaterialRouter
    .route('/:id')
    .get(checkLogs, GetPmaterial)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createProductMaterialValidator,
        validator,
        UpdatePmaterial
    )
    .delete(checkLogs, isLoggedIn, isAdmin, DeletePmaterial)
