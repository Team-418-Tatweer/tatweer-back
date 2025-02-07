import { createRegionValidators } from './service/region.validator'
import {
    CreateRegion,
    GetRegions,
    GetRegion,
    UpdateRegion,
    DeleteRegion,
} from './region.controller'
import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'

export const regionRouter = Router()

regionRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createRegionValidators,
        validator,
        CreateRegion
    )
    .get(checkLogs, GetRegions)

regionRouter
    .route('/:id')
    .get(checkLogs, GetRegion)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createRegionValidators,
        validator,
        UpdateRegion
    )
    .delete(checkLogs, isLoggedIn, isAdmin, DeleteRegion)
