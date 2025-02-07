import Logger from '@utils/Logger'

export type IRawMaterialLogs =
    | 'RAW_MATERIAL_CREATED'
    | 'RAW_MATERIAL_CREATION_ERROR'
    | 'RAW_MATERIALS_FOUND'
    | 'RAW_MATERIALS_ERROR'
    | 'RAW_MATERIAL_FOUND'
    | 'RAW_MATERIAL_NOT_FOUND'
    | 'RAW_MATERIAL_UPDATED'
    | 'RAW_MATERIAL_UPDATE_ERROR'
    | 'RAW_MATERIAL_DELETED'
    | 'RAW_MATERIAL_DELETE_ERROR'
    | 'RAW_MATERIALS_BY_SUPPLIER_FOUND'
    | 'RAW_MATERIALS_BY_SUPPLIER_ERROR'
    | 'UNAUTHORIZED_ACCESS'
    | 'INVALID_INPUT_ERROR'

export const rawMaterialLogs: IErrors<IRawMaterialLogs> = {
    RAW_MATERIAL_CREATED: {
        code: 500,
        message: 'Raw material {name} has been created successfully.',
        type: 'RAW_MATERIAL_CREATED',
    },
    RAW_MATERIAL_CREATION_ERROR: {
        code: 501,
        message: 'Error occurred while creating raw material: {error}',
        type: 'RAW_MATERIAL_CREATION_ERROR',
    },
    RAW_MATERIALS_FOUND: {
        code: 502,
        message: 'Successfully retrieved all raw materials',
        type: 'RAW_MATERIALS_FOUND',
    },
    RAW_MATERIALS_ERROR: {
        code: 503,
        message: 'Error occurred while fetching raw materials: {error}',
        type: 'RAW_MATERIALS_ERROR',
    },
    RAW_MATERIAL_FOUND: {
        code: 504,
        message: 'Successfully retrieved raw material {name}',
        type: 'RAW_MATERIAL_FOUND',
    },
    RAW_MATERIAL_NOT_FOUND: {
        code: 505,
        message: 'Raw material with ID {id} not found',
        type: 'RAW_MATERIAL_NOT_FOUND',
    },
    RAW_MATERIAL_UPDATED: {
        code: 506,
        message: 'Raw material {name} has been updated successfully',
        type: 'RAW_MATERIAL_UPDATED',
    },
    RAW_MATERIAL_UPDATE_ERROR: {
        code: 507,
        message: 'Error occurred while updating raw material: {error}',
        type: 'RAW_MATERIAL_UPDATE_ERROR',
    },
    RAW_MATERIAL_DELETED: {
        code: 508,
        message: 'Raw material {name} has been deleted successfully',
        type: 'RAW_MATERIAL_DELETED',
    },
    RAW_MATERIAL_DELETE_ERROR: {
        code: 509,
        message: 'Error occurred while deleting raw material: {error}',
        type: 'RAW_MATERIAL_DELETE_ERROR',
    },
    RAW_MATERIALS_BY_SUPPLIER_FOUND: {
        code: 510,
        message:
            'Successfully retrieved raw materials from supplier {supplierName}',
        type: 'RAW_MATERIALS_BY_SUPPLIER_FOUND',
    },
    RAW_MATERIALS_BY_SUPPLIER_ERROR: {
        code: 511,
        message:
            'Error occurred while fetching raw materials by supplier: {error}',
        type: 'RAW_MATERIALS_BY_SUPPLIER_ERROR',
    },
    UNAUTHORIZED_ACCESS: {
        code: 512,
        message:
            'Unauthorized access to raw material operation. Admin or Supply Chain Team access required.',
        type: 'UNAUTHORIZED_ACCESS',
    },
    INVALID_INPUT_ERROR: {
        code: 513,
        message: 'Invalid input provided: {error}',
        type: 'INVALID_INPUT_ERROR',
    },
} as const

export default rawMaterialLogs
export const rawMaterialLogger = new Logger('raw-material')
