import Logger from '@utils/Logger'

export type IProductLogs =
    | 'PRODUCT_CREATED'
    | 'PRODUCT_CREATION_ERROR'
    | 'PRODUCTS_FOUND'
    | 'PRODUCTS_ERROR'
    | 'PRODUCT_FOUND'
    | 'PRODUCT_NOT_FOUND'
    | 'PRODUCT_UPDATED'
    | 'PRODUCT_UPDATE_ERROR'
    | 'PRODUCT_DELETED'
    | 'PRODUCT_DELETE_ERROR'
    | 'PRODUCTS_BY_CATEGORY_FOUND'
    | 'PRODUCTS_BY_CATEGORY_ERROR'
    | 'PRODUCT_PRICE_UPDATED'
    | 'PRODUCT_PRICE_UPDATE_ERROR'
    | 'INVALID_INPUT_ERROR'
    | 'UNAUTHORIZED_ACCESS'

export const productLogs: IErrors<IProductLogs> = {
    PRODUCT_CREATED: {
        code: 100,
        message: 'Product "{name}" has been created successfully.',
        type: 'PRODUCT_CREATED',
    },
    PRODUCT_CREATION_ERROR: {
        code: 101,
        message: 'Error occurred while creating product: {error}',
        type: 'PRODUCT_CREATION_ERROR',
    },
    PRODUCTS_FOUND: {
        code: 102,
        message: 'Successfully retrieved all products',
        type: 'PRODUCTS_FOUND',
    },
    PRODUCTS_ERROR: {
        code: 103,
        message: 'Error occurred while fetching products: {error}',
        type: 'PRODUCTS_ERROR',
    },
    PRODUCT_FOUND: {
        code: 104,
        message: 'Successfully retrieved product "{name}"',
        type: 'PRODUCT_FOUND',
    },
    PRODUCT_NOT_FOUND: {
        code: 105,
        message: 'Product with ID {id} not found',
        type: 'PRODUCT_NOT_FOUND',
    },
    PRODUCT_UPDATED: {
        code: 106,
        message: 'Product "{name}" has been updated successfully',
        type: 'PRODUCT_UPDATED',
    },
    PRODUCT_UPDATE_ERROR: {
        code: 107,
        message: 'Error occurred while updating product: {error}',
        type: 'PRODUCT_UPDATE_ERROR',
    },
    PRODUCT_DELETED: {
        code: 108,
        message: 'Product "{name}" has been deleted successfully',
        type: 'PRODUCT_DELETED',
    },
    PRODUCT_DELETE_ERROR: {
        code: 109,
        message: 'Error occurred while deleting product: {error}',
        type: 'PRODUCT_DELETE_ERROR',
    },
    PRODUCTS_BY_CATEGORY_FOUND: {
        code: 110,
        message: 'Successfully retrieved all products in category "{category}"',
        type: 'PRODUCTS_BY_CATEGORY_FOUND',
    },
    PRODUCTS_BY_CATEGORY_ERROR: {
        code: 111,
        message: 'Error occurred while fetching products by category: {error}',
        type: 'PRODUCTS_BY_CATEGORY_ERROR',
    },
    PRODUCT_PRICE_UPDATED: {
        code: 112,
        message: 'Price updated successfully for product "{name}"',
        type: 'PRODUCT_PRICE_UPDATED',
    },
    PRODUCT_PRICE_UPDATE_ERROR: {
        code: 113,
        message: 'Error occurred while updating product price: {error}',
        type: 'PRODUCT_PRICE_UPDATE_ERROR',
    },
    INVALID_INPUT_ERROR: {
        code: 114,
        message: 'Invalid input provided: {error}',
        type: 'INVALID_INPUT_ERROR',
    },
    UNAUTHORIZED_ACCESS: {
        code: 115,
        message: 'Unauthorized access to product operation',
        type: 'UNAUTHORIZED_ACCESS',
    },
} as const

export default productLogs
export const productLogger = new Logger('product')
