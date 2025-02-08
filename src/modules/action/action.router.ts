import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'
import {
    createActionValidator,
    updateActionValidator,
} from './service/action.validator'
import {
    CreateAction,
    GetActions,
    GetAction,
    GetActionsByAlert,
    GetActionsByStatus,
    UpdateAction,
    DeleteAction,
} from './action.controller'

export const actionRouter = Router()

actionRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createActionValidator,
        validator,
        CreateAction
    )
    .get(checkLogs, GetActions)

actionRouter.route('/alert/:alert').get(checkLogs, GetActionsByAlert)
actionRouter.route('/status/:status').get(checkLogs, GetActionsByStatus)
actionRouter
    .route('/:id')
    .get(checkLogs, GetAction)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        updateActionValidator,
        validator,
        UpdateAction
    )
    .delete(checkLogs, isLoggedIn, isAdmin, DeleteAction)
