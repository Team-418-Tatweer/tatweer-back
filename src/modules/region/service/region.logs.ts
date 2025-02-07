import Logger from '@utils/Logger'

export type IRegionLogs =
    | 'REGION_CREATED'
    | 'REGION_CREATION_ERROR'
    | 'REGIONS_FOUND'
    | 'REGIONS_ERROR'
    | 'REGION_FOUND'
    | 'REGION_NOT_FOUND'
    | 'REGION_UPDATED'
    | 'REGION_UPDATE_ERROR'
    | 'REGION_DELETED'
    | 'REGION_DELETE_ERROR'
    | 'REGIONS_BY_COUNTRY_FOUND'
    | 'REGIONS_BY_COUNTRY_ERROR'
    | 'REGION_STATUS_UPDATED'
    | 'REGION_STATUS_UPDATE_ERROR'
    | 'INVALID_INPUT_ERROR'
    | 'UNAUTHORIZED_ACCESS'

export const regionLogs: IErrors<IRegionLogs> = {
    REGION_CREATED: {
        code: 400,
        message: 'Region "{name}" has been created successfully.',
        type: 'REGION_CREATED',
    },
    REGION_CREATION_ERROR: {
        code: 401,
        message: 'Error occurred while creating region: {error}',
        type: 'REGION_CREATION_ERROR',
    },
    REGIONS_FOUND: {
        code: 402,
        message: 'Successfully retrieved all regions',
        type: 'REGIONS_FOUND',
    },
    REGIONS_ERROR: {
        code: 403,
        message: 'Error occurred while fetching regions: {error}',
        type: 'REGIONS_ERROR',
    },
    REGION_FOUND: {
        code: 404,
        message: 'Successfully retrieved region "{name}"',
        type: 'REGION_FOUND',
    },
    REGION_NOT_FOUND: {
        code: 405,
        message: 'Region with ID {id} not found',
        type: 'REGION_NOT_FOUND',
    },
    REGION_UPDATED: {
        code: 406,
        message: 'Region "{name}" has been updated successfully',
        type: 'REGION_UPDATED',
    },
    REGION_UPDATE_ERROR: {
        code: 407,
        message: 'Error occurred while updating region: {error}',
        type: 'REGION_UPDATE_ERROR',
    },
    REGION_DELETED: {
        code: 408,
        message: 'Region "{name}" has been deleted successfully',
        type: 'REGION_DELETED',
    },
    REGION_DELETE_ERROR: {
        code: 409,
        message: 'Error occurred while deleting region: {error}',
        type: 'REGION_DELETE_ERROR',
    },
    REGIONS_BY_COUNTRY_FOUND: {
        code: 410,
        message: 'Successfully retrieved all regions in country "{country}"',
        type: 'REGIONS_BY_COUNTRY_FOUND',
    },
    REGIONS_BY_COUNTRY_ERROR: {
        code: 411,
        message: 'Error occurred while fetching regions by country: {error}',
        type: 'REGIONS_BY_COUNTRY_ERROR',
    },
    REGION_STATUS_UPDATED: {
        code: 412,
        message: 'Status updated successfully for region "{name}"',
        type: 'REGION_STATUS_UPDATED',
    },
    REGION_STATUS_UPDATE_ERROR: {
        code: 413,
        message: 'Error occurred while updating region status: {error}',
        type: 'REGION_STATUS_UPDATE_ERROR',
    },
    INVALID_INPUT_ERROR: {
        code: 414,
        message: 'Invalid input provided: {error}',
        type: 'INVALID_INPUT_ERROR',
    },
    UNAUTHORIZED_ACCESS: {
        code: 415,
        message: 'Unauthorized access to region operation',
        type: 'UNAUTHORIZED_ACCESS',
    },
} as const

export default regionLogs
export const regionLogger = new Logger('region')
