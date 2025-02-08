import { ActionD, ActionModel } from '@models/action'
import actionLogs, { actionLogger } from './action.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class ActionServices {
    static executeCreateAction = async (
        actionData: Partial<ActionD>
    ): Promise<ResponseT> => {
        try {
            const action = new ActionModel(actionData)
            await action.save()

            const msg = formatString(actionLogs.ACTION_CREATED.message, {
                id: action._id,
            })
            actionLogger.info(msg)

            return new SuccessResponseC(
                actionLogs.ACTION_CREATED.type,
                action.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(actionLogs.ACTION_CREATION_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            actionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                actionLogs.ACTION_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetActions = async (): Promise<ResponseT> => {
        try {
            const actions = await ActionModel.find()
            return new SuccessResponseC(
                actionLogs.ACTIONS_FOUND.type,
                actions,
                actionLogs.ACTIONS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(actionLogs.ACTIONS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            actionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                actionLogs.ACTIONS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetAction = async (id: string): Promise<ResponseT> => {
        try {
            const action = await ActionModel.findById(id)
            if (!action) {
                const msg = formatString(actionLogs.ACTION_NOT_FOUND.message, {
                    id,
                })
                actionLogger.error(msg)
                return new ErrorResponseC(
                    actionLogs.ACTION_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            return new SuccessResponseC(
                actionLogs.ACTION_FOUND.type,
                action,
                actionLogs.ACTION_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(actionLogs.ACTIONS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            actionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                actionLogs.ACTIONS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateAction = async (
        id: string,
        actionData: Partial<ActionD>
    ): Promise<ResponseT> => {
        try {
            const action = await ActionModel.findByIdAndUpdate(id, actionData, {
                new: true,
            })
            if (!action) {
                const msg = formatString(
                    actionLogs.ACTION_UPDATE_ERROR.message,
                    {
                        id,
                    }
                )
                actionLogger.error(msg)
                return new ErrorResponseC(
                    actionLogs.ACTION_UPDATE_ERROR.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            const msg = formatString(actionLogs.ACTION_UPDATED.message, {
                id,
            })
            actionLogger.info(msg)
            return new SuccessResponseC(
                actionLogs.ACTION_UPDATED.type,
                action,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(actionLogs.ACTION_UPDATE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            actionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                actionLogs.ACTION_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteAction = async (id: string): Promise<ResponseT> => {
        try {
            const action = await ActionModel.findByIdAndDelete(id)
            if (!action) {
                const msg = formatString(actionLogs.ACTION_NOT_FOUND.message, {
                    id,
                })
                actionLogger.error(msg)
                return new ErrorResponseC(
                    actionLogs.ACTION_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            const msg = formatString(actionLogs.ACTION_DELETED.message, {
                id,
            })
            actionLogger.info(msg)
            return new SuccessResponseC(
                actionLogs.ACTION_DELETED.type,
                action,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(actionLogs.ACTION_DELETE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            actionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                actionLogs.ACTION_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetActionsByAlert = async (
        alertId: string
    ): Promise<ResponseT> => {
        try {
            const actions = await ActionModel.find({ alert: alertId })
            return new SuccessResponseC(
                actionLogs.ACTIONS_BY_ALERT_FOUND.type,
                actions,
                actionLogs.ACTIONS_BY_ALERT_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                actionLogs.ACTIONS_BY_ALERT_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            actionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                actionLogs.ACTIONS_BY_ALERT_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetActionsByStatus = async (
        status: string
    ): Promise<ResponseT> => {
        try {
            const actions = await ActionModel.find({ status })
            return new SuccessResponseC(
                actionLogs.ACTIONS_BY_STATUS_FOUND.type,
                actions,
                actionLogs.ACTIONS_BY_STATUS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                actionLogs.ACTIONS_BY_STATUS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            actionLogger.error(msg, err as Error)
            return new ErrorResponseC(
                actionLogs.ACTIONS_BY_STATUS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
