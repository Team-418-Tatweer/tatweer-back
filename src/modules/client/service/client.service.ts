import { ClientD, ClientModel } from '@models/client'
import clientLogs, { clientLogger } from './client.logs'
import { formatString } from '@utils/Strings'
import { HttpCodes } from '@config/Errors'
import { ErrorResponseC, SuccessResponseC } from '@myTypes/services.response'

export class ClientServices {
    static executeCreateClient = async (
        clientData: Partial<ClientD>
    ): Promise<ResponseT> => {
        try {
            const client = new ClientModel(clientData)
            await client.save()

            const msg = formatString(clientLogs.CLIENT_CREATED.message, {
                name: client.name,
            })
            clientLogger.info(msg)

            return new SuccessResponseC(
                clientLogs.CLIENT_CREATED.type,
                client.toObject(),
                msg,
                HttpCodes.Created.code
            )
        } catch (err) {
            const msg = formatString(clientLogs.CLIENT_CREATION_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            clientLogger.error(msg, err as Error)
            return new ErrorResponseC(
                clientLogs.CLIENT_CREATION_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetClients = async (): Promise<ResponseT> => {
        try {
            const clients = await ClientModel.find()
            return new SuccessResponseC(
                clientLogs.CLIENTS_FOUND.type,
                clients,
                clientLogs.CLIENTS_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(clientLogs.CLIENTS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            clientLogger.error(msg, err as Error)
            return new ErrorResponseC(
                clientLogs.CLIENTS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeGetClient = async (id: string): Promise<ResponseT> => {
        try {
            const client = await ClientModel.findById(id)
            if (!client) {
                const msg = formatString(clientLogs.CLIENT_NOT_FOUND.message, {
                    id,
                })
                clientLogger.error(msg)
                return new ErrorResponseC(
                    clientLogs.CLIENT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }
            return new SuccessResponseC(
                clientLogs.CLIENT_FOUND.type,
                client,
                clientLogs.CLIENT_FOUND.message,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(clientLogs.CLIENTS_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            clientLogger.error(msg, err as Error)
            return new ErrorResponseC(
                clientLogs.CLIENTS_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeUpdateClient = async (
        clientId: string,
        updates: Partial<ClientD>
    ): Promise<ResponseT> => {
        try {
            const product = await ClientModel.findByIdAndUpdate(
                clientId,
                updates,
                { new: true }
            )
            if (!product) {
                const msg = formatString(clientLogs.CLIENT_NOT_FOUND.message, {
                    id: clientId,
                })
                return new ErrorResponseC(
                    clientLogs.CLIENT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(clientLogs.CLIENT_UPDATED.message, {
                name: product.name,
            })
            return new SuccessResponseC(
                clientLogs.CLIENT_UPDATED.type,
                product,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(clientLogs.CLIENT_UPDATE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            clientLogger.error(msg, err as Error)
            return new ErrorResponseC(
                clientLogs.CLIENT_UPDATE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }

    static executeDeleteClient = async (
        clientId: string
    ): Promise<ResponseT> => {
        try {
            const client = await ClientModel.findByIdAndDelete(clientId)
            if (!client) {
                const msg = formatString(clientLogs.CLIENT_NOT_FOUND.message, {
                    id: clientId,
                })
                return new ErrorResponseC(
                    clientLogs.CLIENT_NOT_FOUND.type,
                    HttpCodes.NotFound.code,
                    msg
                )
            }

            const msg = formatString(clientLogs.CLIENT_DELETED.message, {
                name: client.name,
            })
            return new SuccessResponseC(
                clientLogs.CLIENT_DELETED.type,
                client,
                msg,
                HttpCodes.OK.code
            )
        } catch (err) {
            const msg = formatString(clientLogs.CLIENT_DELETE_ERROR.message, {
                error: (err as Error)?.message || '',
            })
            clientLogger.error(msg, err as Error)
            return new ErrorResponseC(
                clientLogs.CLIENT_DELETE_ERROR.type,
                HttpCodes.InternalServerError.code,
                msg
            )
        }
    }
}
