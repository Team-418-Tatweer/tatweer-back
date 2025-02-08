import Logger from '@utils/Logger'

export type IForecastLogs =
    | 'FORECAST_CREATED'
    | 'FORECAST_CREATION_ERROR'
    | 'FORECASTS_FOUND'
    | 'FORECASTS_ERROR'
    | 'FORECAST_FOUND'
    | 'FORECAST_NOT_FOUND'
    | 'FORECAST_UPDATED'
    | 'FORECAST_UPDATE_ERROR'
    | 'FORECAST_DELETED'
    | 'FORECAST_DELETE_ERROR'
    | 'UNAUTHORIZED_ACCESS'
    | 'INVALID_INPUT_ERROR'
    | 'FORECASTS_BY_TYPE_FOUND'
    | 'FORECASTS_BY_TYPE_ERROR'
    | 'FORECASTS_BY_TARGET_FOUND'
    | 'FORECASTS_BY_TARGET_ERROR'
    | 'FORECASTS_BY_STATUS_FOUND'
    | 'FORECASTS_BY_STATUS_ERROR'

export const forecastLogger = new Logger('Forecast')

const forecastLogs = {
    FORECAST_CREATED: {
        type: 'FORECAST_CREATED',
        message: 'Successfully created forecast {id}',
    },
    FORECAST_CREATION_ERROR: {
        type: 'FORECAST_CREATION_ERROR',
        message: 'Error creating forecast: {error}',
    },
    FORECASTS_FOUND: {
        type: 'FORECASTS_FOUND',
        message: 'Successfully retrieved all forecasts',
    },
    FORECASTS_ERROR: {
        type: 'FORECASTS_ERROR',
        message: 'Error retrieving forecasts: {error}',
    },
    FORECAST_FOUND: {
        type: 'FORECAST_FOUND',
        message: 'Successfully retrieved forecast {id}',
    },
    FORECAST_NOT_FOUND: {
        type: 'FORECAST_NOT_FOUND',
        message: 'Forecast not found with ID {id}',
    },
    FORECAST_UPDATED: {
        type: 'FORECAST_UPDATED',
        message: 'Successfully updated forecast {id}',
    },
    FORECAST_UPDATE_ERROR: {
        type: 'FORECAST_UPDATE_ERROR',
        message: 'Error updating forecast: {error}',
    },
    FORECAST_DELETED: {
        type: 'FORECAST_DELETED',
        message: 'Successfully deleted forecast {id}',
    },
    FORECAST_DELETE_ERROR: {
        type: 'FORECAST_DELETE_ERROR',
        message: 'Error deleting forecast: {error}',
    },
    UNAUTHORIZED_ACCESS: {
        type: 'UNAUTHORIZED_ACCESS',
        message: 'Unauthorized access to forecast operation',
    },
    INVALID_INPUT_ERROR: {
        type: 'INVALID_INPUT_ERROR',
        message: 'Invalid input provided: {error}',
    },
    FORECASTS_BY_TYPE_FOUND: {
        type: 'FORECASTS_BY_TYPE_FOUND',
        message: 'Successfully retrieved forecasts of type {type}',
    },
    FORECASTS_BY_TYPE_ERROR: {
        type: 'FORECASTS_BY_TYPE_ERROR',
        message: 'Error retrieving forecasts by type: {error}',
    },
    FORECASTS_BY_TARGET_FOUND: {
        type: 'FORECASTS_BY_TARGET_FOUND',
        message:
            'Successfully retrieved forecasts for {targetEntity} with ID {targetId}',
    },
    FORECASTS_BY_TARGET_ERROR: {
        type: 'FORECASTS_BY_TARGET_ERROR',
        message: 'Error retrieving forecasts by target: {error}',
    },
    FORECASTS_BY_STATUS_FOUND: {
        type: 'FORECASTS_BY_STATUS_FOUND',
        message: 'Successfully retrieved forecasts with status: {status}',
    },
    FORECASTS_BY_STATUS_ERROR: {
        type: 'FORECASTS_BY_STATUS_ERROR',
        message: 'Error retrieving forecasts by status: {error}',
    },
}

export default forecastLogs
