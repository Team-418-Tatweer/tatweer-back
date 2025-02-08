import Logger from '@utils/Logger'

export type IAlertLogs =
    | 'ALERT_CREATED'
    | 'ALERT_CREATION_ERROR'
    | 'ALERTS_FOUND'
    | 'ALERTS_ERROR'
    | 'ALERT_FOUND'
    | 'ALERT_NOT_FOUND'
    | 'ALERT_UPDATED'
    | 'ALERT_UPDATE_ERROR'
    | 'ALERT_DELETED'
    | 'ALERT_DELETE_ERROR'
    | 'UNAUTHORIZED_ACCESS'
    | 'INVALID_INPUT_ERROR'
    | 'ALERTS_BY_SEVERITY_FOUND'
    | 'ALERTS_BY_SEVERITY_ERROR'
    | 'ALERTS_BY_STATUS_FOUND'
    | 'ALERTS_BY_STATUS_ERROR'
    | 'ALERTS_BY_TYPE_FOUND'
    | 'ALERTS_BY_TYPE_ERROR'
    | 'ALERTS_BY_PRIORITY_FOUND'
    | 'ALERTS_BY_PRIORITY_ERROR'

export const alertLogger = new Logger('Alert')

const alertLogs = {
    ALERT_CREATED: {
        type: 'ALERT_CREATED',
        message: 'Successfully created alert {id}',
    },
    ALERT_CREATION_ERROR: {
        type: 'ALERT_CREATION_ERROR',
        message: 'Error creating alert: {error}',
    },
    ALERTS_FOUND: {
        type: 'ALERTS_FOUND',
        message: 'Successfully retrieved all alerts',
    },
    ALERTS_ERROR: {
        type: 'ALERTS_ERROR',
        message: 'Error retrieving alerts: {error}',
    },
    ALERT_FOUND: {
        type: 'ALERT_FOUND',
        message: 'Successfully retrieved alert {id}',
    },
    ALERT_NOT_FOUND: {
        type: 'ALERT_NOT_FOUND',
        message: 'Alert not found with ID {id}',
    },
    ALERT_UPDATED: {
        type: 'ALERT_UPDATED',
        message: 'Successfully updated alert {id}',
    },
    ALERT_UPDATE_ERROR: {
        type: 'ALERT_UPDATE_ERROR',
        message: 'Error updating alert: {error}',
    },
    ALERT_DELETED: {
        type: 'ALERT_DELETED',
        message: 'Successfully deleted alert {id}',
    },
    ALERT_DELETE_ERROR: {
        type: 'ALERT_DELETE_ERROR',
        message: 'Error deleting alert: {error}',
    },
    UNAUTHORIZED_ACCESS: {
        type: 'UNAUTHORIZED_ACCESS',
        message: 'Unauthorized access to alert operation',
    },
    INVALID_INPUT_ERROR: {
        type: 'INVALID_INPUT_ERROR',
        message: 'Invalid input provided: {error}',
    },
    ALERTS_BY_SEVERITY_FOUND: {
        type: 'ALERTS_BY_SEVERITY_FOUND',
        message: 'Successfully retrieved alerts with severity level: {level}',
    },
    ALERTS_BY_SEVERITY_ERROR: {
        type: 'ALERTS_BY_SEVERITY_ERROR',
        message: 'Error retrieving alerts by severity: {error}',
    },
    ALERTS_BY_STATUS_FOUND: {
        type: 'ALERTS_BY_STATUS_FOUND',
        message: 'Successfully retrieved alerts with status: {status}',
    },
    ALERTS_BY_STATUS_ERROR: {
        type: 'ALERTS_BY_STATUS_ERROR',
        message: 'Error retrieving alerts by status: {error}',
    },
    ALERTS_BY_TYPE_FOUND: {
        type: 'ALERTS_BY_TYPE_FOUND',
        message: 'Successfully retrieved alerts with type: {type}',
    },
    ALERTS_BY_TYPE_ERROR: {
        type: 'ALERTS_BY_TYPE_ERROR',
        message: 'Error retrieving alerts by type: {error}',
    },
    ALERTS_BY_PRIORITY_FOUND: {
        type: 'ALERTS_BY_PRIORITY_FOUND',
        message:
            'Successfully retrieved alerts with priority level: {priority}',
    },
    ALERTS_BY_PRIORITY_ERROR: {
        type: 'ALERTS_BY_PRIORITY_ERROR',
        message: 'Error retrieving alerts by priority: {error}',
    },
}

export default alertLogs
