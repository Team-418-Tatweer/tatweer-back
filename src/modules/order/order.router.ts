import {
    createOrderValidator,
    updateOrderValidator,
} from './service/order.validator'
import {
    createOrder,
    getOrders,
    getOrder,
    getOrdersByClient,
    getOrdersByRegion,
    getOrdersByStatus,
    updateOrder,
    deleteOrder,
} from './order.controller'
import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'

export const orderRouter = Router()

orderRouter
    .route('/')
    .post(checkLogs, isLoggedIn, createOrderValidator, validator, createOrder)
    .get(checkLogs, isLoggedIn, getOrders)

orderRouter.get('/client/:clientId', checkLogs, isLoggedIn, getOrdersByClient)
orderRouter.get('/region/:regionId', checkLogs, isLoggedIn, getOrdersByRegion)
orderRouter.get('/status/:status', checkLogs, isLoggedIn, getOrdersByStatus)

orderRouter
    .route('/:id')
    .get(checkLogs, isLoggedIn, getOrder)
    .put(checkLogs, isLoggedIn, updateOrderValidator, validator, updateOrder)
    .delete(checkLogs, isLoggedIn, isAdmin, deleteOrder)
