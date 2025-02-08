import Logger from '@utils/Logger'

export type IInventoryLogs =
    | 'INVENTORY_CREATED'
    | 'INVENTORY_CREATION_ERROR'
    | 'INVENTORIES_FOUND'
    | 'INVENTORIES_ERROR'
    | 'INVENTORY_FOUND'
    | 'INVENTORY_NOT_FOUND'
    | 'INVENTORY_UPDATED'
    | 'INVENTORY_UPDATE_ERROR'
    | 'INVENTORY_DELETED'
    | 'INVENTORY_DELETE_ERROR'
    | 'UNAUTHORIZED_ACCESS'
    | 'INVALID_INPUT_ERROR'
    | 'INVENTORIES_BY_ITEM_ID_FOUND'
    | 'INVENTORIES_BY_ITEM_ID_ERROR'

export const inventoryLogger = new Logger('Inventory')

const inventoryLogs = {
    INVENTORY_CREATED: {
        type: 'INVENTORY_CREATED',
        message: 'Successfully created inventory item {itemID}',
    },
    INVENTORY_CREATION_ERROR: {
        type: 'INVENTORY_CREATION_ERROR',
        message: 'Error creating inventory item: {error}',
    },
    INVENTORIES_FOUND: {
        type: 'INVENTORIES_FOUND',
        message: 'Successfully retrieved all inventory items',
    },
    INVENTORIES_ERROR: {
        type: 'INVENTORIES_ERROR',
        message: 'Error retrieving inventory items: {error}',
    },
    INVENTORY_FOUND: {
        type: 'INVENTORY_FOUND',
        message: 'Successfully retrieved inventory item {itemID}',
    },
    INVENTORY_NOT_FOUND: {
        type: 'INVENTORY_NOT_FOUND',
        message: 'Inventory item not found with ID {itemID}',
    },
    INVENTORY_UPDATED: {
        type: 'INVENTORY_UPDATED',
        message: 'Successfully updated inventory item {itemID}',
    },
    INVENTORY_UPDATE_ERROR: {
        type: 'INVENTORY_UPDATE_ERROR',
        message: 'Error updating inventory item: {error}',
    },
    INVENTORY_DELETED: {
        type: 'INVENTORY_DELETED',
        message: 'Successfully deleted inventory item {itemID}',
    },
    INVENTORY_DELETE_ERROR: {
        type: 'INVENTORY_DELETE_ERROR',
        message: 'Error deleting inventory item: {error}',
    },
    UNAUTHORIZED_ACCESS: {
        type: 'UNAUTHORIZED_ACCESS',
        message: 'Unauthorized access to inventory operation',
    },
    INVALID_INPUT_ERROR: {
        type: 'INVALID_INPUT_ERROR',
        message: 'Invalid input provided: {error}',
    },
    INVENTORIES_BY_ITEM_ID_FOUND: {
        type: 'INVENTORIES_BY_ITEM_ID_FOUND',
        message: 'Successfully retrieved inventory items of itemID: {itemID}',
    },
    INVENTORIES_BY_ITEM_ID_ERROR: {
        type: 'INVENTORIES_BY_ITEM_ID_ERROR',
        message: 'Error retrieving inventory items by itemID: {error}',
    },
}

export default inventoryLogs
