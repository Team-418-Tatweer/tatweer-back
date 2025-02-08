import { Router } from 'express'
import { validator } from '@middleware/validator'
import { checkLogs, isLoggedIn, isAdmin } from '@middleware/auth'
import {
    createForecastValidators,
    updateForecastValidators,
} from './service/forecast.validator'
import {
    CreateForecast,
    GetForecast,
    GetForecasts,
    GetForecastsByStatus,
    GetForecastsByTarget,
    GetForecastsByType,
    UpdateForecast,
    DeleteForecast,
} from './forecast.controller'

export const forecastRouter = Router()

forecastRouter
    .route('/')
    .post(
        checkLogs,
        isLoggedIn,
        isAdmin,
        createForecastValidators,
        validator,
        CreateForecast
    )
    .get(checkLogs, GetForecasts)

forecastRouter.route('/status/:status').get(checkLogs, GetForecastsByStatus)
forecastRouter.route('/type/:type').get(checkLogs, GetForecastsByType)
forecastRouter
    .route('/target/:targetEntity/:targetID')
    .get(checkLogs, GetForecastsByTarget)

forecastRouter
    .route('/:id')
    .get(checkLogs, GetForecast)
    .put(
        checkLogs,
        isLoggedIn,
        isAdmin,
        updateForecastValidators,
        validator,
        UpdateForecast
    )
    .delete(checkLogs, isLoggedIn, isAdmin, DeleteForecast)
