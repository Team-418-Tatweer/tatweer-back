import { IntegrationD, IntegrationModel } from '@models/integrations'
import integrationLogs, { integrationLogger } from './integration.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class IntegrationService {
    static createIntegration = async (
        props: Partial<IntegrationD>
    ): Promise<ResponseT> => {
        try {
            let integration = await IntegrationModel.findOne({
                name: props.name,
            })
            if (integration) {
                integration.isActive = true
                await integration.save()
            } else {
                integration = new IntegrationModel({
                    isActive: true,
                    name: props.name,
                    settings: props.settings,
                })
                await integration.save()
            }

            const msg = formatString(
                integrationLogs.INTEGRATION_CREATED.message,
                {
                    name: integration.name,
                }
            )
            integrationLogger.info(msg)

            return new SuccessResponseC(
                integrationLogs.INTEGRATION_CREATED.type,
                integration.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(
                integrationLogs.INTEGRATION_CREATION_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            integrationLogger.error(msg, err as Error)
            return new ErrorResponseC(
                integrationLogs.INTEGRATION_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static getIntegrations = async (): Promise<ResponseT> => {
        try {
            const integrations = await IntegrationModel.find()
            return new SuccessResponseC(
                integrationLogs.INTEGRATIONS_FOUND.type,
                integrations,
                integrationLogs.INTEGRATIONS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                integrationLogs.INTEGRATIONS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            integrationLogger.error(msg, err as Error)
            return new ErrorResponseC(
                integrationLogs.INTEGRATIONS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static getIntegration = async (id: string): Promise<ResponseT> => {
        try {
            const integration = await IntegrationModel.findById(id)
            if (!integration) {
                const msg = formatString(
                    integrationLogs.INTEGRATION_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                integrationLogger.error(msg)
                return new ErrorResponseC(
                    integrationLogs.INTEGRATION_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(
                integrationLogs.INTEGRATION_FOUND.message,
                {
                    name: integration.name,
                }
            )
            integrationLogger.info(msg)
            return new SuccessResponseC(
                integrationLogs.INTEGRATION_FOUND.type,
                integration.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                integrationLogs.INTEGRATIONS_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            integrationLogger.error(msg, err as Error)
            return new ErrorResponseC(
                integrationLogs.INTEGRATIONS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static updateIntegration = async (
        id: string,
        props: Partial<IntegrationD>
    ): Promise<ResponseT> => {
        try {
            const integration = await IntegrationModel.findByIdAndUpdate(
                id,
                props,
                {
                    new: true,
                }
            )
            if (!integration) {
                const msg = formatString(
                    integrationLogs.INTEGRATION_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                integrationLogger.error(msg)
                return new ErrorResponseC(
                    integrationLogs.INTEGRATION_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(
                integrationLogs.INTEGRATION_UPDATED.message,
                {
                    name: integration.name,
                }
            )
            integrationLogger.info(msg)
            return new SuccessResponseC(
                integrationLogs.INTEGRATION_UPDATED.type,
                integration.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                integrationLogs.INTEGRATION_UPDATE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            integrationLogger.error(msg, err as Error)
            return new ErrorResponseC(
                integrationLogs.INTEGRATION_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static removeIntegration = async (id: string): Promise<ResponseT> => {
        try {
            const integration = await IntegrationModel.findById(id)
            if (!integration) {
                const msg = formatString(
                    integrationLogs.INTEGRATION_NOT_FOUND.message,
                    {
                        id,
                    }
                )
                integrationLogger.error(msg)
                return new ErrorResponseC(
                    integrationLogs.INTEGRATION_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            await integration.updateOne({ isActive: false })
            const msg = formatString(
                integrationLogs.INTEGRATION_DELETED.message,
                {
                    name: integration.name,
                }
            )
            integrationLogger.info(msg)
            return new SuccessResponseC(
                integrationLogs.INTEGRATION_DELETED.type,
                integration.toObject(),
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(
                integrationLogs.INTEGRATION_DELETE_ERROR.message,
                {
                    error: (err as Error)?.message || '',
                }
            )
            integrationLogger.error(msg, err as Error)
            return new ErrorResponseC(
                integrationLogs.INTEGRATION_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
