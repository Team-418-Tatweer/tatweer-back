import Logger from '@utils/Logger'

export type IActionLogs =
    | 'ACTION_CREATED'
    | 'ACTION_CREATION_ERROR'
    | 'ACTIONS_FOUND'
    | 'ACTIONS_ERROR'
    | 'ACTION_FOUND'
    | 'ACTION_NOT_FOUND'
    | 'ACTION_UPDATED'
    | 'ACTION_UPDATE_ERROR'
    | 'ACTION_DELETED'
    | 'ACTION_DELETE_ERROR'
    | 'UNAUTHORIZED_ACCESS'
    | 'INVALID_INPUT_ERROR'
    | 'ACTIONS_BY_ALERT_FOUND'
    | 'ACTIONS_BY_ALERT_ERROR'
    | 'ACTIONS_BY_STATUS_FOUND'
    | 'ACTIONS_BY_STATUS_ERROR'

export const actionLogger = new Logger('Action')

const actionLogs = {
    ACTION_CREATED: {
        type: 'ACTION_CREATED',
        message: 'Successfully created action {id}',
    },
    ACTION_CREATION_ERROR: {
        type: 'ACTION_CREATION_ERROR',
        message: 'Error creating action: {error}',
    },
    ACTIONS_FOUND: {
        type: 'ACTIONS_FOUND',
        message: 'Successfully retrieved all actions',
    },
    ACTIONS_ERROR: {
        type: 'ACTIONS_ERROR',
        message: 'Error retrieving actions: {error}',
    },
    ACTION_FOUND: {
        type: 'ACTION_FOUND',
        message: 'Successfully retrieved action {id}',
    },
    ACTION_NOT_FOUND: {
        type: 'ACTION_NOT_FOUND',
        message: 'Action not found with ID {id}',
    },
    ACTION_UPDATED: {
        type: 'ACTION_UPDATED',
        message: 'Successfully updated action {id}',
    },
    ACTION_UPDATE_ERROR: {
        type: 'ACTION_UPDATE_ERROR',
        message: 'Error updating action: {error}',
    },
    ACTION_DELETED: {
        type: 'ACTION_DELETED',
        message: 'Successfully deleted action {id}',
    },
    ACTION_DELETE_ERROR: {
        type: 'ACTION_DELETE_ERROR',
        message: 'Error deleting action: {error}',
    },
    UNAUTHORIZED_ACCESS: {
        type: 'UNAUTHORIZED_ACCESS',
        message: 'Unauthorized access to action operation',
    },
    INVALID_INPUT_ERROR: {
        type: 'INVALID_INPUT_ERROR',
        message: 'Invalid input provided: {error}',
    },
    ACTIONS_BY_ALERT_FOUND: {
        type: 'ACTIONS_BY_ALERT_FOUND',
        message: 'Successfully retrieved actions for alert {alertId}',
    },
    ACTIONS_BY_ALERT_ERROR: {
        type: 'ACTIONS_BY_ALERT_ERROR',
        message: 'Error retrieving actions by alert: {error}',
    },
    ACTIONS_BY_STATUS_FOUND: {
        type: 'ACTIONS_BY_STATUS_FOUND',
        message: 'Successfully retrieved actions with status: {status}',
    },
    ACTIONS_BY_STATUS_ERROR: {
        type: 'ACTIONS_BY_STATUS_ERROR',
        message: 'Error retrieving actions by status: {error}',
    },
}

export default actionLogs
