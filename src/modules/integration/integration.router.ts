import { Router } from 'express'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'
import { createIntegrationValidators } from './service/integration.validator'
import { validator } from '@middleware/validator'

import {
    CreateIntegration,
    GetIntegration,
    GetIntegrations,
    UpdateIntegration,
    DeleteIntegration,
} from './integration.controller'

export const integrationRouter = Router()

integrationRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createIntegrationValidators,
        validator,
        CreateIntegration
    )
    .get(checkLogs, GetIntegrations)

integrationRouter
    .route('/:id')
    .get(checkLogs, GetIntegration)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createIntegrationValidators,
        validator,
        UpdateIntegration
    )
    .delete(checkLogs, isLoggedIn, isAdmin, DeleteIntegration)
