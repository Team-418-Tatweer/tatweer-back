import Logger from '@utils/Logger'

export type IClientLogs =
    | 'CLIENT_CREATED'
    | 'CLIENT_CREATION_ERROR'
    | 'CLIENTS_FOUND'
    | 'CLIENTS_ERROR'
    | 'CLIENT_FOUND'
    | 'CLIENT_NOT_FOUND'
    | 'CLIENT_UPDATED'
    | 'CLIENT_UPDATE_ERROR'
    | 'CLIENT_DELETED'
    | 'CLIENT_DELETE_ERROR'
    | 'CLIENTS_BY_TYPE_FOUND'
    | 'CLIENTS_BY_TYPE_ERROR'
    | 'CLIENT_STATUS_UPDATED'
    | 'CLIENT_STATUS_UPDATE_ERROR'
    | 'INVALID_INPUT_ERROR'
    | 'UNAUTHORIZED_ACCESS'

export const clientLogs: IErrors<IClientLogs> = {
    CLIENT_CREATED: {
        code: 200,
        message: 'Client "{name}" has been created successfully.',
        type: 'CLIENT_CREATED',
    },
    CLIENT_CREATION_ERROR: {
        code: 201,
        message: 'Error occurred while creating client: {error}',
        type: 'CLIENT_CREATION_ERROR',
    },
    CLIENTS_FOUND: {
        code: 202,
        message: 'Successfully retrieved all clients',
        type: 'CLIENTS_FOUND',
    },
    CLIENTS_ERROR: {
        code: 203,
        message: 'Error occurred while fetching clients: {error}',
        type: 'CLIENTS_ERROR',
    },
    CLIENT_FOUND: {
        code: 204,
        message: 'Successfully retrieved client "{name}"',
        type: 'CLIENT_FOUND',
    },
    CLIENT_NOT_FOUND: {
        code: 205,
        message: 'Client with ID {id} not found',
        type: 'CLIENT_NOT_FOUND',
    },
    CLIENT_UPDATED: {
        code: 206,
        message: 'Client "{name}" has been updated successfully',
        type: 'CLIENT_UPDATED',
    },
    CLIENT_UPDATE_ERROR: {
        code: 207,
        message: 'Error occurred while updating client: {error}',
        type: 'CLIENT_UPDATE_ERROR',
    },
    CLIENT_DELETED: {
        code: 208,
        message: 'Client "{name}" has been deleted successfully',
        type: 'CLIENT_DELETED',
    },
    CLIENT_DELETE_ERROR: {
        code: 209,
        message: 'Error occurred while deleting client: {error}',
        type: 'CLIENT_DELETE_ERROR',
    },
    CLIENTS_BY_TYPE_FOUND: {
        code: 210,
        message: 'Successfully retrieved all clients of type "{type}"',
        type: 'CLIENTS_BY_TYPE_FOUND',
    },
    CLIENTS_BY_TYPE_ERROR: {
        code: 211,
        message: 'Error occurred while fetching clients by type: {error}',
        type: 'CLIENTS_BY_TYPE_ERROR',
    },
    CLIENT_STATUS_UPDATED: {
        code: 212,
        message: 'Status updated successfully for client "{name}"',
        type: 'CLIENT_STATUS_UPDATED',
    },
    CLIENT_STATUS_UPDATE_ERROR: {
        code: 213,
        message: 'Error occurred while updating client status: {error}',
        type: 'CLIENT_STATUS_UPDATE_ERROR',
    },
    INVALID_INPUT_ERROR: {
        code: 214,
        message: 'Invalid input provided: {error}',
        type: 'INVALID_INPUT_ERROR',
    },
    UNAUTHORIZED_ACCESS: {
        code: 215,
        message: 'Unauthorized access to client operation',
        type: 'UNAUTHORIZED_ACCESS',
    },
} as const

export default clientLogs
export const clientLogger = new Logger('client')
