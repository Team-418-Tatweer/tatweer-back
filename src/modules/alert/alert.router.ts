import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'
import {
    createAlertValidators,
    updateAlertValidators,
} from './service/alert.validator'
import {
    CreateAlert,
    GetAlerts,
    GetAlert,
    GetAlertsByPriority,
    GetAlertsBySeverity,
    GetAlertsByStatus,
    GetAlertsByType,
    UpdateAlert,
    DeleteAlert,
} from './alert.controller'

export const alertRouter = Router()

alertRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createAlertValidators,
        validator,
        CreateAlert
    )
    .get(checkLogs, GetAlerts)

alertRouter.route('/priority/:priority').get(checkLogs, GetAlertsByPriority)
alertRouter.route('/severity/:severity').get(checkLogs, GetAlertsBySeverity)
alertRouter.route('/status/:status').get(checkLogs, GetAlertsByStatus)
alertRouter.route('/type/:type').get(checkLogs, GetAlertsByType)

alertRouter
    .route('/:id')
    .get(checkLogs, GetAlert)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        updateAlertValidators,
        validator,
        UpdateAlert
    )
    .delete(checkLogs, isLoggedIn, isAdmin, DeleteAlert)
