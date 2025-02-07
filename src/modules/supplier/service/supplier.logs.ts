import Logger from '@utils/Logger'

export type ISupplierLogs =
    | 'SUPPLIER_CREATED'
    | 'SUPPLIER_CREATION_ERROR'
    | 'SUPPLIERS_FOUND'
    | 'SUPPLIERS_ERROR'
    | 'SUPPLIER_FOUND'
    | 'SUPPLIER_NOT_FOUND'
    | 'SUPPLIER_UPDATED'
    | 'SUPPLIER_UPDATE_ERROR'
    | 'SUPPLIER_DELETED'
    | 'SUPPLIER_DELETE_ERROR'
    | 'SUPPLIERS_BY_RELIABILITY_FOUND'
    | 'SUPPLIERS_BY_RELIABILITY_ERROR'
    | 'UNAUTHORIZED_ACCESS'
    | 'INVALID_INPUT_ERROR'

export const supplierLogs: IErrors<ISupplierLogs> = {
    SUPPLIER_CREATED: {
        code: 400,
        message: 'Supplier {name} has been created successfully.',
        type: 'SUPPLIER_CREATED',
    },
    SUPPLIER_CREATION_ERROR: {
        code: 401,
        message: 'Error occurred while creating supplier: {error}',
        type: 'SUPPLIER_CREATION_ERROR',
    },
    SUPPLIERS_FOUND: {
        code: 402,
        message: 'Successfully retrieved all suppliers',
        type: 'SUPPLIERS_FOUND',
    },
    SUPPLIERS_ERROR: {
        code: 403,
        message: 'Error occurred while fetching suppliers: {error}',
        type: 'SUPPLIERS_ERROR',
    },
    SUPPLIER_FOUND: {
        code: 404,
        message: 'Successfully retrieved supplier {name}',
        type: 'SUPPLIER_FOUND',
    },
    SUPPLIER_NOT_FOUND: {
        code: 405,
        message: 'Supplier with ID {id} not found',
        type: 'SUPPLIER_NOT_FOUND',
    },
    SUPPLIER_UPDATED: {
        code: 406,
        message: 'Supplier {name} has been updated successfully',
        type: 'SUPPLIER_UPDATED',
    },
    SUPPLIER_UPDATE_ERROR: {
        code: 407,
        message: 'Error occurred while updating supplier: {error}',
        type: 'SUPPLIER_UPDATE_ERROR',
    },
    SUPPLIER_DELETED: {
        code: 408,
        message: 'Supplier {name} has been deleted successfully',
        type: 'SUPPLIER_DELETED',
    },
    SUPPLIER_DELETE_ERROR: {
        code: 409,
        message: 'Error occurred while deleting supplier: {error}',
        type: 'SUPPLIER_DELETE_ERROR',
    },
    SUPPLIERS_BY_RELIABILITY_FOUND: {
        code: 410,
        message:
            'Successfully retrieved suppliers with reliability score >= {score}',
        type: 'SUPPLIERS_BY_RELIABILITY_FOUND',
    },
    SUPPLIERS_BY_RELIABILITY_ERROR: {
        code: 411,
        message:
            'Error occurred while fetching suppliers by reliability: {error}',
        type: 'SUPPLIERS_BY_RELIABILITY_ERROR',
    },
    UNAUTHORIZED_ACCESS: {
        code: 412,
        message:
            'Unauthorized access to supplier operation. Admin access required.',
        type: 'UNAUTHORIZED_ACCESS',
    },
    INVALID_INPUT_ERROR: {
        code: 413,
        message: 'Invalid input provided: {error}',
        type: 'INVALID_INPUT_ERROR',
    },
} as const

export default supplierLogs
export const supplierLogger = new Logger('supplier')
