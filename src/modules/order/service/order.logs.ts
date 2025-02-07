import Logger from '@utils/Logger'

export type IOrderLogs =
    | 'ORDER_CREATED'
    | 'ORDER_CREATION_ERROR'
    | 'ORDERS_FOUND'
    | 'ORDERS_ERROR'
    | 'ORDER_FOUND'
    | 'ORDER_NOT_FOUND'
    | 'ORDER_UPDATED'
    | 'ORDER_UPDATE_ERROR'
    | 'ORDER_DELETED'
    | 'ORDER_DELETE_ERROR'
    | 'ORDERS_BY_CLIENT_FOUND'
    | 'ORDERS_BY_CLIENT_ERROR'
    | 'ORDERS_BY_REGION_FOUND'
    | 'ORDERS_BY_REGION_ERROR'
    | 'ORDERS_BY_STATUS_FOUND'
    | 'ORDERS_BY_STATUS_ERROR'
    | 'INVALID_INPUT_ERROR'
    | 'UNAUTHORIZED_ACCESS'
    | 'ORDER_ITEMS_ERROR'

export const orderLogs: IErrors<IOrderLogs> = {
    ORDER_CREATED: {
        code: 300,
        message:
            'Order #{orderId} has been created successfully for client {clientName}.',
        type: 'ORDER_CREATED',
    },
    ORDER_CREATION_ERROR: {
        code: 301,
        message: 'Error occurred while creating order: {error}',
        type: 'ORDER_CREATION_ERROR',
    },
    ORDERS_FOUND: {
        code: 302,
        message: 'Successfully retrieved all orders',
        type: 'ORDERS_FOUND',
    },
    ORDERS_ERROR: {
        code: 303,
        message: 'Error occurred while fetching orders: {error}',
        type: 'ORDERS_ERROR',
    },
    ORDER_FOUND: {
        code: 304,
        message: 'Successfully retrieved order #{orderId}',
        type: 'ORDER_FOUND',
    },
    ORDER_NOT_FOUND: {
        code: 305,
        message: 'Order with ID {id} not found',
        type: 'ORDER_NOT_FOUND',
    },
    ORDER_UPDATED: {
        code: 306,
        message: 'Order #{orderId} has been updated successfully',
        type: 'ORDER_UPDATED',
    },
    ORDER_UPDATE_ERROR: {
        code: 307,
        message: 'Error occurred while updating order: {error}',
        type: 'ORDER_UPDATE_ERROR',
    },
    ORDER_DELETED: {
        code: 308,
        message: 'Order #{orderId} has been cancelled/deleted successfully',
        type: 'ORDER_DELETED',
    },
    ORDER_DELETE_ERROR: {
        code: 309,
        message: 'Error occurred while cancelling/deleting order: {error}',
        type: 'ORDER_DELETE_ERROR',
    },
    ORDERS_BY_CLIENT_FOUND: {
        code: 310,
        message: 'Successfully retrieved all orders for client {clientName}',
        type: 'ORDERS_BY_CLIENT_FOUND',
    },
    ORDERS_BY_CLIENT_ERROR: {
        code: 311,
        message: 'Error occurred while fetching orders for client: {error}',
        type: 'ORDERS_BY_CLIENT_ERROR',
    },
    ORDERS_BY_REGION_FOUND: {
        code: 312,
        message: 'Successfully retrieved all orders for region {regionName}',
        type: 'ORDERS_BY_REGION_FOUND',
    },
    ORDERS_BY_REGION_ERROR: {
        code: 313,
        message: 'Error occurred while fetching orders for region: {error}',
        type: 'ORDERS_BY_REGION_ERROR',
    },
    ORDERS_BY_STATUS_FOUND: {
        code: 314,
        message: 'Successfully retrieved all orders with status {status}',
        type: 'ORDERS_BY_STATUS_FOUND',
    },
    ORDERS_BY_STATUS_ERROR: {
        code: 315,
        message: 'Error occurred while fetching orders by status: {error}',
        type: 'ORDERS_BY_STATUS_ERROR',
    },
    INVALID_INPUT_ERROR: {
        code: 316,
        message: 'Invalid input provided: {error}',
        type: 'INVALID_INPUT_ERROR',
    },
    UNAUTHORIZED_ACCESS: {
        code: 317,
        message: 'Unauthorized access to order operation',
        type: 'UNAUTHORIZED_ACCESS',
    },
    ORDER_ITEMS_ERROR: {
        code: 318,
        message: 'Error processing order items: {error}',
        type: 'ORDER_ITEMS_ERROR',
    },
} as const

export default orderLogs
export const orderLogger = new Logger('order')
