import Logger from '@utils/Logger'

export type IIntegrationLogs =
    | 'INTEGRATION_CREATED'
    | 'INTEGRATION_CREATION_ERROR'
    | 'INTEGRATIONS_FOUND'
    | 'INTEGRATIONS_ERROR'
    | 'INTEGRATION_FOUND'
    | 'INTEGRATION_NOT_FOUND'
    | 'INTEGRATION_UPDATED'
    | 'INTEGRATION_UPDATE_ERROR'
    | 'INTEGRATION_DELETED'
    | 'INTEGRATION_DELETE_ERROR'
    | 'UNAUTHORIZED_ACCESS'
    | 'INVALID_INPUT_ERROR'

export const integrationLogs: IErrors<IIntegrationLogs> = {
    INTEGRATION_CREATED: {
        code: 500,
        message: 'Integration {name} has been created successfully.',
        type: 'INTEGRATION_CREATED',
    },
    INTEGRATION_CREATION_ERROR: {
        code: 501,
        message: 'Error occurred while creating integration: {error}',
        type: 'INTEGRATION_CREATION_ERROR',
    },
    INTEGRATIONS_FOUND: {
        code: 502,
        message: 'Successfully retrieved all integrations',
        type: 'INTEGRATIONS_FOUND',
    },
    INTEGRATIONS_ERROR: {
        code: 503,
        message: 'Error occurred while fetching integrations: {error}',
        type: 'INTEGRATIONS_ERROR',
    },
    INTEGRATION_FOUND: {
        code: 504,
        message: 'Successfully retrieved integration {name}',
        type: 'INTEGRATION_FOUND',
    },
    INTEGRATION_NOT_FOUND: {
        code: 505,
        message: 'Integration with ID {id} not found',
        type: 'INTEGRATION_NOT_FOUND',
    },
    INTEGRATION_UPDATED: {
        code: 506,
        message: 'Integration {name} has been updated successfully',
        type: 'INTEGRATION_UPDATED',
    },
    INTEGRATION_UPDATE_ERROR: {
        code: 507,
        message: 'Error occurred while updating integration: {error}',
        type: 'INTEGRATION_UPDATE_ERROR',
    },
    INTEGRATION_DELETED: {
        code: 508,
        message: 'Integration {name} has been deleted successfully',
        type: 'INTEGRATION_DELETED',
    },
    INTEGRATION_DELETE_ERROR: {
        code: 509,
        message: 'Error occurred while deleting integration: {error}',
        type: 'INTEGRATION_DELETE_ERROR',
    },
    UNAUTHORIZED_ACCESS: {
        code: 510,
        message:
            'Unauthorized access to integration operation. Admin access required.',
        type: 'UNAUTHORIZED_ACCESS',
    },
    INVALID_INPUT_ERROR: {
        code: 511,
        message: 'Invalid input provided: {error}',
        type: 'INVALID_INPUT_ERROR',
    },
} as const

export default integrationLogs
export const integrationLogger = new Logger('integration')
