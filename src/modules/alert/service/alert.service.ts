import { AlertD, AlertModel } from '@models/alert'
import alertLogs, { alertLogger } from './alert.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class AlertServices {
    static executeCreateAlert = async (
        alertData: Partial<AlertI>
    ): Promise<ResponseT> => {
        try {
            const alert = new AlertModel(alertData)
            await alert.save()

            const msg = formatString(alertLogs.ALERT_CREATED.message, {
                id: alert._id,
            })
            alertLogger.info(msg)

            return new SuccessResponseC(
                alertLogs.ALERT_CREATED.type,
                alert.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(alertLogs.ALERT_CREATION_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            alertLogger.error(msg, err as Error)
            return new ErrorResponseC(
                alertLogs.ALERT_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetAlerts = async (): Promise<ResponseT> => {
        try {
            const alerts = await AlertModel.find()
            return new SuccessResponseC(
                alertLogs.ALERTS_FOUND.type,
                alerts,
                alertLogs.ALERTS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(alertLogs.ALERTS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            alertLogger.error(msg, err as Error)
            return new ErrorResponseC(
                alertLogs.ALERTS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetAlert = async (id: string): Promise<ResponseT> => {
        try {
            const alert = await AlertModel.findById(id)
            if (!alert) {
                const msg = formatString(alertLogs.ALERT_NOT_FOUND.message, {
                    id,
                })
                alertLogger.error(msg)
                return new ErrorResponseC(
                    alertLogs.ALERT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            return new SuccessResponseC(
                alertLogs.ALERT_FOUND.type,
                alert,
                alertLogs.ALERT_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(alertLogs.ALERTS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            alertLogger.error(msg, err as Error)
            return new ErrorResponseC(
                alertLogs.ALERTS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateAlert = async (
        id: string,
        alertData: Partial<AlertI>
    ): Promise<ResponseT> => {
        try {
            const alert = await AlertModel.findByIdAndUpdate(id, alertData, {
                new: true,
            })
            if (!alert) {
                const msg = formatString(alertLogs.ALERT_UPDATE_ERROR.message, {
                    id,
                })
                alertLogger.error(msg)
                return new ErrorResponseC(
                    alertLogs.ALERT_UPDATE_ERROR.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            const msg = formatString(alertLogs.ALERT_UPDATED.message, {
                id,
            })
            alertLogger.info(msg)
            return new SuccessResponseC(
                alertLogs.ALERT_UPDATED.type,
                alert,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(alertLogs.ALERT_UPDATE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            alertLogger.error(msg, err as Error)
            return new ErrorResponseC(
                alertLogs.ALERT_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteAlert = async (id: string): Promise<ResponseT> => {
        try {
            const alert = await AlertModel.findByIdAndDelete(id)
            if (!alert) {
                const msg = formatString(alertLogs.ALERT_NOT_FOUND.message, {
                    id,
                })
                alertLogger.error(msg)
                return new ErrorResponseC(
                    alertLogs.ALERT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            const msg = formatString(alertLogs.ALERT_DELETED.message, {
                id,
            })
            alertLogger.info(msg)
            return new SuccessResponseC(
                alertLogs.ALERT_DELETED.type,
                alert,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(alertLogs.ALERT_DELETE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            alertLogger.error(msg, err as Error)
            return new ErrorResponseC(
                alertLogs.ALERT_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetAlertsByType = async (
        type: string
    ): Promise<ResponseT> => {
        try {
            const alerts = await AlertModel.find({ type })
            const msg = formatString(alertLogs.ALERTS_BY_TYPE_FOUND.message, {
                type,
            })
            alertLogger.info(msg)
            return new SuccessResponseC(
                alertLogs.ALERTS_BY_TYPE_FOUND.type,
                alerts,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(alertLogs.ALERTS_BY_TYPE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            alertLogger.error(msg, err as Error)
            return new ErrorResponseC(
                alertLogs.ALERTS_BY_TYPE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetAlertsBySeverity = async (
        severity: string
    ): Promise<ResponseT> => {
        try {
            const alerts = await AlertModel.find({ severity })
            const msg = formatString(
                alertLogs.ALERTS_BY_SEVERITY_FOUND.message,
                {
                    level: severity,
                }
            )
            alertLogger.info(msg)
            return new SuccessResponseC(
                alertLogs.ALERTS_BY_SEVERITY_FOUND.type,
                alerts,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                alertLogs.ALERTS_BY_SEVERITY_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            alertLogger.error(msg, err as Error)
            return new ErrorResponseC(
                alertLogs.ALERTS_BY_SEVERITY_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetAlertsByPriority = async (
        priority: string
    ): Promise<ResponseT> => {
        try {
            const alerts = await AlertModel.find({ priority })
            const msg = formatString(
                alertLogs.ALERTS_BY_PRIORITY_FOUND.message,
                {
                    priority,
                }
            )
            alertLogger.info(msg)
            return new SuccessResponseC(
                alertLogs.ALERTS_BY_PRIORITY_FOUND.type,
                alerts,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                alertLogs.ALERTS_BY_PRIORITY_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            alertLogger.error(msg, err as Error)
            return new ErrorResponseC(
                alertLogs.ALERTS_BY_PRIORITY_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetAlertsByStatus = async (
        status: string
    ): Promise<ResponseT> => {
        try {
            const alerts = await AlertModel.find({ status })
            const msg = formatString(alertLogs.ALERTS_BY_STATUS_FOUND.message, {
                status,
            })
            alertLogger.info(msg)
            return new SuccessResponseC(
                alertLogs.ALERTS_BY_STATUS_FOUND.type,
                alerts,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(alertLogs.ALERTS_BY_STATUS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            alertLogger.error(msg, err as Error)
            return new ErrorResponseC(
                alertLogs.ALERTS_BY_STATUS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
