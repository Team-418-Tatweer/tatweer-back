import { ForecastD, ForecastModel } from '@models/forecast'
import forecastLogs, { forecastLogger } from './forecast.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class ForecastServices {
    static executeCreateForecast = async (
        forecastData: Partial<ForecastD>
    ): Promise<ResponseT> => {
        try {
            const forecast = new ForecastModel(forecastData)
            await forecast.save()

            const msg = formatString(forecastLogs.FORECAST_CREATED.message, {
                id: forecast._id,
            })
            forecastLogger.info(msg)

            return new SuccessResponseC(
                forecastLogs.FORECAST_CREATED.type,
                forecast.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(
                forecastLogs.FORECAST_CREATION_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            forecastLogger.error(msg, err as Error)
            return new ErrorResponseC(
                forecastLogs.FORECAST_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetForecasts = async (): Promise<ResponseT> => {
        try {
            const forecasts = await ForecastModel.find()
            return new SuccessResponseC(
                forecastLogs.FORECASTS_FOUND.type,
                forecasts,
                forecastLogs.FORECASTS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(forecastLogs.FORECASTS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            forecastLogger.error(msg, err as Error)
            return new ErrorResponseC(
                forecastLogs.FORECASTS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetForecast = async (id: string): Promise<ResponseT> => {
        try {
            const forecast = await ForecastModel.findById(id)
            if (!forecast) {
                const msg = formatString(
                    forecastLogs.FORECAST_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                forecastLogger.error(msg)
                return new ErrorResponseC(
                    forecastLogs.FORECAST_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            return new SuccessResponseC(
                forecastLogs.FORECAST_FOUND.type,
                forecast,
                forecastLogs.FORECAST_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(forecastLogs.FORECASTS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            forecastLogger.error(msg, err as Error)
            return new ErrorResponseC(
                forecastLogs.FORECASTS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateForecast = async (
        id: string,
        forecastData: Partial<ForecastD>
    ): Promise<ResponseT> => {
        try {
            const forecast = await ForecastModel.findByIdAndUpdate(
                id,
                forecastData,
                {
                    new: true,
                }
            )
            if (!forecast) {
                const msg = formatString(
                    forecastLogs.FORECAST_UPDATE_ERROR.message,
                    {
                        id,
                    }
                )
                forecastLogger.error(msg)
                return new ErrorResponseC(
                    forecastLogs.FORECAST_UPDATE_ERROR.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            const msg = formatString(forecastLogs.FORECAST_UPDATED.message, {
                id,
            })
            forecastLogger.info(msg)
            return new SuccessResponseC(
                forecastLogs.FORECAST_UPDATED.type,
                forecast,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                forecastLogs.FORECAST_UPDATE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            forecastLogger.error(msg, err as Error)
            return new ErrorResponseC(
                forecastLogs.FORECAST_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteForecast = async (id: string): Promise<ResponseT> => {
        try {
            const forecast = await ForecastModel.findByIdAndDelete(id)
            if (!forecast) {
                const msg = formatString(
                    forecastLogs.FORECAST_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                forecastLogger.error(msg)
                return new ErrorResponseC(
                    forecastLogs.FORECAST_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            const msg = formatString(forecastLogs.FORECAST_DELETED.message, {
                id,
            })
            forecastLogger.info(msg)
            return new SuccessResponseC(
                forecastLogs.FORECAST_DELETED.type,
                forecast,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                forecastLogs.FORECAST_DELETE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            forecastLogger.error(msg, err as Error)
            return new ErrorResponseC(
                forecastLogs.FORECAST_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetForecastsByType = async (
        type: string
    ): Promise<ResponseT> => {
        try {
            const forecasts = await ForecastModel.find({ type })
            const msg = formatString(
                forecastLogs.FORECASTS_BY_TYPE_FOUND.message,
                {
                    type,
                }
            )
            forecastLogger.info(msg)
            return new SuccessResponseC(
                forecastLogs.FORECASTS_BY_TYPE_FOUND.type,
                forecasts,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                forecastLogs.FORECASTS_BY_TYPE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            forecastLogger.error(msg, err as Error)
            return new ErrorResponseC(
                forecastLogs.FORECASTS_BY_TYPE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetForecastsByTarget = async (
        targetEntity: string,
        targetId: string
    ): Promise<ResponseT> => {
        try {
            const forecasts = await ForecastModel.find({
                targetEntity,
                targetId,
            })
            const msg = formatString(
                forecastLogs.FORECASTS_BY_TARGET_FOUND.message,
                {
                    targetEntity,
                    targetId,
                }
            )
            forecastLogger.info(msg)
            return new SuccessResponseC(
                forecastLogs.FORECASTS_BY_TARGET_FOUND.type,
                forecasts,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                forecastLogs.FORECASTS_BY_TARGET_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            forecastLogger.error(msg, err as Error)
            return new ErrorResponseC(
                forecastLogs.FORECASTS_BY_TARGET_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetForecastsByStatus = async (
        status: string
    ): Promise<ResponseT> => {
        try {
            const forecasts = await ForecastModel.find({ status })
            const msg = formatString(
                forecastLogs.FORECASTS_BY_STATUS_FOUND.message,
                {
                    status,
                }
            )
            forecastLogger.info(msg)
            return new SuccessResponseC(
                forecastLogs.FORECASTS_BY_STATUS_FOUND.type,
                forecasts,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                forecastLogs.FORECASTS_BY_STATUS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            forecastLogger.error(msg, err as Error)
            return new ErrorResponseC(
                forecastLogs.FORECASTS_BY_STATUS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
