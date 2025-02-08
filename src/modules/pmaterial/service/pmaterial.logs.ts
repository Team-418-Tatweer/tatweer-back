import Logger from '@utils/Logger'

export type IPMaterialLogs =
    | 'PMATERIAL_CREATED'
    | 'PMATERIAL_CREATION_ERROR'
    | 'PMATERIALS_FOUND'
    | 'PMATERIALS_ERROR'
    | 'PMATERIAL_FOUND'
    | 'PMATERIAL_NOT_FOUND'
    | 'PMATERIAL_UPDATED'
    | 'PMATERIAL_UPDATE_ERROR'
    | 'PMATERIAL_DELETED'
    | 'PMATERIAL_DELETE_ERROR'
    | 'PMATERIALS_BY_TYPE_FOUND'
    | 'PMATERIALS_BY_TYPE_ERROR'
    | 'PMATERIAL_STATUS_UPDATED'
    | 'PMATERIAL_STATUS_UPDATE_ERROR'
    | 'INVALID_INPUT_ERROR'
    | 'UNAUTHORIZED_ACCESS'

export const pmaterialLogs: IErrors<IPMaterialLogs> = {
    PMATERIAL_CREATED: {
        code: 300,
        message: 'Product Material "{name}" has been created successfully.',
        type: 'PMATERIAL_CREATED',
    },
    PMATERIAL_CREATION_ERROR: {
        code: 301,
        message: 'Error occurred while creating product material: {error}',
        type: 'PMATERIAL_CREATION_ERROR',
    },
    PMATERIALS_FOUND: {
        code: 302,
        message: 'Successfully retrieved all product materials',
        type: 'PMATERIALS_FOUND',
    },
    PMATERIALS_ERROR: {
        code: 303,
        message: 'Error occurred while fetching product materials: {error}',
        type: 'PMATERIALS_ERROR',
    },
    PMATERIAL_FOUND: {
        code: 304,
        message: 'Successfully retrieved product material "{name}"',
        type: 'PMATERIAL_FOUND',
    },
    PMATERIAL_NOT_FOUND: {
        code: 305,
        message: 'Product Material with ID {id} not found',
        type: 'PMATERIAL_NOT_FOUND',
    },
    PMATERIAL_UPDATED: {
        code: 306,
        message: 'Product Material "{name}" has been updated successfully',
        type: 'PMATERIAL_UPDATED',
    },
    PMATERIAL_UPDATE_ERROR: {
        code: 307,
        message: 'Error occurred while updating product material: {error}',
        type: 'PMATERIAL_UPDATE_ERROR',
    },
    PMATERIAL_DELETED: {
        code: 308,
        message: 'Product Material "{name}" has been deleted successfully',
        type: 'PMATERIAL_DELETED',
    },
    PMATERIAL_DELETE_ERROR: {
        code: 309,
        message: 'Error occurred while deleting product material: {error}',
        type: 'PMATERIAL_DELETE_ERROR',
    },
    PMATERIALS_BY_TYPE_FOUND: {
        code: 310,
        message:
            'Successfully retrieved all product materials of type "{type}"',
        type: 'PMATERIALS_BY_TYPE_FOUND',
    },
    PMATERIALS_BY_TYPE_ERROR: {
        code: 311,
        message:
            'Error occurred while fetching product materials by type: {error}',
        type: 'PMATERIALS_BY_TYPE_ERROR',
    },
    PMATERIAL_STATUS_UPDATED: {
        code: 312,
        message: 'Status updated successfully for product material "{name}"',
        type: 'PMATERIAL_STATUS_UPDATED',
    },
    PMATERIAL_STATUS_UPDATE_ERROR: {
        code: 313,
        message:
            'Error occurred while updating product material status: {error}',
        type: 'PMATERIAL_STATUS_UPDATE_ERROR',
    },
    INVALID_INPUT_ERROR: {
        code: 314,
        message: 'Invalid input provided: {error}',
        type: 'INVALID_INPUT_ERROR',
    },
    UNAUTHORIZED_ACCESS: {
        code: 315,
        message: 'Unauthorized access to product material operation',
        type: 'UNAUTHORIZED_ACCESS',
    },
} as const

export default pmaterialLogs
export const pmaterialLogger = new Logger('pmaterial')
