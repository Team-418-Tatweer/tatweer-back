import Logger from '@utils/Logger'

export type IWarehouseLogs =
    | 'WAREHOUSE_CREATED'
    | 'WAREHOUSE_CREATION_ERROR'
    | 'WAREHOUSES_FOUND'
    | 'WAREHOUSES_ERROR'
    | 'WAREHOUSE_FOUND'
    | 'WAREHOUSE_NOT_FOUND'
    | 'WAREHOUSE_UPDATED'
    | 'WAREHOUSE_UPDATE_ERROR'
    | 'WAREHOUSE_DELETED'
    | 'WAREHOUSE_DELETE_ERROR'
    | 'UNAUTHORIZED_ACCESS'
    | 'INVALID_INPUT_ERROR'

export const warehouseLogs: IErrors<IWarehouseLogs> = {
    WAREHOUSE_CREATED: {
        code: 500,
        message: 'Warehouse {name} has been created successfully.',
        type: 'WAREHOUSE_CREATED',
    },
    WAREHOUSE_CREATION_ERROR: {
        code: 501,
        message: 'Error occurred while creating warehouse: {error}',
        type: 'WAREHOUSE_CREATION_ERROR',
    },
    WAREHOUSES_FOUND: {
        code: 502,
        message: 'Successfully retrieved all warehouses',
        type: 'WAREHOUSES_FOUND',
    },
    WAREHOUSES_ERROR: {
        code: 503,
        message: 'Error occurred while fetching warehouses: {error}',
        type: 'WAREHOUSES_ERROR',
    },
    WAREHOUSE_FOUND: {
        code: 504,
        message: 'Successfully retrieved warehouse {name}',
        type: 'WAREHOUSE_FOUND',
    },
    WAREHOUSE_NOT_FOUND: {
        code: 505,
        message: 'Warehouse with ID {id} not found',
        type: 'WAREHOUSE_NOT_FOUND',
    },
    WAREHOUSE_UPDATED: {
        code: 506,
        message: 'Warehouse {name} has been updated successfully',
        type: 'WAREHOUSE_UPDATED',
    },
    WAREHOUSE_UPDATE_ERROR: {
        code: 507,
        message: 'Error occurred while updating warehouse: {error}',
        type: 'WAREHOUSE_UPDATE_ERROR',
    },
    WAREHOUSE_DELETED: {
        code: 508,
        message: 'Warehouse {name} has been deleted successfully',
        type: 'WAREHOUSE_DELETED',
    },
    WAREHOUSE_DELETE_ERROR: {
        code: 509,
        message: 'Error occurred while deleting warehouse: {error}',
        type: 'WAREHOUSE_DELETE_ERROR',
    },
    UNAUTHORIZED_ACCESS: {
        code: 510,
        message:
            'Unauthorized access to warehouse operation. Admin access required.',
        type: 'UNAUTHORIZED_ACCESS',
    },
    INVALID_INPUT_ERROR: {
        code: 511,
        message: 'Invalid input provided: {error}',
        type: 'INVALID_INPUT_ERROR',
    },
} as const

export default warehouseLogs
export const warehouseLogger = new Logger('warehouse')
