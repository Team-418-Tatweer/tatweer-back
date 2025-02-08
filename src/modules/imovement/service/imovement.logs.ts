import Logger from '@utils/Logger'

export type IInventoryMovementLogs =
    | 'MOVEMENT_CREATED'
    | 'MOVEMENT_CREATION_ERROR'
    | 'MOVEMENTS_FOUND'
    | 'MOVEMENTS_ERROR'
    | 'MOVEMENT_FOUND'
    | 'MOVEMENT_NOT_FOUND'
    | 'MOVEMENT_UPDATED'
    | 'MOVEMENT_UPDATE_ERROR'
    | 'MOVEMENT_DELETED'
    | 'MOVEMENT_DELETE_ERROR'
    | 'MOVEMENTS_BY_STATUS_FOUND'
    | 'MOVEMENTS_BY_STATUS_ERROR'
    | 'MOVEMENTS_BY_INVENTORY_FOUND'
    | 'MOVEMENTS_BY_INVENTORY_ERROR'
    | 'UNAUTHORIZED_ACCESS'
    | 'INVALID_INPUT_ERROR'

export const inventoryMovementLogs: IErrors<IInventoryMovementLogs> = {
    MOVEMENT_CREATED: {
        code: 600,
        message: 'Inventory movement #{id} has been recorded successfully.',
        type: 'MOVEMENT_CREATED',
    },
    MOVEMENT_CREATION_ERROR: {
        code: 601,
        message: 'Error occurred while recording movement: {error}',
        type: 'MOVEMENT_CREATION_ERROR',
    },
    MOVEMENTS_FOUND: {
        code: 602,
        message: 'Successfully retrieved all inventory movements',
        type: 'MOVEMENTS_FOUND',
    },
    MOVEMENTS_ERROR: {
        code: 603,
        message: 'Error occurred while fetching movements: {error}',
        type: 'MOVEMENTS_ERROR',
    },
    MOVEMENT_FOUND: {
        code: 604,
        message: 'Successfully retrieved movement #{id}',
        type: 'MOVEMENT_FOUND',
    },
    MOVEMENT_NOT_FOUND: {
        code: 605,
        message: 'Inventory movement with ID {id} not found',
        type: 'MOVEMENT_NOT_FOUND',
    },
    MOVEMENT_UPDATED: {
        code: 606,
        message: 'Inventory movement #{id} has been updated successfully',
        type: 'MOVEMENT_UPDATED',
    },
    MOVEMENT_UPDATE_ERROR: {
        code: 607,
        message: 'Error occurred while updating movement: {error}',
        type: 'MOVEMENT_UPDATE_ERROR',
    },
    MOVEMENT_DELETED: {
        code: 608,
        message:
            'Inventory movement #{id} has been cancelled/deleted successfully',
        type: 'MOVEMENT_DELETED',
    },
    MOVEMENT_DELETE_ERROR: {
        code: 609,
        message: 'Error occurred while cancelling/deleting movement: {error}',
        type: 'MOVEMENT_DELETE_ERROR',
    },
    MOVEMENTS_BY_STATUS_FOUND: {
        code: 610,
        message: 'Successfully retrieved movements with status {status}',
        type: 'MOVEMENTS_BY_STATUS_FOUND',
    },
    MOVEMENTS_BY_STATUS_ERROR: {
        code: 611,
        message: 'Error occurred while fetching movements by status: {error}',
        type: 'MOVEMENTS_BY_STATUS_ERROR',
    },
    MOVEMENTS_BY_INVENTORY_FOUND: {
        code: 612,
        message:
            'Successfully retrieved movements for inventory location {inventoryId}',
        type: 'MOVEMENTS_BY_INVENTORY_FOUND',
    },
    MOVEMENTS_BY_INVENTORY_ERROR: {
        code: 613,
        message:
            'Error occurred while fetching movements for inventory: {error}',
        type: 'MOVEMENTS_BY_INVENTORY_ERROR',
    },
    UNAUTHORIZED_ACCESS: {
        code: 614,
        message:
            'Unauthorized access to inventory movement operation. Admin or Supply Chain Team access required.',
        type: 'UNAUTHORIZED_ACCESS',
    },
    INVALID_INPUT_ERROR: {
        code: 615,
        message: 'Invalid input provided: {error}',
        type: 'INVALID_INPUT_ERROR',
    },
} as const

export default inventoryMovementLogs
export const inventoryMovementLogger = new Logger('inventory-movement')
