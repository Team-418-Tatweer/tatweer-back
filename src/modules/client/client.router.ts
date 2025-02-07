import { createClientValidators } from './service/client.validator'
import {
    createClient,
    getClient,
    getClients,
    updateClient,
    deleteClient,
} from './client.controller'
import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'

export const clientRouter = Router()

clientRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createClientValidators,
        validator,
        createClient
    )
    .get(checkLogs, getClients)

clientRouter
    .route('/:id')
    .get(checkLogs, getClient)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createClientValidators,
        validator,
        updateClient
    )
    .delete(checkLogs, isLoggedIn, isAdmin, deleteClient)
